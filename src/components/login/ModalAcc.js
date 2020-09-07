import React from "react";
import { Modal, Input, Checkbox, Button, Form } from "antd";
import { Link } from "react-router-dom";
export default function ModalAcc(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Modal
      title="Đăng nhập Facebook"
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      width="300px"
      footer={null}
      className={props.className}
    >
      <Form id="acc-login-info" onFinish={onFinish}>
        <div className="acc-info">
          <Form.Item 
            className="acc-info-input"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Email hoặc số điện thoại" />
          </Form.Item>
          <Form.Item 
            className="acc-info-input"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input placeholder="Mật khẩu" type="password" />
          </Form.Item >
        </div>
        <div className="checkbox-save">
          <Checkbox>Nhớ mật khẩu</Checkbox>
        </div>
        <div className="btn-login">
          <Button type="primary" htmlType="submit">
            Đăng Nhập
          </Button>
        </div>
        <div className="line"></div>
        <div className="btn-forgot">
          <Link href="!#">Quên mật khẩu?</Link>
        </div>
      </Form>
    </Modal>
  );
}
