import { Vacancy } from "@/data-types/props";
import { makeAutoObservable } from "mobx";

export class VacanciesDataStore {
  vacanciesData: Vacancy[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setVacanciesData(data: Vacancy[]) {
    this.vacanciesData = data;
  }

  get vacancies(): Vacancy[] {
    return this.vacanciesData;
  }
}

const vacanciesDataStore = new VacanciesDataStore();

export default vacanciesDataStore;
