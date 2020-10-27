import React from "react";
import { Dialog, DialogContent, Toolbar } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as dialogActions from "../store/actions/DialogActions";

import CreateForm from "./dialogContents/createForm";

export default function DialogCustom() {
  const dialog = useSelector((state) => state.Dialog);
  const dispatch = useDispatch();

  return (
    <Dialog
      open={dialog.open}
      onClose={() => dispatch(dialogActions.closeDialog())}
      className="text-center"
    >
      <DialogContent className="flex flex-col">
        {dialog.typeDialog === "create" && <CreateForm />}
        {dialog.typeDialog === "edit"}
        {dialog.typeDialog === "view"}
        {dialog.typeDialog === "delete"}
      </DialogContent>
    </Dialog>
  );
}
