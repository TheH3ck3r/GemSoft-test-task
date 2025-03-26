import vacanciesPageSettingsStore from "@/common/stores/vacanciesPageSettingsStore";
import { MultipleSelect } from "@/ui/MultipleSelect";
import { Divider, Input, Tab, Tabs } from "@mui/material";

export const DataFiltration = () => {
  // const options: Option[] = data.reduce(
  //   (options: Option[], vacancy: Vacancy) => {
  //     options.push({ value: vacancy.name, label: vacancy.name });
  //     return options;
  //   },
  //   []
  // );

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
    <div>
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
          onChange={(value: Option[]) => {
            setSelectedOptions(value);
          }}
          options={options}
          label="Поиск"
        />
      )}

      <Divider orientation="vertical" flexItem />

      <Tabs value={vacanciesPageSettingsStore.isSearch}>
        <Tab
          label="Поиск"
          value={true}
          onClick={() => vacanciesPageSettingsStore.setIsSearch(true)}
        />
        <Tab
          label="Селект"
          value={false}
          onClick={() => vacanciesPageSettingsStore.setIsSearch(false)}
        />
      </Tabs>
    </div>
  );
};
