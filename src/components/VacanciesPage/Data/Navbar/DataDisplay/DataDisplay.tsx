import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { Tab, Tabs } from "@mui/material";

export const DataDisplay = () => {
  return (
    <div>
      <Tabs value={vacanciesPageSettingsStore.isCards}>
        <Tab
          label="Карточки"
          value={true}
          onClick={() => vacanciesPageSettingsStore.setIsCards(true)}
        />
        <Tab
          label="Таблица"
          value={false}
          onClick={() => vacanciesPageSettingsStore.setIsCards(false)}
        />
      </Tabs>
    </div>
  );
};
