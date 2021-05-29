import React from "react";
import { Link } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";

import "./AuthForm.css";

const fetchTest = () => {
  console.log(this);
}

const textmap = {
  login: "로그인",
  register: "회원가입",
};

const Authform = ({ type }) => {

  const txt = textmap[type];
  return (
    <Form>
      <h3>{txt}</h3>

      {type === "register" &&
        <Form.Field>
          <label>Name</label>
          <input id="name" placeholder="이름을 입력해주세요" />
        </Form.Field>
      }
      {type === "register" &&
        <Form.Field>
          <label>Phone Number</label>
          <input id="phoneNumber" placeholder="휴대폰 번호를 입력해 주세요" />
        </Form.Field>
      }
      {type === "register" &&
        <Form.Field>
          <label>Birth Number</label>
          <input id="birth" placeholder="생년월일 ex)950704" />
        </Form.Field>
      }
      {type === "register" &&
        <Form.Field className="auth__form__btn">
          <Button type="button" onClick={() => fetchTest()}>인증 번호 받기</Button>
        </Form.Field>
      }
      {type === "register" &&
        <Form.Field>
          <input id="auth_token" placeholder="인증 번호 받기를 눌러주세요!" />
        </Form.Field>
      }
      {type === "register" &&
        <Form.Field className="auth__form__btn">
          <Button type="button" onClick={() => fetchTest()}>인증 번호 확인</Button>
        </Form.Field>
      }
      {type === "register" &&
        <Form.Field>
          <label>Account Number</label>
          <input id="account" placeholder="계좌 번호를 입력해 주세요" />
        </Form.Field>
      }

      <Form.Field>
        <label>ID</label>
        <input id="userId" placeholder="ID를 입력해주세요" />
        <label>Password</label>
        <input id="userPassword" placeholder="비밀번호를 입력해주세요" />
      </Form.Field>

      {type === "register" &&
        <Form.Field>
          <label>Check Password</label>
          <input placeholder="비밀번호를 다시 입력해주세요" />
        </Form.Field>
      }

      <Form.Field className="auth__form__btn">
        <Button type="submit" onClick={() => fetchTest()}>
          {txt}
        </Button>
      </Form.Field>

      <footer className="auth__another">
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </footer>
    </Form>
  );
};

export default Authform;
