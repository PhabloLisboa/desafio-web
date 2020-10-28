import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function internalLayout(props) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <div className="w-full flex justify-between self-center">
            <Typography className="self-center" variant="h6">
              Clientes
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div
        className="w-full flex justify-center"
        style={{ background: "#fafafa" }}
      >
        <div
          className="lg:w-4/5 sm:w-full sm:px-8 h-full flex justify-center flex-col lg:self-center"
          style={{ background: "#fafafa", marginTop: "4rem" }}
        >
          {props.children}
        </div>
      </div>
    </>
  );
}
