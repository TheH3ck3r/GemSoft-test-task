import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { MultipleSelect } from "@/ui/MultipleSelect/MultipleSelect";
import { Input } from "@mui/material";
import styles from "./DataFiltration.module.scss";
import { observer } from "mobx-react-lite";
import vacanciesDataStore from "@/common/stores/vacanciesDataStore";
import { Option } from "@/data-types/props";
import vacanciesDataFiltrationStore from "@/common/stores/vacanciesDataFiltrationStore";

export const DataFiltration = observer(() => {
  return (
    <div className={styles.root}>
      {vacanciesPageSettingsStore.isSearch ? (
        <Input
          fullWidth
          defaultValue={vacanciesDataFiltrationStore.filtrationValue.search}
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
          defaultValue={vacanciesDataFiltrationStore.filtrationValue.filtration}
          options={vacanciesDataStore.selectOptions}
          label="Поиск"
        />
      )}
    </div>
  );
});
