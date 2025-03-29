import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { MultipleSelect } from "@/ui/MultipleSelect";
import { Input } from "@mui/material";
import styles from "./DataFiltration.module.scss";
import { observer } from "mobx-react-lite";
import vacanciesDataStore from "@/common/stores/vacanciesDataStore";
import { Option } from "@/data-types/props";
import vacanciesDataFiltrationStore from "@/common/stores/vacanciesDataFiltrationStore";

export const DataFiltration = observer(() => {
  // For Input
  // const filteredData = data?.filter((vacancy: Vacancy) => {
  //   if (!search) return true;
  //   const searchLower = search.toLowerCase();
  //   const { name, department, level, location } = vacancy;
  //   return [name, department, level, location].some((field) =>
  //     field.toLowerCase().includes(searchLower)
  //   );
  // });

  // const filteredData = data?.filter((vacancy: Vacancy) => {
  //   if (selectedOptions.length === 0) return true;
  //   return selectedOptions.some((option) => vacancy.name === option.value);
  // });

  return (
    <div className={styles.root}>
      {vacanciesPageSettingsStore.isSearch ? (
        <Input
          fullWidth
          placeholder="Поиск"
          onChange={(event) => {
            vacanciesDataFiltrationStore.setSearch(event.target.value);
          }}
        />
      ) : (
        <MultipleSelect
          onChange={(value: Option[]) => {
            vacanciesDataFiltrationStore.setIsFiltration(value);
          }}
          options={vacanciesDataStore.selectOptions}
          label="Поиск"
        />
      )}
    </div>
  );
});
