# Personal Portfolio Website

[English](#english) | [日本語](#日本語)

---
<a id="english"></a>
## [Live Demo](https://maxine-portfolio.vercel.app)

A modern, responsive personal portfolio website built with Next.js 14, featuring multilingual support (English/Japanese), dark mode, and smooth animations.

## 🌟 Features

- **Multilingual Support**: Seamlessly switch between English and Japanese
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Project Showcase**: Display featured projects with descriptions, tags, and links
- **Skills Section**: Interactive skills visualization with proficiency levels
- **Experience Timeline**: Vertical timeline showcasing professional journey
- **Sound Effects**: Interactive sound feedback for enhanced UX

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: React Icons
- **Timeline**: react-vertical-timeline-component
- **Type Animation**: react-type-animation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── layout.tsx      # Root layout
│       ├── page.tsx        # Home page
│       └── globals.css     # Global styles
├── components/             # React components
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Experience timeline
│   ├── Intro.tsx          # Introduction section
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   └── ...
├── lib/
│   ├── data.ts            # Project data and content
│   ├── hooks.ts           # Custom React hooks
│   └── utils.ts           # Utility functions
├── messages/              # Translation files
│   ├── en.json            # English translations
│   └── jp.json            # Japanese translations
└── public/                # Static assets
```

## 🎨 Customization

### Adding Projects

Edit `lib/data.ts` to add your projects:

```typescript
export const projectsData = [
  {
    title: "Your Project Title",
    title_jp: "プロジェクトタイトル",
    description: "Project description in English",
    desc_jp: "日本語でのプロジェクト説明",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: yourImage,
    projectUrl: "https://github.com/your-username/project",
    demoUrl: "https://your-demo-url.com"
  }
]
```

### Updating Skills

Modify the `skillsData` array in `lib/data.ts` to update your skills and proficiency levels.

### Changing Colors

Update the color scheme in `tailwind.config.ts` or modify the className values in components.

## 🌐 Internationalization

The website supports multiple languages through `next-intl`. Translation files are located in the `messages/` directory. To add a new language:

1. Create a new JSON file in `messages/` (e.g., `zh.json`)
2. Update the locale configuration in `middleware.ts`
3. Add the new locale to your routing structure

## 📝 License

Copyright 2026 Maxine yang (Updated version). This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Author: maxine yang**

- GitHub: [@maxine-yang](https://github.com/maxine-yang)
- Portfolio: https://maxine-portfolio.vercel.app

---

---

# 個人ポートフォリオウェブサイト

Next.js 14で構築されたモダンでレスポンシブな個人ポートフォリオウェブサイト。多言語対応（英語/日本語）、ダークモード、スムーズなアニメーションを特徴とします。

## 🌟 機能

- **多言語対応**: 英語と日本語をシームレスに切り替え可能
- **ダークモード**: ライト/ダークテーマの切り替え
- **レスポンシブデザイン**: あらゆるデバイスサイズに最適化
- **スムーズなアニメーション**: Framer Motionによる魅力的なユーザー体験
- **プロジェクト紹介**: 説明、タグ、リンク付きの注目プロジェクトを表示
- **スキルセクション**: 習熟度レベル付きのインタラクティブなスキル可視化
- **経験タイムライン**: キャリアの歩みを表示する縦型タイムライン
- **サウンドエフェクト**: UX向上のためのインタラクティブな音響フィードバック

## 🛠️ 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **国際化**: next-intl
- **アイコン**: React Icons
- **タイムライン**: react-vertical-timeline-component
- **タイプアニメーション**: react-type-animation

## 📦 インストール

1. リポジトリをクローン:
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. 依存関係をインストール:
```bash
npm install
# または
yarn install
```

3. 開発サーバーを起動:
```bash
npm run dev
# または
yarn dev
```

4. ブラウザで [http://localhost:3000](http://localhost:3000) を開く。

## 🚀 本番環境用ビルド

```bash
npm run build
npm start
```

## 📁 プロジェクト構造

```
├── app/
│   └── [locale]/          # 国際化されたルート
│       ├── layout.tsx      # ルートレイアウト
│       ├── page.tsx        # ホームページ
│       └── globals.css     # グローバルスタイル
├── components/             # Reactコンポーネント
│   ├── About.tsx          # 自己紹介セクション
│   ├── Experience.tsx     # 経験タイムライン
│   ├── Intro.tsx          # イントロセクション
│   ├── Projects.tsx       # プロジェクト紹介
│   ├── Skills.tsx         # スキルセクション
│   └── ...
├── lib/
│   ├── data.ts            # プロジェクトデータとコンテンツ
│   ├── hooks.ts           # カスタムReactフック
│   └── utils.ts           # ユーティリティ関数
├── messages/              # 翻訳ファイル
│   ├── en.json            # 英語翻訳
│   └── jp.json            # 日本語翻訳
└── public/                # 静的アセット
```

## 🎨 カスタマイズ

### プロジェクトの追加

`lib/data.ts`を編集してプロジェクトを追加:

```typescript
export const projectsData = [
  {
    title: "プロジェクトタイトル",
    title_jp: "プロジェクトタイトル",
    description: "英語でのプロジェクト説明",
    desc_jp: "日本語でのプロジェクト説明",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: yourImage,
    projectUrl: "https://github.com/your-username/project",
    demoUrl: "https://your-demo-url.com"
  }
]
```

### スキルの更新

`lib/data.ts`の`skillsData`配列を変更してスキルと習熟度レベルを更新。

### 色の変更

`tailwind.config.ts`でカラースキームを更新するか、コンポーネント内のclassName値を変更。

## 🌐 国際化

このウェブサイトは`next-intl`を通じて複数言語をサポートしています。翻訳ファイルは`messages/`ディレクトリにあります。新しい言語を追加するには:

1. `messages/`に新しいJSONファイルを作成（例: `zh.json`）
2. `middleware.ts`でロケール設定を更新
3. ルーティング構造に新しいロケールを追加

## 📝 ライセンス

このプロジェクトはオープンソースで、[MIT License](LICENSE)の下で利用可能です。

## 👤 作成者

**Author: maxine yang**

- GitHub: https://github.com/maxine-yang
- ポートフォリオ: https://maxine-portfolio.vercel.app
