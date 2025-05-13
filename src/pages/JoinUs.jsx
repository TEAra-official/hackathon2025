// src/pages/JoinUs.js

import React, { useState } from 'react';

export default function JoinUs() { // ← これを追加
  // フォームの状態を管理
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // フォーム送信時の処理
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('フォームが送信されました！');
    // ここで、サーバーへの送信処理などを行うことができます。
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">Join Us</h1>
        <p className="text-lg text-center mb-6">
          私たちと共に開発を楽しみましょう！
        </p>

        {/* 参加フォーム */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold">
              名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="あなたの名前"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="example@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold">
              メッセージ
            </label>
            <textarea
              id="message"
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="参加理由など"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-2 rounded mt-4 hover:bg-teal-600"
          >
            参加する
          </button>
        </form>
      </div>
    </div>
  );
}
