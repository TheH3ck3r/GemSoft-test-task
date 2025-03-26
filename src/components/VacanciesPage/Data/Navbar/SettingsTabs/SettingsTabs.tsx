import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { Divider, Tab, Tabs } from "@mui/material";
import styles from "./SettingsTabs.module.scss";
import { observer } from "mobx-react-lite";

export const SettingsTabs = observer(() => {
  return (
    <div className={styles.root}>
      <Tabs value={vacanciesPageSettingsStore.isSearch}>
        <Tab
          label="Поиск"
          value={true}
          onClick={() => vacanciesPageSettingsStore.setIsSearch(true)}
        />
        <Tab
          label="Выбор"
          value={false}
          onClick={() => vacanciesPageSettingsStore.setIsSearch(false)}
        />
      </Tabs>

      <Divider orientation="vertical" />

      <Tabs value={vacanciesPageSettingsStore.isCards}>
        <Tab
          label="Карточки"
          value={true}
          onClick={() => {
            vacanciesPageSettingsStore.setIsCards(true);
            console.log(vacanciesPageSettingsStore.isCards);
          }}
        />
        <Tab
          label="Таблица"
          value={false}
          onClick={() => {
            vacanciesPageSettingsStore.setIsCards(false);
            console.log(vacanciesPageSettingsStore.isCards);
          }}
        />
      </Tabs>
    </div>
  );
});
