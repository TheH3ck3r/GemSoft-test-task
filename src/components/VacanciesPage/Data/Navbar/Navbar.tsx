import styles from "./Navbar.module.scss";

export const Navbar = () => {
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
    <div className={styles.control}>
      {/* <Input
    fullWidth
    placeholder="Поиск"
    onChange={(event) => {
      setSearch(event.target.value);
    }}
  /> */}

      <MultipleSelect
        onChange={(value: Option[]) => {
          setSelectedOptions(value);
        }}
        options={options}
        label="Поиск"
      />

      <div>
        <Tabs value={isTable}>
          <Tab
            label="Карточки"
            value={false}
            onClick={() => setIsTable(false)}
          />
          <Tab label="Таблица" value={true} onClick={() => setIsTable(true)} />
        </Tabs>
      </div>
    </div>
  );
};
