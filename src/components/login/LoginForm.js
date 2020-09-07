import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";
function LoginForm() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <Form className="form-login" onFinish={onFinish}>
      <div className="acc-info">
        <Form.Item
          className="acc-info-input"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          className="acc-info-input"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input type="password" />
        </Form.Item>
      </div>
      <div className="btn-login">
        <Button type="primary" htmlType="submit">
          Đăng Nhập
        </Button>
      </div>
      <div className="btn-forgot">
        <a href="!#">Quên tài khoản?</a>
      </div>
      <div className="line"></div>
      <div className="btn-create-acc">
        <Link onClick={showModal} to="/">
          Tạo tài khoản mới
        </Link>
        <SignUp onOk={handleOk} onCancel={handleCancel} visible={visible} className="sign-up"/>
      </div>
    </Form>
  );
}
export default LoginForm;
