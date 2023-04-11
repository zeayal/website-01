import React from "react";
import { Button, Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const SiteLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menus = [
    { id: 1, label: <Link to="/">首页</Link>, key: "home", icon: "home" },
    {
      id: 2,
      label: <Link to="/user">用户管理</Link>,
      key: "user",
      icon: "user",
    },
    {
      id: 3,
      label: <Link to="/post">文章管理</Link>,
      key: "post",
      icon: "post",
    },
  ];
  const LayoutTheme = "dark";
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: '#001529',
          color: '#fff',
          fontSize: '20px',
          borderBottom: '1px solid #012520'
        }}
      >
        <span>管理后台</span>
      </Header>

      <Layout>
        <Sider theme={LayoutTheme}>
          <Menu items={menus} theme={LayoutTheme} />
        </Sider>
        <Content
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default SiteLayout;
