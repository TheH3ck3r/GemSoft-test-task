import { Vacancy, Option } from "@/data-types/props";
import { makeAutoObservable } from "mobx";
import vacanciesDataFiltrationStore from "./vacanciesDataFiltrationStore";

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
    return this.vacanciesData.map((vacancy) => ({
      value: vacancy.name,
      label: vacancy.name,
    }));
  }

  get filteredVacanciesBySearch(): Vacancy[] {
    const searchQuery =
      vacanciesDataFiltrationStore.vacanciesDataFiltration.search.toLowerCase();
    if (!searchQuery) return this.vacanciesData;
    return this.vacanciesData.filter((vacancy) =>
      vacancy.name.toLowerCase().includes(searchQuery)
    );
  }

  get filteredVacanciesByOptions(): Vacancy[] {
    const selectedOptions =
      vacanciesDataFiltrationStore.vacanciesDataFiltration.filtration.map(
        (option) => option.value
      );
    if (selectedOptions.length === 0) return this.vacanciesData;
    return this.vacanciesData.filter((vacancy) =>
      selectedOptions.includes(vacancy.name)
    );
  }
}

const vacanciesDataStore = new VacanciesDataStore();

export default vacanciesDataStore;
