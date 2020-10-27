import React from "react";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import Create from "@material-ui/icons/Create";
import Visibility from "@material-ui/icons/Visibility";
import Delete from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import * as dialogActions from "../store/actions/DialogActions";

const rows = [
  createData("Frozen yoghurt", 159, 6),
  createData("Ice cream sandwich", 237, 5),
  createData("Eclair", 262, 5),
  createData("Cupcake", 305, 5),
  createData("Gingerbread", 356.5),
];
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function TableClients() {
  const dispatch = useDispatch();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <strong>Nome</strong>
            </TableCell>
            <TableCell align="center">
              <strong>E-mail Principal</strong>
            </TableCell>
            <TableCell align="center">
              <strong>CPF</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Ações</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">
                <IconButton
                  onClick={() => dispatch(dialogActions.openDialog("edit", {}))}
                >
                  <Create />
                </IconButton>
                <IconButton
                  onClick={() => dispatch(dialogActions.openDialog("view", {}))}
                >
                  <Visibility />
                </IconButton>
                <IconButton
                  onClick={() =>
                    dispatch(dialogActions.openDialog("delete", {}))
                  }
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
