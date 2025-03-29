import { VacanciesDataFiltration } from "@/data-types/props";
import { makeAutoObservable } from "mobx";
import { Option } from "@/data-types/props";

export class VacanciesDataFiltrationStore {
  vacanciesDataFiltration: VacanciesDataFiltration = {
    search: "",
    filtration: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  setVacanciesPageSettings(data: VacanciesDataFiltration) {
    this.vacanciesDataFiltration = data;
  }

  updateVacanciesPageSettings(partialData: Partial<VacanciesDataFiltration>) {
    this.vacanciesDataFiltration = {
      ...this.vacanciesDataFiltration,
      ...partialData,
    };
  }

  setSearch(data: string) {
    this.vacanciesDataFiltration = {
      search: data,
      filtration: this.vacanciesDataFiltration.filtration,
    };
  }

  setIsFiltration(data: Option[]) {
    this.vacanciesDataFiltration = {
      filtration: data,
      search: this.vacanciesDataFiltration.search,
    };
  }

  get test(): VacanciesDataFiltration {
    return this.vacanciesDataFiltration;
  }
}

const vacanciesDataFiltrationStore = new VacanciesDataFiltrationStore();

export default vacanciesDataFiltrationStore;
