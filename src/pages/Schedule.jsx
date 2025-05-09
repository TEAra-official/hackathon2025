import { Link } from "react-router-dom";

export default function Schedule() {
    // イベントデータ
    const events = [
        { month: "４", name: "新歓", date: "2025-04-23", detail: "池袋の居酒屋にて開催します！詳細はフォームの回答者に追って連絡します！", image_src: [], invite: [true, "2025/4/16"] },
        { month: "６", name: "合宿", date: "未定", detail: "", image_src: [], invite: [true, "2025/5/31"] },
        { month: "８", name: "夏フェス", date: "未定", detail: "", image_src: [], invite: [false] },
        { month: "１０", name: "合宿２（仮）", date: "未定", detail: "", image_src: [], invite: [false] },
        { month: "１２", name: "忘年会", date: "未定", detail: "", image_src: [], invite: [false] },
    ];

    // JSXとしてのページ構成
    return (
        <main className="text-black w-full bg-gray-50 px-4 py-10">
            <PageTitle title="2025年度 年間スケジュール" />
            <Invite events={events} />
            <br></br>
            <p className="text-center">(※以下のボタンをクリックするとその月のイベント詳細に飛べます)</p>
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

// 募集中企画用
function Invite({ events }) {
    return (
        <ul className="bg-white px-8 py-4">
            <div className="font-bold text-2xl text-center mb-3">参加者募集中の企画↓</div>
            <div className="text-center mb-2">Googleフォーム回答締切：</div>
            {events.map((event, idx) => {
                if (event.invite[0] === true) {
                    return (
                        <ul className="">
                            <li key={idx} className="text-center">
                                <a
                                    href={"https://example.com/googleform/" + idx} // 実際のフォームURLに置き換える
                                    className="text-blue-600 underline hover:text-blue-800"
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {event.name}：　{event.invite[1]}まで
                                </a>
                            </li>
                        </ul>
                    );
                } else {
                    return null;
                }
            })}
        </ul>
    );
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
            {events.map((event, index) => {
                if (event.month === "６") {
                    return (
                        <div id={event.date}>
                            <EventDetail_private key={index} event={event} />
                        </div>
                    );
                } else {
                    return (
                        <div id={event.date}>
                            <EventDetail key={index} event={event} />
                        </div>
                    );
                }
            })}
        </ul>
    );
}

// 単一イベントの詳細用_公開
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

function EventDetail_private({ event }) {
    return (
        <div className="p-4 border-t border-green-700">
            <h2 className="text-2xl text-center font-bold">
                {event.month}月：{event.name}
            </h2>
            <p className="text-center">( {event.date} )</p>
            <br></br>

            <p className="text-center">
                <Link to="/records/password" className="border-b border-blue-700">こちらのページ</Link>は関係者のみに公開されます。
            </p>

        </div>
    );
}