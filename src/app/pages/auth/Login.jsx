import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import AuthService from "./AuthService";
import * as authActions from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";

export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(false);

  const onSubmit = async (data) => {
    const token = await AuthService.login(data);

    if (token) {
      dispatch(authActions.login(token));
      setLogged(true);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-around align-middle">
      {logged && <Redirect to="/dashboard" />}
      <Paper elevation={3} className=" p-32" square>
        <Typography component="h1" variant="h4">
          LogIn
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-bewteen sm:w-full"
        >
          <TextField
            label="Username"
            inputRef={register({ required: true })}
            style={{ margin: ".5rem" }}
            name="username"
          />
          <TextField
            label="Password"
            style={{ margin: ".5rem" }}
            type="password"
            name="password"
            inputRef={register({ required: true })}
          />

          <Button
            variant="contained"
            className=" m-2 w-8 self-center"
            style={{ margin: "1rem" }}
            type="submit"
          >
            LogIn
          </Button>
        </form>
      </Paper>
    </div>
  );
}
