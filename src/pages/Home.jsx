export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
{/* セクション1：About*/}
<section className="flex justify-center items-center py-5 px-6">
  <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
    {/* 左側の文章 */}
    <div className="w-1/2 text-left">
      <h3 className="text-4xl font-bold text-gray-900 mb-4">ABOUT</h3>
      <h4 className="text-2xl font-bold text-gray-900 mb-4">TEAraとは？</h4>
      <p className="text-lg text-gray-700 mb-6">
        「何かを作ってみたい」「アウトプットしたい」<br />
        そんな想いを持つ人が集まる<br />
        お茶の水女子大学の開発コミュニティです。<br />
      </p>

      {/* Aboutページへのリンクボタン */}
      <a
        href="/about"
        className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
      >
        TEAraをもっと知る
      </a>
    </div>

    {/* 右側の画像 */}
    <div className="w-1/2 flex justify-center">
      <img
        src="/teara.png"
        alt="TEAra Hackathon Banner"
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

<section className="flex justify-center items-center py-5 px-6">
  <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
     {/* 右側の画像 */}
     <div className="w-1/2 flex justify-center">
      <img
        src="/microsoft.png"
        alt="TEAra Hackathon Banner"
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
    </div>
    {/* 左側の文章 */}
    <div className="w-1/2 text-left">
      <h3 className="text-4xl font-bold text-gray-900 mb-4">GALLERY</h3>
      <h4 className="text-2xl font-bold text-gray-900 mb-4">活動履歴</h4>
      <p className="text-lg text-gray-700 mb-6">
      オフィス訪問や合同イベントなど<br />
        企業との交流も数多くあります。<br />
        また、ワークショップを通じて
        <br />
        さらにスキルを磨くことができます。
      </p>

      {/* GALLERYページへのリンクボタン */}
      <a
        href="/gallery"
        className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
      >
        TEAraの活動を見る
      </a>
    </div>
  </div>
</section>

<section className="flex justify-center items-center py-5 px-6">
  <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
    {/* 左側の文章 */}
    <div className="w-1/2 text-left">
      <h3 className="text-4xl font-bold text-gray-900 mb-4">EVENTS</h3>
      <h4 className="text-2xl font-bold text-gray-900 mb-4">イベント開催情報</h4>
      <p className="text-lg text-gray-700 mb-6">
      「プログラミングに興味がある！」<br />
        そんな人たちが集まって、<br />
        ワークショップや勉強会、ハッカソンを<br />
        ゆるく楽しくやってます☕️
      </p>

      {/* EVENTSページへのリンクボタン */}
      <a
        href="/events"
        className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
      >
        イベントの詳しい内容はこちらから
      </a>
    </div>
    {/* 右側の画像 */} 
    
    <div className="w-1/2 flex justify-center">
      <img
        src="/Home.about.png"
        alt="TEAra Hackathon Banner"
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>

<section className="flex justify-center items-center py-5 px-6">
  <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
     {/* 右側の画像 */}
     <div className="w-1/2 flex justify-center">
      <img
        src="/joinus.png"
        alt="TEAra Hackathon Banner"
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
    </div>
    {/* 左側の文章 */}
    <div className="w-1/2 text-left">
      <h3 className="text-4xl font-bold text-gray-900 mb-4">JOIN US</h3>
      <h4 className="text-2xl font-bold text-gray-900 mb-4">開発を楽しもう！</h4>
      <p className="text-lg text-gray-700 mb-6">
        TEAraはいつでも入会することができます。<br />
        今からでは遅いかな...と思ってる方も<br />
        ぜひ私たちと共に開発に挑戦してみませんか？<br />
        
      </p>

      {/* JOIN USページへのリンクボタン */}
      <a
        href="/joinus"
        className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
      >
        TEAraに参加する
      </a>
    </div>
  </div>
</section>

<section className="flex justify-center items-center py-5 px-6">
  <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
    {/* 左側の文章 */}
    <div className="w-1/2 text-left">
      <h3 className="text-4xl font-bold text-gray-900 mb-4">CONTACT</h3>
      <h4 className="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h4>
      <p className="text-lg text-gray-700 mb-6">
        TEAraへの質問やお問い合わせは<br />
        X,InstagramのDM、またはメールアドレスに<br />
        お願いいたします。
        
      </p>

      {/* CONTACTページへのリンクボタン */}
      <a
        href="/contact"
        className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
      >
        お問い合わせはこちらから
      </a>
    </div>
    {/* 右側の画像 */} 
    
    <div className="w-1/2 flex justify-center">
      <img
        src="/FAQ.png"
        alt="TEAra Hackathon Banner"
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
    </div>
  </div>
</section>


<section className="flex justify-center items-center py-5 px-6">
  <div className="max-w-screen-lg w-full flex justify-between items-center space-x-8">
     {/* 右側の画像 */}
     <div className="w-1/2 flex justify-center">
      <img
        src="/link.png"
        alt="TEAra Hackathon Banner"
        className="w-full max-w-sm rounded-xl shadow-lg"
      />
    </div>
    {/* 左側の文章 */}
    <div className="w-1/2 text-left">
      <h3 className="text-4xl font-bold text-gray-900 mb-4">LINKS</h3>
      <h4 className="text-2xl font-bold text-gray-900 mb-4">各種リンク</h4>
      <p className="text-lg text-gray-700 mb-6">
        各種リンクはこちらにまとまっております。<br />
        
      </p>

      {/* Linksページへのリンクボタン */}
      <a
        href="/links"
        className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
      >
        各種リンク
      </a>
    </div>
  </div>
</section>




     

      {/* セクション3：CTA */}
      <section className="text-center py-16 bg-green-100">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          2025年春のハッカソン、開催中！
        </h3>
        <p className="text-gray-700 mb-6">Reactでサイトを作ろう</p>
        <a
          href="https://example.com/apply"
          className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
        >
          参加はこちらから
        </a>
      </section>
    </main>
  );
}