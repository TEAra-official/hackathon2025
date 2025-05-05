import { useState } from 'react';
import git from '../assets/schedule/git.png';
import hackathon from '../assets/schedule/Hack2.png';
import frontMay from '../assets/schedule/frontmay.jpg';
import backendJune from '../assets/schedule/backendjune.jpg';
import algorithm from '../assets/schedule/algorithm.png';
import microsoft from '../assets/schedule/Microsoft.jpg';
import mercari from '../assets/schedule/mercari.jpg';
import backend from '../assets/schedule/backend.jpg';
import frontOct from '../assets/schedule/frontoct.jpg';
import nikkei from '../assets/schedule/nikkei2.png';
import kiinsai from '../assets/schedule/kiinsai3.png';
import microsoftZa from '../assets/schedule/microsoftza.jpg';

function EventCard({ event }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 max-w-sm w-full mx-auto flex flex-col justify-between h-full">
      <div className="relative">
        {/* イベント画像 */}
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-36 object-cover"
        />
        {/* 月のラベル */}
        <div className="absolute top-0 left-0 bg-teal-500 text-white px-3 py-1 m-2 rounded-md text-sm">
          {event.month}
        </div>
      </div>
      <div className="p-4">
        {/* イベントタイトル */}
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
          {event.title}
        </h3>
        {/* イベントの説明 */}
        <p className="text-sm text-gray-600 line-clamp-3 text-center">
          {event.description}
        </p>
        {/* カテゴリーラベル */}
        <div className="mt-4 text-center">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
              event.category === 'workshop'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {/* カテゴリー名を表示 */}
            {event.category === 'workshop' ? 'Workshop・勉強会' : 'イベント'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Schedule() {
  // イベントデータ
  const events = [
    {
      id: 1,
      month: '4月',
      title: 'Git入門Workshop',
      description: 'ゆるゆるGit勉強会！バージョン管理システムのGitについて学びます。',
      image: git, // オブジェクトから参照
      category: 'workshop',
    },
    {
      id: 2,
      month: '5月',
      title: 'TEAra Hackathon',
      description:'TEAraのホームページを作ろう！ホームページ制作が初めての人も参加できる、2週間で行うハッカソンです',
      image: hackathon,
      category: 'event',
    },
    {
      id: 3,
      month: '5月',
      title: 'フロントエンド入門Workshop',
      description: '自分のホームページを作ろう！HTML、CSS、JavaScriptの基礎を学びます。',
      image: frontMay, // オブジェクトから参照
      category: 'workshop',
    },
    {
      id: 4,
      month: '6月',
      title: 'バックエンド入門Workshop',
      description: 'FlaskでHTTP通信とSQLite連携によるWeb開発を実践します',
      image: backendJune,
      category: 'workshop'
    },
    {
      id: 5,
      month: '7月',
      title: 'アルゴリズム勉強会',
      description: 'アルゴリズムとデータ構造について学びます。コーディングテスト対策についても取り上げます',
      image: algorithm,
      category: 'workshop'
    },
    {
      id: 6,
      month: '8月',
      title: 'Microsoftオフィスツアー',
      description: 'Microsoft社のオフィスを見学し、実際の働く環境や企業文化を体感します',
      image: microsoft,
      category: 'event'
    },
    {
      id: 7,
      month: '9月',
      title: 'メルカリオフィスツアー',
      description: 'メルカリ社のオフィスを訪問し、お茶大OGを含む社員の方々と交流します',
      image: mercari,
      category: 'event'
    },
    {
      id: 8,
      month: '9月',
      title: 'バックエンドWorkshop',
      description: 'プログラムはどう動くのか？コンピュータの動作原理を学びます',
      image: backend,
      category: 'workshop'
    },
    {
      id: 9,
      month: '10月',
      title: 'TypeScript, ReactのWorkshop',
      description: 'TypeScriptとReactでモダンなフロントエンド開発を体験します',
      image: frontOct,
      category: 'workshop'
    },
    {
      id: 10,
      month: '11月',
      title: '日経新聞社オフィスツアー',
      description: '日経新聞社のオフィスを訪問し、働き方や仕事内容についてお話をお聞きします',
      image: nikkei,
      category: 'event'
    },
    {
      id: 11,
      month: '11月',
      title: '徽音祭',
      description: 'ライトニングトーク会を行ったり展示をしたりします',
      image: kiinsai,
      category: 'event'
    },
    {
      id: 12,
      month: '12月',
      title: 'Microsoft 座談会',
      description: '現役社員のお茶大OGの方からMicrosoftや仕事について、お茶大の一室で雑談を交えながらお話を聞きます',
      image: microsoftZa,
      category: 'event'
    }
  ];

  // カテゴリーフィルター用の状態
  const [selectedCategory, setSelectedCategory] = useState('all');

  // フィルタリングされたイベント
  const filteredEvents =
    selectedCategory === 'all'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  // カテゴリー一覧
  const categories = [
    { id: 'all', name: 'すべて' },
    { id: 'workshop', name: 'Workshop・勉強会' },
    { id: 'event', name: 'イベント' },
  ];

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-8 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* スケジュールの見出し */}
        <h1 className="text-3xl font-bold text-center mb-8">
          TEAra 年間スケジュール
        </h1>

        {/* カテゴリ別のフィルター */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCategory === category.id
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* イベントカードグリッド - レスポンシブ対応 */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}