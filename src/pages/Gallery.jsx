import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Gallery() {
  const [openTitle, setOpenTitle] = useState(null);

  const toggleOpen = (title) => {
    setOpenTitle(openTitle === title ? null : title);
  };

  const galleryItems = [
    {
      date: "2024年12月",
      title: "TypeScript&Reactワークショップ",
      image: "/workshop1.png",
      summary: "TypeScript, Reactのワークショップを開催しました",
      details:
        "TypeScriptと、UIを構築するためのライブラリであるReactについて学びました。ワークショップを通して多くの学生がフロントエンド(WebサイトやWebアプリケーションにおいて、ユーザーが直接目にしたり操作したりする部分)を身近に感じることができるようになりました。",
    },
    {
      date: "2024年9月",
      title: "メルカリ様 オフィスツアー",
      image: "/mercari.png",
      summary: "TEAra主催のオフィスツアーを開催しました",
      details:
        "オフィスを見学したり、お茶大OGを含む様々な業種の方々とお話ししたりしました。開発までの流れやメルカリでの働き方など、貴重なお話を伺うことができました。",
    },
    {
      date: "2024年9月",
      title: "C言語ワークショップ",
      image: "/workshop2.png",
      summary: "「プログラムはどう動くか」についてワークショップを開催しました",
      details:
        "コンピュータの動作原理の理解に繋がることを目指し、ノイマン型コンピュータの動作方法の確認やバッファオーバーフローのハンズオンなどを行いました。",
    },
    {
      date: "2024年8月",
      title: "日本マイクロソフト様 オフィスツアー",
      image: "/Microsoft2.png",
      summary: "TEAra主催のオフィスツアーを開催しました",
      details:
        "約20名の学生が参加し、多職種のOGや社員の皆様から貴重なお話を伺いました。職場環境を見学し、働くイメージが具体的になり、キャリアを考えるきっかけになりました。",
    },
    {
      date: "2024年6月",
      title: "バックエンド入門ワークショップ",
      image: "/workshop3.png",
      summary: "Pythonを用いたバックエンドのワークショップを開催しました",
      details:
        "Webアプリケーション開発で用いられるPythonのFlaskを使って、サーバーサイドの構築をし、クライアントとサーバでHTTP通信を行いました。また、SQLiteを用いてサーバーとDBの接続も行いました。",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-white">
      <section className="py-16 px-6 bg-gradient-to-b from-green-100 to-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Gallery</h2>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mb-8">
          これまでにTEAraが行った活動や成果を紹介します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.01] transition cursor-pointer border border-gray-200"
              onClick={() => toggleOpen(item.title)}
            >
              <img src={item.image} className="w-full h-48 object-cover" alt={item.title} />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.date}</p>
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  {openTitle === item.title ? (
                    <ChevronUp className="w-5 h-5 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600" />
                  )}
                </div>
                <p className="text-gray-600 mt-1">{item.summary}</p>
                {openTitle === item.title && (
                  <p className="mt-4 text-sm text-gray-700">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
