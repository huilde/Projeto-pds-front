import { useState } from "react";
import { Button, Form, Input } from "antd";

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  password2?: string;
};

import { StyledCreateUser } from "./CreateUser.style";
import { ApiService } from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

type userData = {
  name: string;
  email: string;
  password: string;
};

const CreateUser = () => {
  const [hasError, setHasError] = useState(false);
  const api = ApiService();
  const navigate = useNavigate();

  const handleLogin = async (data: userData) => {
    try {
      const { email, password, name } = data;

      const response = await api.post("/user", {
        name,
        email,
        password,
      });

      window.localStorage.setItem("x-access-token", response.data.token);

      navigate("/login");
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

  const onFinish = async (values: userData) => {
    await handleLogin({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    setHasError(true);
  };

  return (
    <StyledCreateUser>
      <main className="main">
        <h1 className="mainText">
          Compartilhe e interaja sobre <span className="red">filmes</span>.
        </h1>
        <br />
        <h2> crie sua conta:</h2>
        <br />
        <Form
          validateMessages={validateMessages}
          className="teste"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <label className="label">Nome:</label>
          <Form.Item<FieldType>
            className="label"
            name="name"
            rules={[
              {
                required: true,
                message: "Por favor digite seu nome!",
              },
            ]}
          >
            <Input className="baseInput" />
          </Form.Item>

          <label className="label">E-mail:</label>
          <Form.Item<FieldType>
            className="label"
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor digite seu e-mail!",
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

          <label className="label"> confirme sua Senha:</label>
          <Form.Item<FieldType>
            className="label"
            name="password2"
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Confirme sua senha!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("As senhas digitadas não são iguais!")
                  );
                },
              }),
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
      </main>
    </StyledCreateUser>
  );
};

export { CreateUser };
