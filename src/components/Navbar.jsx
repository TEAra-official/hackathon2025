import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* 背景画像（画面全体） */}
      {/* <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="/backpicture.png"
          alt="TEAra header"
          className="w-full h-full object-cover object-top"
        />
      </div> */}

      <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-70 shadow-md z-50">
        <div className="flex items-center px-2 py-1">
          <ul className="w-full flex gap-6 px-2 py-1 text-xl text-neutral-950 font-['M_PLUS_1p']">
            {/* 左端ロゴ */}
            <img src="/teararogo.png" alt="TEAra logo" className="h-9 w-auto" />
            
            <li className="relative group">
              <Link to="/" className="text-black hover:text-gray-500 transition-colors duration-200">
                Home
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>
            
            <li className="relative group">
              <Link to="/about" className="text-black hover:text-gray-500 transition-colors duration-200">
                About
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>
            
            <li className="relative group">
              <Link to="/gallery" className="text-black hover:text-gray-500 transition-colors duration-200">
                Gallery
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>

            <li className="relative group">
              <Link to="/events" className="text-black hover:text-gray-500 transition-colors duration-200">
                Events
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>

            <li className="relative group">
              <Link to="/joinus" className="text-black hover:text-gray-500 transition-colors duration-200">
                Join Us
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>

            <li className="relative group">
              <Link to="/contact" className="text-black hover:text-gray-500 transition-colors duration-200">
                Contact
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>

            <li className="relative group">
              <Link to="/links" className="text-black hover:text-gray-500 transition-colors duration-200">
                Links
              </Link>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span> {/* 赤文字 */}
            </li>

          </ul>
        </div>
      </nav>

      {/* ロゴ・タイトル（中央） */}
      <div className="w-full h-full flex flex-col items-center justify-center text-white text-center bg-black/30">
        <div className="flex items-center space-x-4 mt-52">
          <img
            src="/teara.png"
            alt="TEAra logo"
            className="w-32 h-32 object-contain"
          />
          <h1 className="text-30xl md:text-30xl font-bold">TEAra</h1>
        </div>
        <p className="text-lg md:text-xl font-bold tracking-wide mt-2">
          お茶大生の開発コミュニティ
        </p>
      </div>

      {/* ナビバー */}  
     
    </header>
  );
}
