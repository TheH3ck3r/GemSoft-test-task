"use client";

import styles from "./Data.module.scss";
import useSWR from "swr";
import _ from "lodash";
import { BaseFetcher } from "@/common/fetcher";
import { Skeleton, Tab, Tabs } from "@mui/material";
import { Cards } from "../Cards";
import { useState, useEffect } from "react";
import { DataTable } from "../DataTable";
import { Vacancy, Option } from "@/data-types/props";
import { MultipleSelect } from "@/ui/MultipleSelect";

export const Data = () => {
  const [isTable, setIsTable] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const {
    data: data,
    isLoading: dataLoading,
    error: dataError,
  } = useSWR(() => {
    return `vacancy/`;
  }, BaseFetcher);

  useEffect(() => {
    const newSearch = selectedOptions.map((option) => option.value).join(" ");
    setSearch(newSearch);
  }, [selectedOptions]);

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

  console.log(search);

  const options: Option[] = data.reduce(
    (options: Option[], vacancy: Vacancy) => {
      options.push({ value: vacancy.name, label: vacancy.name });
      return options;
    },
    []
  );

  // For Input
  // const filteredData = data?.filter((vacancy: Vacancy) => {
  //   if (!search) return true;
  //   const searchLower = search.toLowerCase();
  //   const { name, department, level, location } = vacancy;
  //   return [name, department, level, location].some((field) =>
  //     field.toLowerCase().includes(searchLower)
  //   );
  // });

  const filteredData = data?.filter((vacancy: Vacancy) => {
    if (selectedOptions.length === 0) return true;
    return selectedOptions.some((option) => vacancy.name === option.value);
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
            setSelectedOptions(value);
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
