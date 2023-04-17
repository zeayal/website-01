
import {useState} from 'react';
import { Button, Checkbox, Form, Input } from "antd";
import "./index.less";
import { apiUserLogin } from "../../http/user.http";
import { message } from "antd";
import { Navigate } from 'react-router-dom';

const Login = () => {

  const [isLogin, setIsLogin] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    const { password, remember, username1 } = values;
    const res = await apiUserLogin({
      password,
      remember,
      username: username1,
    });

    console.log("res", res);
    if(res.code === 0) {
      // 登陆成功
      message.success('登陆成功');
      // 跳转到首页
      setIsLogin(true);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  if(isLogin) {
    return <Navigate to="/home" />
  }

  return (
    <div className="login-container">
      <Form
        style={{
          width: 1000,
          border: "1px solid #ccc",
          padding: "2rem 0",
        }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 10,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username1"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
