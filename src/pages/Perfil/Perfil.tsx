import React, { useState } from "react";
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
} from "antd";

import { StyledPerfil } from "./Perfil.style";

const { Header, Content, Footer, Sider } = Layout;

const { TextArea } = Input;

const Perfil = () => {
  const navigate = useNavigate();
  const [selectedPicture, setSelectedPicture] = useState(0);
  const [isEditMode, setIsEditMode] = useState(false);

  const content = (
    <div style={{ cursor: "pointer" }}>
      <img
        src="../../../public/homem.png"
        alt=""
        onClick={() => setSelectedPicture(0)}
      />
      <br />
      <br />
      <img
        src="../../../public/mulher.png"
        alt=""
        onClick={() => setSelectedPicture(1)}
      />
    </div>
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
              { icon: VideoCameraOutlined, route: "/filmes", label: "Filmes" },
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
                      <Avatar
                        src={
                          selectedPicture === 0
                            ? "../../../public/homem.png"
                            : "../../../public/mulher.png"
                        }
                        size={164}
                        icon={<UserOutlined />}
                      ></Avatar>
                    </Popover>
                    <br />
                    <br />
                    <Row>
                      <Col>
                        <EditOutlined></EditOutlined>
                        <span> Editar Perfil</span>
                      </Col>
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
                      placeholder="teste"
                      disabled
                      maxLength={100}
                      style={{ height: 150, resize: "none", width: "100%" }}
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
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Criado para a matéria de projeto detalhado de software ©2023
          </Footer>
        </Layout>
      </Layout>
    </StyledPerfil>
  );
};

export { Perfil };
