"use client";

import { useEffect, useState } from "react";
// import useSWR from "swr";
import styles from "./DataInfo.module.scss";
// import { VacancyFetcher } from "@/common/fetcher";
import { Divider } from "@mui/material";
import Image from "next/image";
import { departmentsImages } from "@/common/images";
import { getVacancyInfoData } from "@/common/vacanciesData";
import { Back } from "@/components/Back";

export const DataInfo = () => {
  const [uuid, setUuid] = useState("");

  useEffect(() => {
    const { pathname } = window.location;
    setUuid(pathname);
  }, []);

  const dataInfo = getVacancyInfoData(uuid.replace("/", ""));

  // const {
  //   data: dataInfo,
  //   isLoading: dataInfoLoading,
  //   error: dataInfoError,
  // } = useSWR(() => {
  //   return `${uuid}`;
  // }, VacancyFetcher);

  // if (dataInfoLoading) {
  //   return (
  //     <div className={styles.root}>
  //       <div className={styles.back}>
  //         <Link href="/" className={styles.link}>
  //           <div className={styles.arrow}>
  //             <BackArrowIcon />
  //           </div>
  //           Все вакансии
  //         </Link>
  //       </div>

  //       <Skeleton
  //         key={1}
  //         sx={{ borderRadius: "12px" }}
  //         variant="rectangular"
  //         width={950}
  //         height={500}
  //         animation="wave"
  //       />
  //     </div>
  //   );
  // }

  // if (dataInfoError) {
  //   return <div className={styles.error}>{"Ошибка :("}</div>;
  // }

  return (
    <div className={styles.root}>
      <Back text="Все вакансии" path="/" />

      <div className={styles.wrapper}>
        <Image
          width={1000}
          height={300}
          className={styles.photo_image}
          src={departmentsImages(dataInfo?.department)?.photoUrl}
          alt="image"
        />

        <div className={styles.content}>
          <div className={styles.title}>
            <div className={styles.logo}>
              <Image
                width={96}
                height={96}
                src={departmentsImages(dataInfo?.department)?.logoUrl}
                className={styles.logo_image}
                alt="image"
              />
            </div>

            <div className={styles.title_text}>{dataInfo?.name}</div>

            <div className={styles.title_categories}>
              <div className={styles.title_info}>
                <div className={styles.title_info_head}>Локация</div>
                <div className={styles.title_info_bottom}>
                  {dataInfo?.location}
                </div>
              </div>

              <div className={styles.title_info}>
                <div className={styles.title_info_head}>Уровень</div>
                <div className={styles.title_info_bottom}>
                  {dataInfo?.level}
                </div>
              </div>

              <div className={styles.title_info}>
                <div className={styles.title_info_head}>Отдел</div>
                <div className={styles.title_info_bottom}>
                  {dataInfo?.department}
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div style={{ marginTop: "40px" }}>
            <div className={styles.description}>Описание</div>
            <p className={styles.description_info}>{dataInfo?.info}</p>
          </div>

          <div style={{ marginTop: "40px" }}>
            <div className={styles.description}>Требования</div>
            <ul className={styles.description_list}>
              {dataInfo?.requirements?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: "40px" }}>
            <div className={styles.description}>Задачи</div>
            <ul className={styles.description_list}>
              {dataInfo?.tasks?.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
