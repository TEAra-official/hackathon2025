import React from 'react';

export default function Members() {
  return (
    <main className="w-full min-h-screen bg-white">
      
      {}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-blue-100 to-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          TEAraメンバー紹介
        </h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          TEAraはお茶大のメンバーのみで構成されています。
          情報科学科以外の学科からも多数在籍しており、プログラミング初心者から経験者まで幅広く活動しています。
          メンバーが協力し合いながら、楽しく学び、挑戦しています。
        </p>
      </section>

      {}
      <section className="flex flex-col items-center justify-center text-center py-12 bg-blue-50">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-700">
          メンバー構成
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li className="text-lg">1年生：2名</li>
          <li className="text-lg">2年生：5名</li>
          <li className="text-lg">3年生：6名</li>
          <li className="text-lg">4年生：8名</li>
          <li className="text-lg">修士：10名程度</li>
        </ul>
      </section>

      {}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-white to-blue-100">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          メンバーの多様性
        </h3>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          情報科学科以外にも、さまざまな学科から集まったメンバーが活躍しています。
          プログラミング初心者から経験者まで幅広く在籍しているため、サポート体制が整っており、初めての人も安心して参加できます。
        </p>
      </section>
    </main>
  );
}
