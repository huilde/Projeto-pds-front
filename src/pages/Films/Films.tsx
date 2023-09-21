import React, { useEffect, useState } from "react";
import {
  Card,
  Image,
  Input,
  List,
  Pagination,
  Typography,
  Layout,
  Menu,
  theme,
} from "antd";
import { useNavigate } from "react-router-dom";

import {
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { ApiService } from "../../services/ApiService";
import { StyledFilms } from "../Films/Films.style";

type Film = {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  backdrop_path: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
};
const { Content, Footer, Sider } = Layout;

const COUNT_FILMS = 500 * 20;

const Films = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const api = ApiService();

  const navigate = useNavigate();

  const handleGetFilms = async () => {
    setLoading(true);

    try {
      const response = await api.get(`/films/${page}`);

      setFilms(response.data.films);
    } catch (error) {}

    setLoading(false);
  };

  useEffect(() => {
    handleGetFilms();
  }, [page]);

  return (
    <StyledFilms>
      <Layout style={{ height: "100%" }}>
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
            defaultSelectedKeys={["3"]}
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
              }}
            >
              <div>
                <Typography.Title
                  style={{
                    textAlign: "center",
                    color: "black",
                  }}
                >
                  Filmes
                </Typography.Title>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 32,
                  }}
                >
                  <Input.Search
                    style={{
                      maxWidth: 500,
                      display: "flex",
                    }}
                    onSearch={(value) => {
                      console.log(value);
                    }}
                  ></Input.Search>
                </div>

                <List
                  loading={loading}
                  dataSource={films}
                  grid={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                    xxl: 5,
                  }}
                  renderItem={(item: Film) => {
                    return (
                      <Card
                        key={item.id}
                        style={{
                          margin: 12,
                          marginBottom: 32,
                        }}
                      >
                        <Image
                          style={{
                            borderRadius: 8,
                            height: "500px",
                          }}
                          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        ></Image>
                      </Card>
                    );
                  }}
                ></List>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "16px",
                    marginBottom: "24px",
                  }}
                >
                  <Pagination
                    defaultCurrent={1}
                    current={page}
                    total={COUNT_FILMS}
                    defaultPageSize={20}
                    onChange={(page) => setPage(page)}
                  />
                </div>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Criado para a matéria de projeto detalhado de software ©2023
          </Footer>
        </Layout>
      </Layout>
    </StyledFilms>
  );
};

export default Films;
