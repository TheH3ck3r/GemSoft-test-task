import { VacanciesData } from "@/data-types/props";
import { makeAutoObservable } from "mobx";

export class VacanciesDataStore {
  vacanciesData: VacanciesData = {
    data: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  setVacanciesData(data: VacanciesData) {
    this.vacanciesData = data;
  }

  get vacancies(): VacanciesData {
    return this.vacanciesData;
  }
}

const vacanciesDataStore = new VacanciesDataStore();

export default vacanciesDataStore;
