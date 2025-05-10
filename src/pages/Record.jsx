import { useState, useRef } from 'react';

export default function Record() {
  // 年度ごとの開閉状態
  const [openYears, setOpenYears] = useState({
    '2024': true,
    '2023': true,
    '2022': true,
    '2021': true
  });
  
  // 各年度のリファレンスを保持
  const yearRefs = {
    '2024': useRef(null),
    '2023': useRef(null),
    '2022': useRef(null),
    '2021': useRef(null)
  };

  // 年度の開閉を切り替える関数
  const toggleYear = (year) => {
    setOpenYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
    
  };

  // 2024年度のイベントデータ
  const events2024 = {
    company: [
      { month: '8月', title: 'マイクロソフト オフィス訪問' },
      { month: '9月', title: 'メルカリ オフィス訪問'},
      { month: '11月', title: '日経新聞社 オフィス訪問'},
      { month: '12月', title: 'マイクロソフト座談会' }
    ],
    workshop: [
      { month: '4月', title: 'gitゆるゆる勉強会'},
      { month: '5月', title: 'フロントエンド入門'},
      { month: '6月', title: 'バックエンド入門'},
      { month: '7月', title: 'アルゴリズム勉強会'},
      { month: '9月', title: 'バックエンドWorkshop'},
      { month: '10月', title: 'フロントエンドWorkshop'},
      { month: '11月', title: '徽音祭 LT会、展示参加' }
    ]
  };


  // 過去の年度のイベントデータ
  const pastEvents = {
    '2023': [
      { title: '・定期的にもくもく会開催' },
      { title: '・Tech Circle Expo参加' },
      { title: '・Tech Circle Expo LT大会参加' }
    ],
    '2022': [
      { title: '・WiCySに加入' },
      { title: '・Android入門' },
      { title: '・セキュリティ勉強会' }
    ],
    '2021': [
      { title: '・TEAra創立' },
      { title: '・オリエンテーション' },
      { title: '・Firebase で Web ページをホスティングするWorkshop' },
      { title: '・バックエンドWorkshop' },
      { title: '・git講座' },
      { title: '・部内LT大会' },
      { title: '・新人研修資料勉強会' }
    ]
  };

  // 歴史のタイムライン
  const historyTimeline = [
    { year: '2021', event: '@Tori先輩と@hunachi先輩によって創立' },
    { year: '2021', event: '色々なイベントを実施' },
    { year: '2022', event: 'WiCySに加入、外部とのイベントを実施' },
    { year: '2024', event: 'TheTechExpoに参加' }
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-8 px-4 pb-40">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        活動記録
      </h1>
  
      {/* 歴史のタイムライン */}
      <section className="mb-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 pb-2 text-gray-800">
          TEAraの歴史
        </h2>
        <div className="relative pl-8 border-l-2 border-teal-300">
          {historyTimeline.map((item, index) => (
            <div key={index} className="mb-6 relative">
              <div className="absolute -left-10 w-5 h-5 rounded-full bg-teal-500"></div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="text-teal-600 font-semibold">{item.year}</span>
                <p className="text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  
      {/* 2024年度 */}
      <section className="mb-4 max-w-3xl mx-auto" ref={yearRefs['2024']}>
        <div
          className="flex justify-between items-center bg-gray-100 p-3 rounded cursor-pointer hover:bg-gray-200"
          onClick={() => toggleYear('2024')}
        >
          <h2 className="text-xl font-semibold text-gray-800">2024年度</h2>
          <span className="text-teal-600 text-2xl">
            {openYears['2024'] ? '−' : '+'}
          </span>
        </div>
  
        {openYears['2024'] && (
          <div className="bg-white p-5 rounded-b-xl shadow-sm border border-t-0 border-gray-200">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-teal-700 mb-3 border-b pb-2">
                企業関連
              </h3>
              <ul className="space-y-3">
                {events2024.company.map((event, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-600 font-medium min-w-12">{event.month}</span>
                    <div className="ml-2">
                      <div className="text-gray-800">{event.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            <div>
              <h3 className="text-lg font-semibold text-teal-700 mb-3 border-b pb-2">
                Workshop・勉強会
              </h3>
              <ul className="space-y-3">
                {events2024.workshop.map((event, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-600 font-medium min-w-12">{event.month}</span>
                    <div className="ml-2">
                      <div className="text-gray-800">{event.title}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
  
      {/* 過去の年度（折りたたみ式） */}
      {Object.keys(pastEvents)
        .sort((a, b) => parseInt(b) - parseInt(a))
        .map((year) => (
          <section key={year} className="mb-4 max-w-3xl mx-auto" ref={yearRefs[year]}>
            <div
              className="flex justify-between items-center bg-gray-100 p-3 rounded shadow-sm border border-gray-200 cursor-pointer hover:bg-gray-200"
              onClick={() => toggleYear(year)}
            >
              <h2 className="text-xl font-semibold text-gray-800">{year}年度</h2>
              <span className="text-teal-600 text-2xl">{openYears[year] ? '−' : '+'}</span>
            </div>
  
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openYears[year] ? 'max-h-[1000px]' : 'max-h-0'
              }`}
            >
              <div className="bg-white p-5 rounded-b-xl shadow-sm border border-t-0 border-gray-200">
                <ul className="space-y-3">
                  {pastEvents[year].map((event, index) => (
                    <li key={index} className="flex items-start">
                      <div className="ml-2 text-gray-800">{event.title}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
    </div>
  </div>
  );
}