import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  return (
    <Container className="login_wrap">
      <Form onSubmit={(event) => loginUser(event)}>
        <div className="login_box">
          <h2>로그인</h2>
          <div className="login_text">
            <input
              placeholder="아이디"
              onChange={(e) => setId(e.target.value)}
            ></input>
          </div>
          <div className="login_text">
            <input
              type="password"
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="login_btn_div">
            <button type="submit">로그인</button>
          </div>
          <div className="login_bottom">
            <div className="signup_btn">
              <p>회원가입</p>
            </div>
            <div className="find_id_pw">
              <p>아이디 찾기</p>
              <span>|</span>
              <p>비밀번호 찾기</p>
            </div>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
