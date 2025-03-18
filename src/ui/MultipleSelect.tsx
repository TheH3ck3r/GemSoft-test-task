"use client";

import { FC, useState } from "react";
import styles from "./MultipleSelect.module.scss";
import { ChevronIcon, CrossIcon } from "@/public/index";
import clsx from "clsx";

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

  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.select, isOptionsActive && styles.open)}
        onClick={() => {
          setIsOptionsActive(!isOptionsActive);
        }}
      >
        <div className={styles.option_badge}>
          {"гыгыгыгы"}
          <div className={styles.remove_button}>
            <CrossIcon></CrossIcon>
          </div>
        </div>
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
    </div>
  );
};
