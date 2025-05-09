export default function Records() {
    // イベントデータ
    const events = [
        { month: "４", name: "新歓コント大会", date: "2024-04-15", detail: "新入生歓迎の気持ちを込めて、全員で全力でコントをしました！新入生も緊張していたのか反応は薄かったけれど、やり切った達成感がありました！", image_src: ["/4_konto.png"] },
        { month: "６", name: "合宿", date: "2024-06-10", detail: "ロッククライミングに挑戦しました！", image_src: ["/6_rock.png"] },
        { month: "８", name: "夏フェス", date: "2024-08-20", detail: "ドフラミンゴもノリノリ🎵", image_src: ["/8_fes.png"] },
        { month: "１０", name: "親睦を深める会", date: "2024-10-05", detail: "空を飛びました", image_src: ["/10_sky.png", "/10_sky2.png", "/10_sky3.png", "/10_sky4.png"] },
        { month: "１２", name: "忘年会", date: "2024-12-22", detail: "ゲストはフランキーでした！", image_src: ["/12_bohnenkai2.png", "/12_bohnenkai.png"] },
        { month: "２", name: "寒中水泳大会", date: "2025-2-5", detail: "気温３度でしたが、絆は温まりました！", image_src: ["/2_suiei.png"] }
    ];


    // JSXとしてのページ構成
    return (
        
        <main className="text-black w-full bg-gray-50 px-4 py-10">
            <PageTitle title="2024年度 活動記録" />
            <p className="text-center">(※以下のボタンをクリックするとその月のレポートに飛べます)</p>
            <br></br>
            <EventList_button events={events} />
            <br></br>
            <EventList_detail events={events} />
        </main>
    );
}

// タイトル用
function PageTitle({ title }) {
    return <h1 className="text-3xl font-bold text-center mb-8">
        {title}</h1>;
}


// イベントボタンリストを表示
function EventList_button({ events }) {
    return (
        <ul className="max-w-xl mx-auto space-y-4">
            {events.map((event, index) => (
                <EventButton key={index} event={event} />
            ))}
        </ul>
    );
}

// イベントボタン用
// <button> はフォーム送信や操作用のコンポーネント向け。ナビゲーションには <a> を使うのが適切
function EventButton({ event }) {
    return (
        <a
            href={"#" + event.date}
            className="group w-full relative inline-flex h-16 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-black shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
            <div className="transition-all duration-300 group-hover:scale-110 group-hover:font-bold group-hover:text-lg">
                <strong>{event.month}月</strong>: {event.name}
            </div>
        </a>
    );
}



// 単一イベント詳細のリストを表示
function EventList_detail({ events }) {
    return (
        <ul className="max-w-3xl mx-auto space-y-4">
            {events.map((event, index) => (
                <div id={event.date}>
                    <EventDetail key={index} event={event} />
                </div>
            ))}
        </ul>
    );
}

// 単一イベントの詳細用
function EventDetail({ event }) {
    return (
        <div className="p-4 border-t border-green-700">
            <h2 className="text-2xl text-center font-bold">
                {event.month}月：{event.name}
            </h2>
            <p className="text-center">( {event.date} )</p>
            <br></br>

            <div className="text-center">
                <p>{event.detail}</p>
            </div>
            <br></br>

            <div className="flex flex-wrap gap-4 justify-around">
                {
                    event.image_src.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`Event image ${idx + 1}`}
                            className="w-[200px] h-[200px] object-cover rounded"
                        />
                    ))

                }
            </div>

        </div>
    );
}

