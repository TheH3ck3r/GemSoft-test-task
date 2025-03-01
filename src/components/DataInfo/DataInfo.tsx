"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";
import styles from "./DataInfo.module.scss";
import { VacancyFetcher } from "@/common/fetcher";
import Link from "next/link";
import { BackArrowIcon } from "@/public/index";
import { Skeleton } from "@mui/material";
import Image from "next/image";
import { departmentsImages } from "@/common/images";

export const DataInfo = () => {
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    const { pathname } = window.location;
    setUuid(pathname);
  }, []);

  const {
    data: dataInfo,
    isLoading: dataInfoLoading,
    error: dataInfoError,
  } = useSWR(() => {
    return `${uuid}`;
  }, VacancyFetcher);

  if (dataInfoLoading) {
    return (
      <div className={styles.root}>
        <div className={styles.back}>
          <Link href="/" className={styles.link}>
            <div className={styles.arrow}>
              <BackArrowIcon />
            </div>
            Все вакансии
          </Link>
        </div>

        <Skeleton
          key={1}
          sx={{ borderRadius: "12px" }}
          variant="rectangular"
          width={950}
          height={500}
          animation="wave"
        />
      </div>
    );
  }

  if (dataInfoError) {
    return <div className={styles.error}>{"Ошибка :("}</div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.back}>
        <Link href="/" className={styles.link}>
          <div className={styles.arrow}>
            <BackArrowIcon />
          </div>
          Все данные
        </Link>
      </div>

      <div className={styles.wrapper}>
        <Image
          width={500}
          height={100}
          className={styles.photo_image}
          src={departmentsImages(dataInfo?.department)?.photoUrl}
          alt="image"
        ></Image>
        {/* <div className={styles.logo}>
          <Image
            width={96}
            height={96}
            src={departmentsImages(dataInfo?.department)?.logoUrl}
            alt="image"
          ></Image>
        </div> */}
      </div>
    </div>
  );
};
