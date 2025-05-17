import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const activityRef = useRef(null);

  const toggleActivityMenu = () => {
    setIsActivityOpen((prev) => !prev);
  };

  // 外側クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activityRef.current && !activityRef.current.contains(event.target)) {
        setIsActivityOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative w-full h-screen">
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
        <ul className="w-full flex justify-center gap-10 sm:gap-6 md:gap-8 lg:gap-12 px-4 py-2 text-white font-bold text-lg">
          <li>
            <Link
              className="hover:text-white hover:translate-y-1 transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="relative" ref={activityRef}>
            {/* 活動ドロップダウン */}
            <button
              onClick={toggleActivityMenu}
              className="text-[#646cff] hover:text-white transition-colors duration-200 focus:outline-none bg-transparent border-none p-0"
            >
              活動
            </button>
            {isActivityOpen && (
              <div className="absolute top-full left-0 mt-1 bg-white rounded shadow-lg py-2 w-36 z-50 border border-gray-200">
                <Link
                  to="/schedule"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-teal-600"
                  onClick={() => setIsActivityOpen(false)}
                >
                  スケジュール
                </Link>
                <Link
                  to="/record"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-teal-600"
                  onClick={() => setIsActivityOpen(false)}
                >
                  活動記録
                </Link>
              </div>
            )}
          </li>
          <li>
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/members"
            >
              members
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/news"
            >
              新歓情報
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white transition-colors duration-200"
              to="/links"
            >
              Link
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}