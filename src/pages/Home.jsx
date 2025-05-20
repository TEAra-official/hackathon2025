export default function Home() {

    // ニュースデータ（将来的にAPIやDBから取得するように変更できます）
    const newsItems = [
      {
        id: 1,
        date: "2025.5.3",
        title: "TEAra Hack 2025 開催！！",
        link: "#hackSection"
      },
      // 将来的に追加するニュースはここに追加できます
      // {
      //   id: 2,
      //   date: "2025.4.20",
      //   title: "サンプルニュース2",
      //   link: "#hackSection"
      // },
    ];

   // スムーズスクロール用の関数
  const smoothScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* グローバルスタイル - スムーズスクロール用 */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>


      {/* セクション1：キャッチコピー */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-green-100 to-white overflow-hidden">
        
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-4">
          ようこそ TEAra へ！
        </h2>
        <div className="w-24 h-1.5 bg-emerald-300 rounded-full mb-6" />

        <p className="text-base md:text-lg text-gray-700 max-w-3xl leading-relaxed">
          TEAraは、「何かを作ってみたい」「アウトプットしてみたい」――
          そんな想いを持つ人が集まる、お茶の水女子大学の開発コミュニティです。
          <br />
          「プログラミングに興味ある！」そんな人たちが集まって、 <br />
          ワークショップや勉強会、ハッカソンをゆるく楽しくやってます☕️
          <br />
          初めてでも大歓迎！まずはこのハッカソンから一緒にやってみませんか？
        </p>
      </section>

        {/* セクション2：最新ニュース */}
        <section className="py-4 px-6 bg-white mb-8">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-teal-700">最新ニュース</h3>
            <div className="relative bg-white shadow-md rounded-lg p-3">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-b-lg" />
              <ul className="divide-y divide-gray-200">
                {newsItems.map((news) => (
                  <li key={news.id} className="py-4">
                    <a 
                      href={news.link} 
                      className="block hover:bg-gray-50 transition p-2 rounded"
                      onClick={smoothScroll}
                    >
                      <div className="flex items-baseline">
                        <span className="text-teal-500 font-medium mr-3">{news.date}</span>
                        <span className="text-teal-700">{news.title}</span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-b-lg" />
            </div>
          </div>
        </section>

    {/*セクション3:画像*/}
    <section id="hackSection"  className="flex justify-center py-16 px-4 bg-white">
      <div className="relative w-full max-w-3xl">
        {/* 背景のふわっと丸い色 */}
        <div className="absolute -top-6 -left-6 w-full h-full bg-teal-100 rounded-3xl blur-xl opacity-40 z-0" />
        
        {/* 画像本体 */}
        <img
          src="/Hack.png"
          alt="TEAra Hackathon Banner"
          className="relative z-10 w-full rounded-2xl shadow-xl transform transition duration-300 hover:scale-105"
        />
      </div>
    </section>

      {/* セクション4：CTA */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-teal-100 via-green-100 to-teal-100">
        <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-4">
          2025年春のハッカソン、開催中！
        </h3>
        <p className="text-gray-700 mb-8 text-lg">Reactでサイトを作ろう</p>
        <a
          href="https://example.com/apply"
          className="inline-block bg-emerald-500 text-white px-8 py-3 text-lg font-medium rounded-full shadow-lg hover:bg-emerald-600 transition"
        >
          参加はこちらから
        </a>
      </section>
    </main>
  );
}
