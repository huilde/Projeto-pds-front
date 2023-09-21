import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { StyledMain } from "../Main/Main.style";

const { Content, Footer, Sider } = Layout;

const Main = () => {
  const navigate = useNavigate();

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
            defaultSelectedKeys={["1"]}
            items={[
              { icon: HomeOutlined, route: "/Main", label: "Home" },
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
        <Layout style={{}}>
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
