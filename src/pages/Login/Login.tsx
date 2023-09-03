import { FormEvent, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

import { StyledLogin } from "./Login.style";
const Login = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
          className="teste"
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            className="label"
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor digite seu e-mail",
              },
            ]}
          >
            <label className="label">Usuário:</label>
            <Input className="baseInput" />
          </Form.Item>

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
            <label className="label"> Senha:</label>
            <Input.Password className="baseInput" />
          </Form.Item>

          <Form.Item>
            <Button className="button" htmlType="submit">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </main>
    </StyledLogin>
  );
};

export { Login };
