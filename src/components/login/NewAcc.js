import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import ModalAcc from "./ModalAcc";
import { Link } from "react-router-dom";
export default function NewAcc() {
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
    <div className="new-acc">
      <div className="recent-acc-wrapper">
        <Link onClick={showModal} className="new-acc-add" to="/">
          <div className="icon-add">
            <PlusCircleOutlined style={{ fontSize: "40px" }} />
          </div>
          <div className="recent-acc-name">Thêm tài khoản</div>
        </Link>
        <ModalAcc onOk={handleOk} onCancel={handleCancel} visible={visible} className="modal-acc" />
      </div>
    </div>
  );
}
