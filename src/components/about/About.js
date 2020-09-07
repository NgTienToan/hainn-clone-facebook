import React, { useState } from "react";

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

  const [t] = useTranslation("common");

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
