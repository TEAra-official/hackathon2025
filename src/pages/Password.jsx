import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ログアウトボタンのコンポーネント
const LogoutButton = ({ toggleIsLoggedOut }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <button
                onClick={toggleIsLoggedOut}
                className="bg-red-500 text-white py-2 px-4 rounded-md shadow hover:bg-red-600"
            >
                ログアウト
            </button>
        </div>
    );
};

// ログインボタンのコンポーネント（フォームに含まれる）
const LoginButton = ({ toggleIsLoggedIn }) => {
    return (
        <button
            onClick={toggleIsLoggedIn}
            type="button" // submitではなくbuttonにして明示的なJS制御を維持
            className="w-full bg-sky-500 text-white py-2 px-4 rounded-md shadow hover:bg-sky-600"
        >
            ログイン
        </button>
    );
};

// ログインの状態を管理するコンポーネント
const LoginControl = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const navigate = useNavigate(); // 画面遷移に使用

    // ログイン処理（簡易的なチェック）
    const toggleIsLoggedIn = () => {
        if (userName === "user" && password === "password") {
            setIsLoggedIn(true);
            navigate("/records/schedule_private"); // 成功時に別ページへ移動
        } else {
            setErrorMsg(true); // エラー表示用フラグ
        }
    };

    // ログアウト処理
    const toggleIsLoggedOut = () => {
        setIsLoggedIn(false);
    };

    // 入力値のハンドラ
    const handleUserName = (e) => setUserName(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    // ログイン済みの場合、ログアウトボタンのみ表示
    if (isLoggedIn) {
        return <LogoutButton toggleIsLoggedOut={toggleIsLoggedOut} />;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">ログイン</h2>
                
                {/* エラーがある場合に警告文表示 */}
                {errorMsg && (
                    <p className="text-red-500 text-sm mb-4 text-center">
                        ユーザー名またはパスワードが違います
                    </p>
                )}

                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">ユーザー名</label>
                        <input
                            type="text"
                            placeholder="user"
                            value={userName}
                            onChange={handleUserName}
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">パスワード</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={handlePassword}
                            required
                            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                                ログイン状態を保持
                            </label>
                        </div>
                    </div>

                    <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />
                </form>
            </div>
        </div>
    );
};

export default function Password() {
    return <LoginControl />;
}
