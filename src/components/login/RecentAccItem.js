import React from "react";
import { CloseCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function RecentAcc(props) {
  return (
    <div className="recent-acc-item">
      <div className="recent-acc-wrapper">
        <Link className="recent-acc-content" to="/">
          <img alt="avatar" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-1/s480x480/56757462_997053303831001_6486077804453560320_o.jpg?_nc_cat=110&_nc_sid=dbb9e7&_nc_ohc=FxGwMz4Gr3YAX8DrasB&_nc_ht=scontent.fhan2-4.fna&tp=7&oh=744fc616aab1765bf99b1e7a12df809b&oe=5F7A1F49" />
          <div className="recent-acc-name">Nguyễn</div>
        </Link>
        <Link className="icon-delete" onClick= {props.onDelete} to="/">
          <CloseCircleFilled />
        </Link>
      </div>
    </div>
  );
}
