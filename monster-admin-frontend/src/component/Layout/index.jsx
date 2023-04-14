import React, { useEffect } from "react";
import { Button, Layout, Menu, theme, Space, Spin } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import { apiUserInfo } from "../../http/user.http";
const { Header, Sider, Content, Footer } = Layout;

const SiteLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [userInfo, setUserInfo] = React.useState(null);
  const fetchUserInfo = async () => {
    const res = await apiUserInfo();
    console.log("res", res);
    if (res.code === 0) {
      // 获取用户信息成功
      setUserInfo(res.data);
    }
  };

  // 用户刷新页面时重新调用 getUserInfo 接口
  useEffect(() => {
    fetchUserInfo();
    // console.log("res", res);
  }, []);

  const menus = [
    {
      id: 1,
      label: <Link to="/home">首页</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      id: 2,
      label: <Link to="/user">用户管理</Link>,
      key: "user",
      icon: <UserOutlined />,
    },
    {
      id: 3,
      label: <Link to="/post">文章管理</Link>,
      key: "post",
      icon: <ContainerOutlined />,
    },
  ];
  const LayoutTheme = "dark";
  const siderTheme = "light";
  if (!userInfo) {
    return (
      <div
        style={{
          width: "100vw",
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Spin tip="Loading" size="small" />
      </div>
    );
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          backgroundColor: "#001529",
          color: "#fff",
          fontSize: "20px",
          borderBottom: "1px solid #012520",
        }}
      >
        <span>管理后台</span>
      </Header>

      <Layout>
        <Sider theme={siderTheme}>
          <Menu items={menus} theme={siderTheme} />
        </Sider>
        <Content
          style={{
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      {/* <Footer>Footer</Footer> */}
    </Layout>
  );
};

export default SiteLayout;
