import React from 'react';

export default function Members() {
  return (
    <main className="w-full min-h-screen bg-lime-50">

      {/* 最初のセクション（枠なし） */}
      <section className="relative py-20 px-6 bg-lime-50 overflow-hidden text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-emerald-700">
          TEAraメンバー紹介
        </h2>
        <div className="w-24 h-2 rounded-full bg-emerald-300 mb-6 mx-auto" />
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          TEAraはお茶大のメンバーのみで構成されています。
          <br />プログラミング初心者から経験者まで幅広く活動しています。
          <br />メンバーが協力し合いながら、楽しく学び、様々なことに挑戦しています。
        </p>
      </section>

      {/* 学科の多様性 */}
      <section className="py-16 px-6 bg-lime-50 flex justify-center">
        <div className="max-w-3xl w-full text-center bg-white shadow-xl rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-t-3xl" />

          <h3 className="text-2xl md:text-3xl font-semibold mb-4 mt-4 text-emerald-700">
            🌈 いろんな学科のメンバーが活躍中！
          </h3>
          <div className="w-20 h-1 border-b border-dotted border-emerald-300 mx-auto mb-6" />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            情報科学科に限らず、様々な学科の学生が参加しています。
            <br />異なる専門性を持つメンバー同士が互いに刺激を与え合いながら、
            <br />多様な視点でアイデアを形にしています。
          </p>

          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-b-3xl" />
        </div>
      </section>

      {/* 学年構成 */}
      <section className="py-16 px-6 bg-lime-50 flex justify-center">
        <div className="max-w-3xl w-full text-center bg-white shadow-xl rounded-3xl p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-t-3xl" />

          <h3 className="text-xl md:text-3xl font-semibold mb-4 mt-4 text-emerald-700">
            🎓 学年の構成
          </h3>
          <div className="w-20 h-1 border-b border-dotted border-emerald-300 mx-auto mb-6" />
          <ul className="text-gray-700 space-y-2 text-lg">
            <li>1年生：2名</li>
            <li>2年生：5名</li>
            <li>3年生：6名</li>
            <li>4年生：8名</li>
            <li>修士：10名程度</li>
          </ul>

          <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-b-3xl" />
        </div>
      </section>

    </main>
  );
}
