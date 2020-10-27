import {
  AppBar,
  Button,
  IconButton,
  TextField,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Close from "@material-ui/icons/Close";

export default function CreateForm() {
  const { register, handleSubmit, errors } = useForm();
  const [emailsCount, setEmailsCount] = useState([" "]);
  const [phoneCount, setPhoneCount] = useState([" "]);

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h4>Novo Usuário</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full my-4">
          <TextField
            label="Nome"
            name="name"
            className="w-full "
            inputRef={register({ required: true })}
          />
        </div>

        <div className="w-full my-4">
          <TextField
            label="CPF"
            name="cpf"
            className="w-full "
            inputRef={register({ required: true })}
          />
        </div>

        <div className=" flex justify-between mt-8">
          <div className="w-1/2 mr-2">
            <TextField
              label="Username"
              name="username"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="Senha"
              name="password"
              type="password"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
        </div>

        <div className="w-full">
          {emailsCount.map((item, index) => (
            <div className="w-full my-4" key={index}>
              <TextField
                label={`Email #${index + 1}`}
                name={`emails[${index}]`}
                className="w-full"
                inputRef={register({ required: true })}
              />
            </div>
          ))}
        </div>

        <div className="w-full items-center my-8">
          <Button
            variant="contained"
            onClick={() => setEmailsCount([...emailsCount, ""])}
          >
            Adicionar Email
          </Button>
        </div>

        <div className="w-full my-4">
          <TextField
            label="CEP"
            name="address.cep"
            className="w-full "
            inputRef={register({ required: true })}
          />
        </div>

        <div className=" flex justify-between mt-8">
          <div className="w-1/2 mr-2">
            <TextField
              label="Logradouro"
              name="address.logradouro"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="Cidade"
              name="address.cidade"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
        </div>

        <div className=" flex justify-between mt-8">
          <div className="w-1/2 mr-2">
            <TextField
              label="Bairro"
              name="address.bairro"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
          <div className="w-1/2 ml-2">
            <TextField
              label="UF"
              name="address.uf"
              className="w-full"
              inputRef={register({ required: true })}
            />
          </div>
        </div>

        <div className="w-full my-4">
          <TextField
            label="Complemento"
            name="address.complemento"
            className="w-full "
            inputRef={register}
          />
        </div>

        <div className="w-full">
          {phoneCount.map((item, index) => (
            <div className="w-full my-4" key={index}>
              <TextField
                label={`Telefone #${index + 1}`}
                name={`phones[${index}]`}
                className="w-full"
                inputRef={register({ required: true })}
              />
            </div>
          ))}
        </div>

        <div className="w-full items-center my-8">
          <Button
            variant="contained"
            onClick={() => setPhoneCount([...phoneCount, ""])}
          >
            Adicionar Telefone
          </Button>
        </div>

        <div className="w-full items-center my-8">
          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
        </div>
      </form>
    </>
  );
}
