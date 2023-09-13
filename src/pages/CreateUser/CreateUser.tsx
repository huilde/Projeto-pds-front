import { FormEvent, useState } from "react";
import { Button, Form, Input } from "antd";

type FieldType = {
  email?: string;
  password?: string;
};

import { StyledCreateUser } from "./CreateUser.style.js";

const CreateUSer = () => {
  const validateMessages = {
    required: "${label} precisa ser preenchido!",
    types: {
      email: "digite um e-mail válido!",
      number: "${label} is not a valid number!",
    },
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <StyledCreateUser>
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

export { CreateUSer };
