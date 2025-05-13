import React from "react";
export default function About() {
  
  const cards = [
    {
      title: "活動内容",
      content: [
        "ハッカソンや勉強会の実施",
        "フロントやバックエンドなどの初心者向けのワークショップの開催",
      ],
      bg: "bg-yellow-100",
    },
    {
      title: "こんな人におすすめ！",
      content: [
        "プログラミングをしたことないけど、興味がある",
        "何かを作ってみたいけど、何から始めればいいのかわからない",
        "学内で一緒に開発するメンバー・コンテストメンバーを探している",
        "エンジニアとして切磋琢磨勉強したい",
        "人にエンジニアリングを教えてみたい",
      ],
      bg: "bg-pink-100",
    },
    {
      title: "メンバー数・構成",
      content: [
        "１年生２人・２年生５人・３年生６人・４年生８人・修士１０人程度",
        "文系の人も所属しています！",
        "新入生以外も大歓迎です！",
      ],
      bg: "bg-blue-100",
    },
    {
      title: "活動頻度・場所",
      content: [
        "各自が参加するイベントによって活動頻度は異なります。",
        "DiscordやGitHubを使った共同開発ではオンラインでの実施が多くなります。",
        "対面の場合活動場所は理学部3号館です。",
      ],
      bg: "bg-purple-100",
    },
    {
      title: "活動目的・理念",
      content: [
        "“お茶の水女子大学の開発コミュニティ”として開発の機会を設けること",
        "さまざまなバックグラウンドを持つ学生たちと協働しながら技術を高めあうこと",
      ],
      bg: "bg-green-50",
    }
    ];
    
    
  
  function CardList({ cards, x = 0, y = 0 }) {
    return (
      <div className="relative flex flex-wrap gap-8 justify-center items-start">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`${card.bg} w-80 p-8 rounded-3xl shadow-lg pointer-events-auto transition-transform duration-300 hover:scale-125`}
            style={{
              // もし絶対位置を使うなら下記を有効化
              // position: "absolute",
              // top: `calc(50% + ${y}px - 5rem)`,
              // left: `calc(50% + ${x}px - 10rem)`,
            }}
          >
            <h2 className="text-xl font-bold mb-5 relative inline-block">
              <span className="relative z-10">{card.title}</span>
              <svg
                className="absolute left-0 bottom-0 w-full h-10 z-0"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <rect x="0" y="6" width="100" height="4" fill="#ffffff" rx="2" />
              </svg>
            </h2>
            <ul className="list-disc ml-5 space-y-1">
              {card.content.map((text, idx) => (
                <li key={idx}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  
  // 使い方
  // <CardList cards={cards} />
  

  return (
    <main className="w-full min-h-screen bg-white">
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-white to-sky-200">
        <div className="relative w-full h-screen flex items-center justify-center bg-sky-50 ">
          {/* 背景画像レイヤー */}
          <div
            className="absolute inset-0 "
            style={{
              backgroundImage: "url('/AdobeStock_510413552.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.01,
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
          <div className="absolute inset-0 bg-animate"></div>

      
 {/* 中央のロゴ */}
 <div className="absolute w-[650px] h-[650px] rounded-full border-4 border-indigo-500 opacity-30"></div>
 <div className="z-10 flex items-center justify-center w-52 h-52 rounded-full bg-indigo-500 text-white text-5xl font-black text-center p-6 shadow-lg animate-spin-slow">
 About TEAra
          </div>
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
            {cards.map(({ title, content, bg }, i) => {
              // 0度を上(12時)にしたい場合は -90度から始める
              const angle = (360 / cards.length) * i - 90;
              const rad = (angle * Math.PI) / 180;
              const radius = 350; // 中心からの距離
              const x = radius * Math.cos(rad);
              const y = radius * Math.sin(rad);
              
              return (
                <div
                  key={i}
                  className={`${bg} group absolute w-80 p-8 rounded-3xl shadow-lg  pointer-events-auto transition-transform duration-300 hover:scale-150`}
                  style={{
                    top: `calc(50% + ${y}px - 5rem)`,
                    left: `calc(50% + ${x}px - 10rem)`,
                  }}
                >

<h3 className="font-bold mb-5 text-center relative inline-block overflow-visible">
  <span className="relative z-10">{title}</span>
  <svg
    className="absolute left-0 bottom-0 w-full h-3/4 z-0"
    viewBox="0 0 100 24"
    preserveAspectRatio="none"
    style={{ minHeight: '1.2em' }}
  >
    <rect x="0" y="16" width="100" height="8" fill="lightblue" rx="4" />
  </svg>
</h3>

<ul className="text-sm space-y-4 list-disc list-inside text-left">
  {content.map((line, idx) => {
    // マーカーをつけたいキーワード
    const keywords = ["理学部3号館", "ハッカソン","オンライン","お茶の水女子大学の開発コミュニティ","初心者向けのワークショップ","文系の人","プログラミング","メンバーを探している","エンジニアリングを教えてみたい"
    ];
    // どれかが含まれているか
    const found = keywords.find(word => line.includes(word));
    if (found) {
      // キーワードで分割し、<span>でラップ
      const parts = line.split(new RegExp(`(${keywords.join('|')})`, 'g'));
      return (
        <li key={idx}>
          {parts.map((part, i) =>
            keywords.includes(part) ? (
              <span key={i} className="marker-animate">{part}</span>
            ) : (
              part
            )
          )}
        </li>
      );
    }
    // それ以外はそのまま
    return <li key={idx}>{line}</li>;
  })}
</ul>

                  
                </div>
              );
            })}
            </div>
          </div>
        </section>
      </main>
    );
}
  



              

   
      