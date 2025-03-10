"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { LogoIcon } from "@/public/index";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import Cookies from "js-cookie";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <Link href={"/"}>
          <LogoIcon />
        </Link>
        <Button color="error" onClick={() => setIsModalOpen(true)}>
          Выйти
        </Button>

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Box className={styles.modal}>
            <Typography variant="h6" component="h2">
              Вы точно хотите выйти?
            </Typography>

            <div className={styles.modal_buttons}>
              <Button variant="contained" onClick={() => setIsModalOpen(false)}>
                Нет
              </Button>

              <Link href={"/login"}>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => {
                    setIsModalOpen(false);
                    Cookies.remove("access_token");
                  }}
                >
                  Да
                </Button>
              </Link>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};
