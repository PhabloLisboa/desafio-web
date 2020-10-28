import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector, useStore } from "react-redux";
import AuthService from "./AuthService";
import * as authActions from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import { Alert } from "@material-ui/lab";
import * as errorActions from "../../store/actions/errorAction";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();
  const error = useSelector((state) => state.Error);
  const [logged, setLogged] = useState(false);

  const onSubmit = async (data) => {
    const user = await AuthService.login(data, store);

    if (user) {
      dispatch(authActions.login("jwt_token"));
      dispatch(errorActions.clearError());
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
        {error.hasError && (
          <Alert severity="error" className="mb-16" color="error">
            {error.message}
          </Alert>
        )}
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
