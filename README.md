# TEAra Homepage

お茶の水女子大学の学生向けコミュニティ **TEAra** のWebサイトです 🌿
React + Vite + Tailwind CSS を使って作られています。

---

## 📌 このリポジトリについて

- サークル紹介やイベント情報、新歓の告知などを発信するWebサイトです
- 初心者でも読みやすく、改良・参加しやすいコード構成を意識しています
- **2025春のハッカソン**向けに作成されました！
- teamAのリポジトリです！です！

---

## 🔧 使用技術

| 技術       | バージョン例 | 説明                        |
|------------|---------------|-----------------------------|
| React      | 18.x          | UIライブラリ                |
| Vite       | 4.x           | 開発用ビルドツール          |
| TailwindCSS| 3.x or 4.x    | ユーティリティCSSフレームワーク |
| React Router | 6.x         | ページ遷移用ライブラリ       |

---

## 📁 ディレクトリ構成
```
my-teara-site/
├── public/
│   ├── Hack.png             ← 背景画像（ハッカソンバナーなど）
│   └── teara.png            ← ロゴ画像
│
├── src/
│   ├── assets/              ← 画像・アイコンなど（importして使いたい時に）
│   │   └── (必要があれば移動可)
│
│   ├── components/          ← 共通UIパーツ
│   │   └── Navbar.jsx       ← ナビゲーションバー（現在のナビ部分）
│
│   ├── pages/               ← 各ルートに対応したページ
│   │   ├── Home.jsx         ← トップページ
│   │   ├── Schedule.jsx     ← スケジュールページ
│   │   ├── Members.jsx      ← メンバーページ
│   │   ├── News.jsx         ← 新歓情報ページ
│   │   └── Links.jsx        ← リンク集ページ
│
│   ├── App.jsx              ← ルーティング設定
│   ├── main.jsx             ← エントリーポイント
│   └── index.css            ← Tailwind & グローバルCSS
│
├── tailwind.config.js       ← Tailwind のカスタム設定
├── postcss.config.js        ← PostCSS 設定
├── index.html               ← Vite用エントリHTML
├── package.json             ← 依存関係など
└── vite.config.js           ← Vite の設定ファイル
```
---

## 🚀 開発環境の立ち上げ方

### 1. このリポジトリをクローン

```bash
git clone https://github.com/Yurin/TEAra_homepage.git
cd TEAra_homepage
```
### 2. パッケージをインストール
```bash
npm install
```
### 3. 開発サーバーを起動
```bash
npm run dev
```
ブラウザで http://localhost:5173 にアクセスして確認できます！


📄 ライセンス
MIT License

💌 作者
👩‍💻 ゆり（@Yurin）

🌱 お茶大 TEAra 運営
