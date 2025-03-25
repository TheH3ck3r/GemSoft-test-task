"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./MultipleSelect.module.scss";
import { ChevronIcon, CrossIcon } from "@/public/index";
import clsx from "clsx";
import { Option } from "@/data-types/props";

type MultipleSelectProps = {
  onChange: (value: Option[]) => void;
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
  const multipleSelectRef = useRef<HTMLDivElement>(null);

  const toggleOption = (option: Option) => {
    setSelectValue((prevSelected) => {
      let newSelected;
      if (prevSelected.some((selected) => selected.value === option.value)) {
        newSelected = prevSelected.filter(
          (selected) => selected.value !== option.value
        );
      } else {
        newSelected = [...prevSelected, option];
      }
      onChange(newSelected);
      return newSelected;
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      multipleSelectRef.current &&
      !multipleSelectRef.current.contains(event.target as Node)
    ) {
      setIsOptionsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.root} ref={multipleSelectRef}>
      <div
        className={clsx(styles.select, isOptionsActive && styles.open)}
        onClick={() => {
          setIsOptionsActive(!isOptionsActive);
        }}
      >
        {selectValue.map((option: Option, index: number) => (
          <div key={index} className={styles.option_badge}>
            {option.label}
            <div
              className={styles.remove_button}
              onClick={(event) => {
                event.stopPropagation();
                toggleOption(option);
              }}
            >
              <CrossIcon></CrossIcon>
            </div>
          </div>
        ))}
      </div>

      <label
        className={clsx(styles.label, selectValue.length > 0 && styles.active)}
      >
        {label}
      </label>

      <div
        className={styles.remove_all_button}
        onClick={() => {
          setSelectValue([]);
          onChange([]);
        }}
      >
        <CrossIcon></CrossIcon>
      </div>

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
