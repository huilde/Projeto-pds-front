import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  EditOutlined,
} from "@ant-design/icons";
import {
  Layout,
  Menu,
  theme,
  Avatar,
  Card,
  Row,
  Col,
  Divider,
  Input,
  Popover,
  Space,
  Button,
} from "antd";

import { StyledPerfil } from "./Perfil.style";
import { ApiService } from "../../services/ApiService";

const { Header, Content, Sider } = Layout;

const { TextArea } = Input;

type ProfileInput = {
  about?: string
  picture?: string
}

const Perfil = () => {
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = useState<ProfileInput>({} as ProfileInput);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSave, setIsSave] = useState<boolean>(false)
  const [isSaving, setIsSaving] = useState<boolean>(false)

  const api = ApiService();

  const handleChangeProfileInputEdited = (data: Partial<ProfileInput>) => {
    const actualProfileInfo: ProfileInput = {
      ...profileInfo,
      ...data
    }

    setProfileInfo(actualProfileInfo)
  }

  const content = (
    <div style={{ cursor: "pointer" }}>
      <img
        src="../../../public/homem.png"
        alt=""
        onClick={() => {
          handleChangeProfileInputEdited({
            picture: "homem.png"
          })
        }}
      />
      <br />
      <br />
      <img
        src="../../../public/mulher.png"
        alt=""
        onClick={() => {
          handleChangeProfileInputEdited({
            picture: "mulher.png"
          })
        }}
      />
    </div>
  );

  const handleUpdateProfile = async () => {
    setIsSaving(true)

    try {
      await api.put("/profile", {
        ...profileInfo
      })

      setIsEditMode(false)
      setIsSave(false)
    } catch (error) {
      console.log(error)
    }

    setIsSaving(false)
  }

  const handleGetProfile = async () => {
    try {
      const response = await api.get("/profile")

      setProfileInfo(response.data.profile)
    } catch (error) {
      console.log(error)
    }
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    handleGetProfile()
  }, [])

  return (
    <StyledPerfil>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["2"]}
            items={[
              { icon: HomeOutlined, route: "/main", label: "Home" },
              { icon: UserOutlined, route: "/perfil", label: "Perfil" },
              { icon: VideoCameraOutlined, route: "/films", label: "Filmes" },
            ].map(({ icon, route, label }, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: label,
              onClick: () => navigate(route),
            }))}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>teste</Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <Card>
                <Row
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Col>
                    <Popover
                      placement="bottom"
                      title="Selecione sua foto de perfil:"
                      content={content}
                      trigger="click"
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center"
                        }}
                      >
                        <Avatar
                          src={`../../../public/${profileInfo.picture}`}
                          size={164}
                          icon={<UserOutlined />}
                        ></Avatar>
                      </div>
                    </Popover>
                    <br />
                    <br />
                    <Row
                      justify="center"
                    >
                      <Space
                        size="middle"
                      >
                        <Col>
                          <EditOutlined onClick={() => setIsEditMode(true)}></EditOutlined>
                          <span> Editar Perfil</span>
                        </Col>
                      </Space> 
                    </Row>
                  </Col>
                </Row>
                <Divider></Divider>
                <Row>
                  <Col>
                    <label htmlFor="">Nome:</label>
                    <span> Huilde Viana Júnior</span>
                  </Col>
                </Row>
                <Divider></Divider>
                <Row>
                  <Col style={{ width: "100%" }}>
                    <label htmlFor="">Sobre:</label>
                    <span> </span>
                    <TextArea
                      disabled={!isEditMode}
                      maxLength={100}
                      style={{ height: 150, resize: "none", width: "100%" }}
                      onChange={(event) => {
                        handleChangeProfileInputEdited({
                          about: event.target.value
                        })
                        setIsSave(true)
                      }}
                      value={profileInfo?.about}
                    ></TextArea>
                  </Col>
                </Row>
                <Divider></Divider>
                <Row>
                  <Col>
                    <label htmlFor="">E-mail:</label>
                    <span> huildevj@gmail.com</span>
                  </Col>
                </Row>
                <Divider></Divider>
                <Row>
                  <Col>
                    <label htmlFor="">Data de criação:</label>
                    <span> 19/07/2023</span>
                  </Col>
                </Row>
              </Card>
              
              <div
                style={{
                  display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "16px",
                    gap: "16px"
                }}
              >
                <Button
                  type="default"
                  size="large"
                  onClick={() => {
                    setIsEditMode(false)
                    setIsSave(false)
                  }} 
                  disabled={!isSave}
                >
                  Cancelar alterações
                </Button>

                <Button type="primary" size="large" onClick={handleUpdateProfile} disabled={!isSave} loading={isSaving}>Salvar alterações</Button>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyledPerfil>
  );
};

export { Perfil };
