import React from "react";
import { redirect } from "react-router-dom";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

import { StyledMain } from "./Main.style.js";

const Main = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <StyledMain>
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
            defaultSelectedKeys={["4"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `Perfil`,
              onClick: async () =>
                await (console.log("fui clickado"), redirect("/Perfil")),
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
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Criado para a matéria de projeto detalhado de software ©2023
          </Footer>
        </Layout>
      </Layout>
    </StyledMain>
  );
};

export { Main };