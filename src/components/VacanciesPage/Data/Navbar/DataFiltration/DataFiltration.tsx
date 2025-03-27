import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { MultipleSelect } from "@/ui/MultipleSelect";
import { Input } from "@mui/material";
import styles from "./DataFiltration.module.scss";
import { observer } from "mobx-react-lite";
import vacanciesDataStore from "@/common/stores/vacanciesDataStore";

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
          // onChange={(event) => {
          //   setSearch(event.target.value);
          // }}
        />
      ) : (
        <MultipleSelect
          // onChange={(value: Option[]) => {
          //   setSelectedOptions(value);
          // }}
          onChange={() => {
            console.log("test");
          }}
          options={vacanciesDataStore.selectOptions}
          label="Поиск"
        />
      )}
    </div>
  );
});
