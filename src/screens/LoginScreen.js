import React from "react";
import RecentAccList from "../components/login/RecentAccList";
import NewAcc from "../components/login/NewAcc";
import LoginForm from "../components/login/LoginForm";
import { Link } from "react-router-dom";
function LoginScreen() {
  return (
    <div className="container" id="login-container">
      <div className="form">
        <div className="form-left">
          <div className="logo">
            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
          </div>
          <div className="recent-h3">Đăng nhập gần đây</div>
          <div className="recent-h4">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</div>
          <div className="recent-acc">
            <RecentAccList />
            <NewAcc />
          </div>
        </div>
        <div className="form-right">
          <div className="form-right-wrapper">
            <LoginForm />
            <div className="slogan-title">
              <Link to="/">Tạo trang &nbsp;</Link>
              dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginScreen;
