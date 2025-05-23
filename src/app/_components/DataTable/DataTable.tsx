import { Vacancy } from "@/data-types/props";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC } from "react";

type TableProps = {
  vacancies: Vacancy[];
};

export const DataTable: FC<TableProps> = ({ vacancies }) => (
  <TableContainer component={Paper}>
    <Table stickyHeader sx={{ height: "400px" }}>
      <TableHead>
        <TableRow>
          <TableCell>Название</TableCell>
          <TableCell>Отдел</TableCell>
          <TableCell>Уровень</TableCell>
          <TableCell>Локация</TableCell>
          <TableCell>id</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {vacancies?.map((vacancy: Vacancy) => (
          <TableRow key={vacancy.id}>
            <TableCell>{vacancy.name}</TableCell>
            <TableCell>{vacancy.department}</TableCell>
            <TableCell>{vacancy.level}</TableCell>
            <TableCell>{vacancy.location}</TableCell>
            <TableCell>{vacancy.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
