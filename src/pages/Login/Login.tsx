import { Button, Form, Input } from "antd"

type FieldType = {
  email?: string
  password?: string
}

import { StyledLogin } from "../Login/Login.style"
import {ApiService} from "../../services/ApiService.ts"
import { useNavigate } from "react-router-dom"

type LoginData = {
  email: string
  password: string
}

const Login = () => {
  const api = ApiService()
  const navigate = useNavigate()

  const handleLogin = async (data: LoginData) => {
    try {
      const {
        email,
        password
      } = data

      const response = await api.post("/login", {
        email,
        password
      })

      window.localStorage.setItem("x-access-token", response.data.token)

      navigate("/main")
    } catch (error) {
      console.log(error?.response?.data?.error)
    }
  }

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
      password: values.password
    })
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
    </StyledLogin>
  );
};

export { Login };
