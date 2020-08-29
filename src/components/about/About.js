<<<<<<< HEAD
import React, { useState } from "react";
=======
<<<<<<< HEAD
import React, {useState} from "react";
>>>>>>> bf19f4f... config router antd scss folder
import { Modal, Button } from "antd";
import { useTranslation } from "react-i18next";

function About() {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const [t, i18] = useTranslation("common");

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        {t("home")}
      </Button>
      <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
export default About;
=======
import React from "react";

import { Modal, Button } from 'antd';

class About extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
  }
}
export default About;
>>>>>>> a1c5b6a... config router antd scss folder
