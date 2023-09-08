import { css, styled } from "styled-components";
import { Button } from "../ui";
import { useState } from "react";
import KakaoLogin from "../../assets/kakao_login_large_wide.png";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return "이메일의 형식을 지켜주세요";
    return;
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password))
      return "(8자리 이상 , 대소문자 포함 , 특수문자 포함 , 숫자 포함)";
    return;
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const onSubmitInput = (e) => {
    e.preventDefault();

    const emailError = validateEmail(form.email);
    const passwordError = validatePassword(form.password);

    if (emailError || passwordError) {
      setErrors({
        email: emailError,
        password: passwordError,
      });

      return;
    }
  };

  console.log(form, errors);

  return (
    <StSignIn onSubmit={onSubmitInput}>
      <AuthLogo>별무리 스튜디오</AuthLogo>
      <AuthInput
        type="text"
        name="email"
        value={form.email}
        errors={errors.email}
        onChange={onChangeInput}
        placeholder="email을 입력해주세요"
      />
      <AuthError>{errors.email}</AuthError>
      <AuthInput
        type="password"
        name="password"
        value={form.password}
        errors={errors.password}
        onChange={onChangeInput}
        placeholder="비밀번호를 입력해주세요"
      />
      <AuthError>{errors.password}</AuthError>
      <Button size="medium" fullWidth="true" disabled={!form.email || !form.password}>
        로그인
      </Button>
      <AuthSocialButton src={KakaoLogin} />
      <AuthLink>
        아직 코드리뷰 회원이 아니신가요? <span>회원가입</span>
      </AuthLink>
    </StSignIn>
  );
};

const StSignIn = styled.form`
  width: 400px;
  height: 600px;
  padding: 20px 36px;
  box-sizing: border-box;
  border-radius: 12px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  button {
    margin-top: 36px;
  }
`;

const AuthLogo = styled.span`
  margin-bottom: 36px;
  font-size: 2.2rem;
  font-weight: 400;
  color: #333;
`;

const AuthInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 400;
  color: #333;
  background: #f0f1f5;

  &:placeholder {
    color: #888;
  }

  ${(props) =>
    props.errors &&
    css`
      border: 1px solid red;
    `}
`;

const AuthSocialButton = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const AuthError = styled.span`
  display: inline-block;
  width: 100%;
  font-size: 0.8rem;
  font-weight: 400;
  color: red;
`;

const AuthLink = styled.span`
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: sans-serif;
  color: #888;

  span {
    color: #333;
    text-decoration: underline;
  }
`;

export { SignIn };
