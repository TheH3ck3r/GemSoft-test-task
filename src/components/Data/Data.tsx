"use client";

import styles from "./Data.module.scss";
import useSWR from "swr";
import _ from "lodash";
import { BaseFetcher } from "@/common/fetcher";
import { Skeleton, Tab, Tabs } from "@mui/material";
import { Cards } from "../Cards";
import { useState } from "react";
import { DataTable } from "../DataTable";
import { Vacancy, Option } from "@/data-types/props";
import { MultipleSelect } from "@/ui/MultipleSelect";

export const Data = () => {
  const [isTable, setIsTable] = useState(false);
  const [search, setSearch] = useState("");

  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `vacancy/`;
  }, BaseFetcher);

  if (dataLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.wrapper}>
          {_.range(9).map((i: number) => (
            <Skeleton
              key={i}
              variant="rectangular"
              width={401}
              height={250}
              animation="wave"
            />
          ))}
        </div>
      </div>
    );
  }

  if (dataError) {
    return <div className={styles.error}>{"Ошибка :("}</div>;
  }

  const options: Option[] = data.reduce(
    (options: Option[], vacancy: Vacancy) => {
      options.push({ value: vacancy.name, label: vacancy.name });
      return options;
    },
    []
  );

  const filteredData = data?.filter((vacancy: Vacancy) => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    const { name, department, level, location } = vacancy;
    return [name, department, level, location].some((field) =>
      field.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className={styles.root}>
      <div className={styles.control}>
        {/* <Input
          fullWidth
          placeholder="Поиск"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        /> */}

        <MultipleSelect
          onChange={(value: Option[]) => {
            // TODO: Fix Cannot update a component (`Data`) while rendering a different component (`MultipleSelect`). To locate the bad setState() call inside `MultipleSelect`, follow the stack trace as described in https://react.dev/link/setstate-in-render
            // setSearch(value.reduce((res, val) => res + `${val.value} `, ""));
            console.log(value);
          }}
          options={options}
          label="Поиск"
        />

        <div>
          <Tabs value={isTable}>
            <Tab
              label="Карточки"
              value={false}
              onClick={() => setIsTable(false)}
            />
            <Tab
              label="Таблица"
              value={true}
              onClick={() => setIsTable(true)}
            />
          </Tabs>
        </div>
      </div>

      {isTable ? (
        <DataTable data={filteredData} />
      ) : (
        <Cards data={filteredData} />
      )}
    </div>
  );
};
