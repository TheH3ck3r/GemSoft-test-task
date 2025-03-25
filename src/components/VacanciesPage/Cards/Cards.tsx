import { Vacancy } from "@/data-types/props";
import styles from "./Cards.module.scss";
import { Button, Card, CardActions, CardContent, Divider } from "@mui/material";
import { FC } from "react";
import Image from "next/image";
import { departmentsImages } from "@/common/images";
import Link from "next/link";

type CardsProps = {
  vacancies: Vacancy[];
};

export const Cards: FC<CardsProps> = ({ vacancies }) => (
  <div className={styles.wrapper}>
    {vacancies?.map((vacancy: Vacancy, index: number) => (
      <Card key={index} className={styles.card}>
        <Image
          width={500}
          height={100}
          className={styles.image}
          src={departmentsImages(vacancy.department).photoUrl}
          alt="image"
        />

        <CardContent className={styles.content}>
          <div className={styles.content_header}>{vacancy.name}</div>
          <Divider />
          <div className={styles.content_info}>
            <div>{vacancy.level}</div> <div>{vacancy.department}</div>
            <div>{vacancy.location}</div>
          </div>
        </CardContent>

        <CardActions>
          <Link href={`${vacancy.id}`}>
            <Button size="small">Подробнее</Button>
          </Link>
        </CardActions>
      </Card>
    ))}
  </div>
);
