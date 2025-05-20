import React from 'react';

export default function News() {
    return (
        <main className="min-h-screen bg-lime-50 bg-[radial-gradient(circle,_#d9f99d_1px,_transparent_1px)] [background-size:20px_20px] flex items-center justify-center px-6">
            <div className="max-w-3xl w-full text-center bg-white shadow-xl rounded-3xl p-12 relative overflow-hidden">
                
                {/* 上部飾りライン */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lime-300 via-emerald-300 to-lime-300 rounded-t-3xl" />

                <h1 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4 mt-4">
                入会をご希望の方へ
                </h1>

                {/* 点線区切り */}
                <div className="w-20 h-1 border-b border-dotted border-emerald-300 mx-auto mb-6" />

                {/* イベント１ */}
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-2xl font-bold text-blue-700 border-b border-gray-300 pb-2 mb-4">サークル説明会</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">日時</h3>
                        <p className="text-gray-700">5/23(金) 21:00 ~ @zoom</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">概要</h3>
                        <p className="text-gray-700">
                        新入部員に向けて、活動内容のガイダンスや先輩部員による活動のプレゼンを行います。
                        </p>
                    </div>
                </div>

                {/* イベント２ */}
                <div className="bg-white shadow-md rounded-xl p-6 mb-6">
                    <h2 className="text-2xl font-bold text-blue-700 border-b border-gray-300 pb-2 mb-4">新歓ごはん会</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">日時</h3>
                        <p className="text-gray-700">5/30(金) 18:30 ~ @ダイニング池袋</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-2">概要</h3>
                        <p className="text-gray-700">
                        先輩部員と新入部員との交流を行います。ぜひご参加ください！（新入生は無料です）
                        </p>
                    </div>
                </div>


                {/* Googleカレンダー埋め込み */}
                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-emerald-700 mb-4">活動予定カレンダー</h2>
                        <iframe 
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Asia%2FTokyo&showPrint=0&src=Y19jNTE5NmI4NDBmOWZlMDlkOGJiZjg0NTg4NmFkY2UwYmY3Y2Q2NGViYWE3NmE3MjViNmZiM2NjYjg3MzgwZTEwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=amEuamFwYW5lc2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23616161&color=%230B8043" 
                        style={{ border: "solid 1px #777" }}  
                        width="100%" 
                        height="600" 
                        frameborder="0" 
                        scrolling="no"
                    ></iframe>
                </div>

                {/*  空白区切り */}
                <div className="w-20 h-1 mx-auto mb-6" />

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
