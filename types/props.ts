export type Vacancy = {
  id: string;
  name: string;
  department: string;
  level: string;
  location: string;
};

export type VacanciesData = {
  data: Vacancy[];
};

export type VacancyInfo = {
  id: string;
  name: string;
  department: string;
  level: string;
  location: string;
  info: string;
  requirements: Array<string>;
  tasks: Array<string>;
};

export type Option = {
  value: string;
  label: string;
};

export type VacanciesPageSettings = {
  isSearch: boolean;
  isCards: boolean;
};
