import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ toggleIsLoggedOut }) => {
  return <button onClick={toggleIsLoggedOut}>ログアウト</button>;
};

const LoginButton = ({ toggleIsLoggedIn }) => {
  return <button onClick={toggleIsLoggedIn}>ログイン</button>;
};

const LoginControl = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate(); // ← リダイレクト用

  const toggleIsLoggedIn = () => {
    if (userName === "user" && password === "password") {
      setIsLoggedIn(true);
      navigate("/records/schedule_private"); // ← ログイン成功後に遷移
    } else {
      setErrorMsg(true);
    }
  };

  const toggleIsLoggedOut = () => {
    setIsLoggedIn(false);
  };

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  if (isLoggedIn) {
    return <LogoutButton toggleIsLoggedOut={toggleIsLoggedOut} />;
  }

  return (
    <>
      <p>{errorMsg && "ユーザー名またはパスワードが違います"}</p>
      <div>
        <label>ユーザー名: </label>
        <input type="text" onChange={handleUserName} />
      </div>
      <div>
        <label>パスワード: </label>
        <input type="password" onChange={handlePassword} />
      </div>
      <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />
    </>
  );
};

export default function Password() {
  return <LoginControl />;
}
