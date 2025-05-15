import React from 'react';

export default function News() {
  return (
    <main className="min-h-screen bg-lime-50 bg-[radial-gradient(circle,_#d9f99d_1px,_transparent_1px)] [background-size:20px_20px] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white shadow-xl rounded-3xl p-10 relative overflow-hidden">
        
        {/* 上部飾りライン */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-t-3xl" />

        <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4 mt-4">
          入会をご希望の方へ
        </h1>

        {/* 点線区切り */}
        <div className="w-20 h-1 border-b border-dotted border-emerald-300 mx-auto mb-6" />

        <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
          活動に興味のあるお茶大生や、お問い合わせのある方は<br />
          DMまたはメールをご利用ください！<br />
          年中入会受け付けてます！
        </p>

        <p className="text-sm text-gray-500 mb-8">
          📧 Mail: teara.official@gmail.com
        </p>

        {/* ボタン（入会・問い合わせ） */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <a
            href="mailto:teara.official@gmail.com?subject=TEAra入会希望"
            className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition duration-200 shadow-md"
          >
            入会はこちら
          </a>

          <a
            href="mailto:teara.official@gmail.com?subject=TEAraへのお問い合わせ"
            className="bg-emerald-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition duration-200 shadow-md"
          >
            お問い合わせはこちら
          </a>
        </div>

        {/* SNSリンク */}
        <div className="mt-4">
          <p className="text-gray-700 text-base mb-2">
            普段の様子はこちらから！
          </p>
          <a
            href="https://x.com/teara_ocha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-600 transition shadow"
          >
            X（旧Twitter）を見る
          </a>
        </div>

        {/* 下部飾り */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-b-3xl" />
      </div>
    </main>
  );
}
