/**
 * Author: maxine yang
 * Copyright 2026 Maxine yang (Updated version)
 */
import React from "react";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap, LuSchool, LuBriefcase, LuGlobe, LuShoppingBag, LuHouse, LuPencil, LuLayoutDashboard, LuBookOpen, LuClipboardList } from "react-icons/lu";
import knowledgeSharingPlatformImage from '@/public/knowledge-sharing-platform.png';
import breadditImage from "@/public/breaddit.png";
import gameHubImage from "@/public/game-hub.png";
import typingSpeedImage from "@/public/typing-speed.png";
import visualizationImage from "@/public/d3.png";
import rentalBackendSwaggerImage from "@/public/rentalBackendSwaggerImage.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experiences",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;


export const headerLanguageMap = {
    Home: 'ホーム',
    About: '自己紹介',
    Projects: '作品集',
    Skills: 'スキル',
    Experiences: '経歴',
}

export const experiencesData = [
    {
        type: "education",
        title: "Tianjin Normal University",
        location: "Tianjin, China",
        date: "Sep 2020 - Jun 2024",
        icon: React.createElement(LuGraduationCap),
        description: "Bachelor's Degree in Software Engineering. Self-studied and passed the Japanese Language Proficiency Test (JLPT) N2 during university studies. Awarded Third Prize in the Team Competition of Tianjin University Student Network Attack and Defense Competition.",
    },
    {
        type: "education",
        title: "Tokyo Sakura Gakuin",
        location: "Tokyo, Japan",
        date: "Apr 2025 - Jul 2025",
        icon: React.createElement(LuGraduationCap),
        description: "Advanced Japanese Language Program focused on cultural integration. Passed the Japanese Language Proficiency Test (JLPT) N1 during the program.",
    },
    {
        type: "work",
        title: "Intern (Business Support)",
        location: "Tianjin, China",
        date: "Oct 2023 - Apr 2024",
        icon: React.createElement(LuBriefcase),
        description: "Assisted in drafting Chinese user manuals and managing data entry for ERP systems. Performed functional testing (Manual Testing) to identify and report system bugs during the development phase.",
    },
    {
        type: "work",
        title: "Overseas Work Experience (J-1 Program)",
        location: "Minnesota, USA",
        date: "Jun 2024 - Sep 2024",
        icon: React.createElement(LuBriefcase),
        description: "Engaged in a fast-paced service environment as a server & bartender. Developed high-level English communication skills and cross-cultural adaptability in an international team.",
    },
    {
        type: "work",
        title: "Sales & Retail Specialist (Dispatch)",
        location: "Chiba/Tokyo, Japan",
        date: "Aug 2025 - Present",
        icon: React.createElement(LuBriefcase),
        description: "Operating as a retail specialist for Michael Kors. Mastering Japanese business etiquette and high-end customer service (Omotenashi) while maintaining JLPT N1 proficiency.",
    },
    {
        type: "project",
        title: "Real Estate System for Foreigners",
        location: "GitHub / AWS",
        date: "2025",
        icon: React.createElement(LuHouse),
        description: "A full-stack rental platform built with Java (Spring Boot) and MySQL. Implemented JWT authentication and Docker deployment to solve housing pain points for foreigners in Japan.",
    },
    {
        type: "project",
        title: "Personal Blog Platform",
        location: "GitHub / Local",
        date: "2026",
        icon: React.createElement(LuHouse),
        description: "Full-stack blog system built with Spring Boot 3.2 and Java 17. Implemented GitHub-style calendar heatmap visualization, minimalist UI with Tailwind CSS, and Markdown editor for content management.",
    },
    {
        type: "project",
        title: "Personal Portfolio Website",
        location: "Vercel",
        date: "2026",
        icon: React.createElement(LuHouse),
        description: "A responsive, multilingual portfolio showcasing my journey from a consultant/server to a software engineer, highlighting JLPT N1 and global work experience.",
    },
]

export const experiencesDataZn = [
    {
        type: "education",
        title: "天津師範大学",
        location: "中国・天津",
        date: "2020年9月 - 2024年6月",
        icon: React.createElement(LuGraduationCap),
        description: "ソフトウェア工学専攻で学士号を取得。在学中に独学で日本語能力試験（JLPT）N2に合格。天津市大学生ネットワーク攻防大会の団体戦で三等賞を受賞。",
    },
    {
        type: "education",
        title: "東京さくら学院",
        location: "日本・東京",
        date: "2025年4月 - 2025年7月",
        icon: React.createElement(LuGraduationCap),
        description: "文化統合に焦点を当てた上級日本語プログラム。プログラム期間中に日本語能力試験（JLPT）N1に合格。",
    },
    {
        type: "work",
        title: "インターン（ビジネスサポート）",
        location: "中国・天津",
        date: "2023年10月 - 2024年4月",
        icon: React.createElement(LuBriefcase),
        description: "中国語によるシステム操作マニュアルの作成補助、およびデータ入力業務を担当。また、テスターとして開発中のシステムの動作確認を行い、不具合の報告業務に従事。",
    },
    {
        type: "work",
        title: "海外就労経験（J-1プログラム）",
        location: "アメリカ・ミネソタ州",
        date: "2024年6月 - 2024年9月",
        icon: React.createElement(LuBriefcase),
        description: "サーバー・バーテンダーとして高速なサービス環境で従事。国際的なチームで高度な英語コミュニケーションスキルと異文化適応力を習得。",
    },
    {
        type: "work",
        title: "セールス・小売スペシャリスト（派遣）",
        location: "日本・千葉/東京",
        date: "2025年8月 - 現在",
        icon: React.createElement(LuBriefcase),
        description: "マイケル・コースの小売スペシャリストとして活動。JLPT N1レベルの日本語力を維持しながら、日本のビジネスマナーと高級顧客サービス（おもてなし）を習得中。",
    },
    {
        type: "project",
        title: "外国人向け不動産システム",
        location: "GitHub / AWS",
        date: "2025",
        icon: React.createElement(LuHouse),
        description: "Java（Spring Boot）とMySQLで構築したフルスタック賃貸プラットフォーム。JWT認証とDockerデプロイメントを実装し、日本在住外国人の住宅問題を解決。",
    },
    {
        type: "project",
        title: "個人ブログプラットフォーム",
        location: "GitHub / Local",
        date: "2026",
        icon: React.createElement(LuHouse),
        description: "Spring Boot 3.2 と Java 17 で構築したフルスタックブログシステム。GitHubスタイルのカレンダーヒートマップ可視化、Tailwind CSS によるミニマリストUI、コンテンツ管理用のMarkdownエディタを実装。",
    },
    {
        type: "project",
        title: "個人ポートフォリオウェブサイト",
        location: "Vercel",
        date: "2026",
        icon: React.createElement(LuHouse),
        description: "コンサルタント/サーバーからソフトウェアエンジニアへの転身を紹介するレスポンシブで多言語対応のポートフォリオ。JLPT N1とグローバルな就労経験を強調。",
    },
]


export type ProjectTags = typeof projectsData[number]["tags"];

export const projectsData = [
    {
        title: "Foreign-Friendly Rental Management System (Backend)",
        title_jp: "外国人向け賃貸管理システム（バックエンド）",
        description:
          "A backend system for managing apartment rentals, lease contracts, and tenant information, designed with scalability and real-world business workflows in mind.",
        desc_jp:
          "物件管理・賃貸契約・入居者情報などを一元管理する賃貸管理システムのバックエンドです。実務を想定した業務フローと拡張性を重視して設計されています。",
        tags: [
          "Java",
          "Spring Boot",
          "MyBatis-Plus",
          "REST API",
          "MySQL",
          "Redis",
          "Swagger / Knife4j"
        ],
        imageUrl: rentalBackendSwaggerImage,
        projectUrl: "https://github.com/maxine-yang/foreign-friendly-rental-backend",
        demoUrl: ""
      },
    {
        title: "Typing Speed",
        title_jp: '打字测验',
        description:
            "A comprehensive typing speed test application that tracks your overall typing performance. It provides detailed statistics, including total words typed, errors made, and accuracy rate, allowing users to monitor their progress and improve their typing efficiency.",
        desc_jp: "一个打字速度测试应用。敲击即开始打字，计时结束后将显示总敲击单词数、正确率、错误率等。该应用UI简洁现代，支持Dark Mode切换。",
        tags: ["React", "TypeScript", "Tailwind", 'Framer Motion'],
        imageUrl: typingSpeedImage,
        projectUrl: 'https://github.com/maxine-yang/typing-speed-game',
        demoUrl: 'https://joy-typing-speed.netlify.app/',
    },
    {
        title: "Breddit",
        title_jp: "社交新闻论坛",
        description:
            `A modern full-stack Reddit clone with infinite scrolling, secure NextAuth Google authentication, and a custom feed for authenticated users. It uses Upstash Redis for caching and React-Query for efficient, responsive data fetching with optimistic updates.
            `,
        desc_jp: "一个现代且简洁的Reddit克隆项目，使用Next.js、TypeScript和Tailwind CSS构建。项目功能包括无限滚动动态加载帖子、NextAuth与Google认证、为认证用户提供自定义Feed、高级缓存、乐观更新、React-Query数据获取、美观的帖子编辑器、图片上传和链接预览、以及完整的评论功能。",
        tags: ["Next.js", "TypeScript", "Upstash", "React-Query", "TailwindCSS"],
        imageUrl: breadditImage,
        projectUrl: 'https://github.com/maxine-yang/Breddit',
        demoUrl: 'https://joy-breddit.vercel.app/',
    },
    {
        title: "Global Wealth Spectrum Visualisation",
        title_jp: '世界财富可视化光谱',
        description: "This interactive visualization explores how tax policies influence wealth, how industries impact fortunes differently by gender, and how these effects vary across continents. Dive into our data to uncover the complex layers of global wealth.",
        desc_jp: "交互式可视化图表探讨了税收政策如何影响财富、不同行业对不同性别的财富的影响以及这些影响在各大洲之间的差异。深入了解我们的数据，揭示全球财富的复杂层次。",
        tags: ["d3.js", "HTML", "CSS", "Vanilla JavaScript"],
        imageUrl: visualizationImage,
        projectUrl: 'https://github.com/maxine-yang/d3-evolution-visualisation',
        demoUrl: 'https://global-wealth-spectrum.netlify.app/',
    },


]


export interface Skill {
  name: string;
  level: number; 
}

export interface SkillGroup {
  title: string;
  skills: Skill[]; 
}

 export const familiarWith = [
  "Node.js",
  "Express",
  "Git / GitHub",
  "TypeScript",
  "React",
  "Next.js",
  "MongoDB"
];

export const skillsData: SkillGroup[] = [

    {
    title: "Backend & Tools",
    skills: [
      { name: "Java / Spring Boot", level: 75 },
      { name: "SSM", level: 75 },
      { name: "MySQL", level: 70 },
      { name: "Git / Jenkins", level: 65 },
      { name: "RESTful API Design", level: 65 }
    ],
  },


  {
    title: "Frontend",
    skills: [
      { name: "HTML/CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "Vue 3", level: 80 },
      { name: "Tailwind CSS", level: 70 },
    ]
  },

 

  
  {
    title: "Languages",
    skills: [
      { name: "Mandarin (Native)", level: 100 },
      { name: "English (Professional)", level: 85 },
      { name: "Japanese (JLPT N1)", level: 75 },
    ],
  },
];