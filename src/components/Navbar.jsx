import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* 背景画像（画面全体）
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/Hack.png"
          alt="TEAra header"
          className="w-full h-full object-cover object-top"
        />
      </div> */}

      {/* ロゴ・タイトル（中央） */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/30">
        <div className="flex items-center space-x-4">
          <img
            src="/teara.png"
            alt="TEAra logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-4xl md:text-5xl font-bold">TEAra</h1>
        </div>
        <p className="text-sm md:text-base tracking-wide mt-2">
          お茶大生むけコミュニティ
        </p>
      </div>

      {/* ナビバー */}
      <nav className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-400 to-green-400 shadow-md z-10">
        <ul className="w-full flex justify-center gap-6 px-4 py-2 text-white font-medium text-sm">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">スケジュール</Link>
          </li>
          <li>
            <Link to="/records">活動記録</Link>
          </li>
          <li>
            <Link to="/members">members</Link>
          </li>
          <li>
            <Link to="/news">新歓情報</Link>
          </li>
          <li>
            <Link to="/links">Link</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
