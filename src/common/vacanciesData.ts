import { Vacancy, VacancyInfo } from "@/data-types/props";

export const vacanciesData: Vacancy[] = [
  {
    id: "1",
    name: "Разработчик",
    department: "IT",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
  },
  {
    id: "2",
    name: "Дизайнер",
    department: "DESIGN",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
  },
  {
    id: "3",
    name: "Крафтер",
    department: "CRAFT",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
  },
  {
    id: "4",
    name: " Косплеер",
    department: "COSPLAY",
    level: "Ничего не умею",
    location: "Проспект Вернадского 78",
  },
  {
    id: "5",
    name: "Копирайтер",
    department: "SMM",
    level: "Что-то умею",
    location: "Проспект Вернадского 78",
  },
  {
    id: "6",
    name: "Обсервер",
    department: "TWITCH",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
  },
];

export const vacanciesInfoData: VacancyInfo[] = [
  {
    id: "1",
    name: "Разработчик",
    department: "IT",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
    info: "Надо писать много кода!",
    requirements: ["Уметь писать код", "Уметь делать мур мяу"],
    tasks: ["Разрабатывать софт"],
  },
  {
    id: "2",
    name: "Дизайнер",
    department: "DESIGN",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
    info: "Надо рисовать",
    requirements: ["Уметь рисовать", "Уметь делать мур мяу"],
    tasks: ["Рисовать картинки, постеры и тд"],
  },
  {
    id: "3",
    name: "Крафтер",
    department: "CRAFT",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
    info: "Можно сделать из говна и палок что угодно",
    requirements: [
      "Уметь строить ракату из говна и палок",
      "Уметь фигачить вот этими маленькими ручками!",
    ],
    tasks: ["Строить ракету и не только"],
  },
  {
    id: "4",
    name: " Косплеер",
    department: "COSPLAY",
    level: "Ничего не умею",
    location: "Проспект Вернадского 78",
    info: "Делать косплеи",
    requirements: ["Уметь перевоплащаться"],
    tasks: ["Косплеить"],
  },
  {
    id: "5",
    name: "Копирайтер",
    department: "SMM",
    level: "Что-то умею",
    location: "Проспект Вернадского 78",
    info: "Делать контент",
    requirements: ["Уметь писать посты в вк и тг"],
    tasks: ["Освещать новости"],
  },
  {
    id: "6",
    name: "Обсервер",
    department: "TWITCH",
    level: "Есть опыт",
    location: "Проспект Вернадского 78",
    info: "Делать картинку",
    requirements: ["Обсервить трансляции матчей"],
    tasks: ["Обсервить трансляции матчей и не только"],
  },
];

export const getVacancyInfoData = (id: string) => vacanciesInfoData[+id - 1];
