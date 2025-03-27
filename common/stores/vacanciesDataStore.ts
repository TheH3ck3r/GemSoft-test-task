import { Vacancy, Option } from "@/data-types/props";
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

  get selectOptions(): Option[] {
    return this.vacanciesData.reduce((options: Option[], vacancy: Vacancy) => {
      options.push({ value: vacancy.name, label: vacancy.name });
      return options;
    }, []);
  }
}

const vacanciesDataStore = new VacanciesDataStore();

export default vacanciesDataStore;
