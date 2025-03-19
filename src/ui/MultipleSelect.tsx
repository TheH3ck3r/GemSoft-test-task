"use client";

import { FC, useState } from "react";
import styles from "./MultipleSelect.module.scss";
import { ChevronIcon, CrossIcon } from "@/public/index";
import clsx from "clsx";

// TODO: Перенести тип

type Option = {
  value: string;
  label: string;
};

type MultipleSelectProps = {
  onChange: (value: string) => void;
  options: Array<Option>;
  label: string;
};

export const MultipleSelect: FC<MultipleSelectProps> = ({
  onChange,
  options,
  label,
}) => {
  const [isOptionsActive, setIsOptionsActive] = useState(false);
  const [selectValue, setSelectValue] = useState<Array<Option>>([]);

  console.log(selectValue);

  const toggleOption = (option: Option) => {
    setSelectValue((prevSelected) => {
      if (prevSelected.some((selected) => selected.value === option.value)) {
        return prevSelected.filter(
          (selected) => selected.value !== option.value
        );
      } else {
        return [...prevSelected, option];
      }
    });
  };

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.select, isOptionsActive && styles.open)}
        onClick={() => {
          setIsOptionsActive(!isOptionsActive);
        }}
      >
        {selectValue.map((option: Option, index: number) => (
          <div key={index} className={styles.option_badge}>
            {option.label}
            <div className={styles.remove_button}>
              <CrossIcon></CrossIcon>
            </div>
          </div>
        ))}
      </div>

      {/* <label
        // htmlFor={label}
        className={styles.label}
      >
        {label}
      </label> */}

      <div className={clsx(styles.chevron, isOptionsActive && styles.open)}>
        <ChevronIcon />
      </div>

      <div className={clsx(styles.options, isOptionsActive && styles.open)}>
        <div className={styles.options_list}>
          <>
            {options.map((option: Option, index: number) => (
              <div
                key={index}
                onClick={() => toggleOption(option)}
                className={clsx(
                  styles.options_item,
                  selectValue.includes(option) && styles.active
                )}
              >
                {option.label}
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};
