import React, { useState } from "react";
import { Button, Form, Input, Divider } from "antd";

type FieldType = {
  email?: string;
  password?: string;
};

import { StyledLogin } from "./Login.style";
import { ApiService } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

type LoginData = {
  email: string;
  password: string;
};

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const api = ApiService();
  const navigate = useNavigate();

  const handleLogin = async (data: LoginData) => {
    try {
      const { email, password } = data;

      const response = await api.post("/login", {
        email,
        password,
      });

      window.localStorage.setItem("x-access-token", response.data.token);

      navigate("/main");
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };

  const validateMessages = {
    required: "${label} precisa ser preenchido!",
    types: {
      email: "digite um e-mail válido!",
      number: "${label} is not a valid number!",
    },
  };

  const onFinish = async (values: LoginData) => {
    await handleLogin({
      email: values.email,
      password: values.password,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    setHasError(true);
  };

  return (
    <StyledLogin>
      <main className="main">
        <h1 className="mainText">
          Compartilhe e interaja sobre <span className="red">filmes</span>.
        </h1>
        <br />
        <h2> Faça o Login para continuar:</h2>
        <br />
        <Form
          validateMessages={validateMessages}
          className="teste"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <label className="label">E-mail:</label>
          <Form.Item<FieldType>
            className="label"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input className="baseInput" />
          </Form.Item>

          <label className="label"> Senha:</label>
          <Form.Item<FieldType>
            className="label"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor digite uma senha!",
              },
            ]}
          >
            <Input.Password className="baseInput" />
          </Form.Item>
          {hasError && <p>login e senha incorretos</p>}

          <Form.Item>
            <Button className="button" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </Form>
        <Divider />
        <p>Não tem conta, crie a sua agora</p>
        <Button className="button gray" onClick={() => navigate("/createUser")}>
          criar conta
        </Button>
      </main>
    </StyledLogin>
  );
};

export { Login };
