import { VacanciesPageSettings } from "@/data-types/props";
import { makeAutoObservable } from "mobx";

export class VacanciesPageSettingsStore {
  vacanciesPageSettings: VacanciesPageSettings = {
    isSearch: true,
    isCards: true,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setVacanciesPageSettings(data: VacanciesPageSettings) {
    this.vacanciesPageSettings = data;
  }

  updateVacanciesPageSettings(partialData: Partial<VacanciesPageSettings>) {
    this.vacanciesPageSettings = {
      ...this.vacanciesPageSettings,
      ...partialData,
    };
  }

  // TODO: Нужно проверить как работает
  setIsSearch(state: boolean) {
    this.vacanciesPageSettings = {
      isCards: this.vacanciesPageSettings.isCards,
      isSearch: state,
    };
  }

  // TODO: Нужно проверить как работает
  setIsCards(state: boolean) {
    this.vacanciesPageSettings = {
      isCards: state,
      isSearch: this.vacanciesPageSettings.isSearch,
    };
  }

  get isSearch(): boolean {
    return this.vacanciesPageSettings.isSearch;
  }

  get isCards(): boolean {
    return this.vacanciesPageSettings.isCards;
  }
}

const vacanciesPageSettingsStore = new VacanciesPageSettingsStore();

export default vacanciesPageSettingsStore;
