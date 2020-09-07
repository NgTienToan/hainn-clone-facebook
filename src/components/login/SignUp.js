import React from "react";
import { Modal, Input, Select, Radio, Form, Button } from "antd";
import { days, months, years } from "../../../src/common/Json/Date";
const { Option } = Select;
function SignUp(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const day = days;
  const month = months;
  const year = years;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const onChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Modal
      visible={props.visible}
      onOk={props.onOk}
      onCancel={props.onCancel}
      width="432px"
      title="Đăng Ký"
      footer={null}
      className={props.className}
    >
      <Form id="sign-up-info" onFinish={onFinish}>
        <div className="signup-info">
          <div className="first-last-name">
            <Form.Item
              className="firstname input"
              name="firstname"
              rules={[{ required: true, message: "Please input your firstname!" }]}
            >
              <Input placeholder="Họ" />
            </Form.Item>
            <Form.Item
              className="lastname input"
              name="lastname"
              rules={[{ required: true, message: "Please input your lastname!" }]}
            >
              <Input placeholder="Tên" />
            </Form.Item>
          </div>
          <Form.Item
            className=" input"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Email hoặc số điện thoại" />
          </Form.Item>
          <Form.Item
            className=" input"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input placeholder="Mật khẩu" type="password" />
          </Form.Item>
          <div className="text-name">Ngày sinh</div>
          <div className="input sign-up-date-flex">
            <Form.Item name="day" rules={[{ required: false, message: "Please input your date!" }]}>
              <Select style={{ width: "120px", marginRight: "10px" }} placeholder="Ngày sinh" onChange={handleChange}>
                {day.map((item, key) => {
                  return <Option value={item} key={key}>{item}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item name="month" rules={[{ required: false, message: "Please input your date!" }]}>
            <Select style={{ width: "120px", marginRight: "10px" }} placeholder="Ngày sinh" onChange={handleChange}>
                {month.map((item,key) => {
                  return <Option value={item} key={key}>{item}</Option>;
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name="year"
              rules={[{ required: false, message: "Please input your date!" }]}
            >
              <Select style={{ width: "120px" }} placeholder="Năm sinh" onChange={handleChange}>
                {year.map((item, key) => {
                  return <Option value={item} key={key}>{item}</Option>;
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="text-name">Giới tính</div>
          <Form.Item
            className="input"
            name="sex"
            rules={[{ required: true, message: "Please input your sex!" }]}
          >
            <Radio.Group onChange={onChange}>
              <Radio value={1}>Nam</Radio>
              <Radio value={2}>Nữ</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
        <div className="text-name1">
          Bằng cách nhấp vào Đăng ký, bạn đồng ý với Điều khoản, Chính sách dữ liệu và Chính sách
          cookie của chúng tôi. Bạn có thể nhận được thông báo của chúng tôi qua SMS và hủy nhận bất
          kỳ lúc nào.
        </div>
        <div className="btn-signup">
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </div>
      </Form>
    </Modal>
  );
}
export default SignUp;
