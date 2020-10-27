import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Table from "../../components/Table";
import Dialog from "../../components/Dialog";
import { Button } from "@material-ui/core";
import * as dialogActions from "../../store/actions/DialogActions";

export default function Dashboard(props) {
  const logged = useSelector((state) => state.Auth.logged);
  const dispatch = useDispatch();

  return (
    <div className="pt-8">
      {!logged && <Redirect to="/" />}
      <Button
        variant="contained"
        color="primary"
        className=" m-2 "
        style={{ margin: "1rem" }}
        onClick={() => dispatch(dialogActions.openDialog("create", {}))}
      >
        Adicionar
      </Button>
      <Dialog />
      <Table />
    </div>
  );
}
