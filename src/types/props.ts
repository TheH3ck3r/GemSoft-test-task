import { ReactNode } from "react";
import { Control, ValidationRule } from "react-hook-form";

export type Vacancy = {
  id: string;
  name: string;
  department: string;
  level: string;
  location: string;
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

export type VacanciesPageSettings = {
  isSearch: boolean;
  isCards: boolean;
};

export type VacanciesDataFiltration = {
  search: string;
  filtration: Option[];
};

// // ----------| form |----------

export type Option = {
  value: string;
  label: string;
};

export type UserProps = {
  lastName: string;
  firstName: string;
  middleName: string;
  age: string;
  gender: string;
  interests: string[];
  musicGenre: string;
};

export type FormComponentProps = {
  label: string;
  name: keyof UserProps;
  control: Control<UserProps>;
  options?: Option[];
  icon?: ReactNode;
  requiredText?: string | ValidationRule<boolean> | undefined;
  pattern?: ValidationRule<RegExp> | undefined;
};
