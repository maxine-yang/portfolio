"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      {activeLocale == "jp" ? (
        // <p>{t("desc")}</p> //这样一段话没法分段
        <>
          <>
            <p className="mb-3">
              私を三つの言葉で表すとすれば、
              <span className="font-medium italic">フルスタックエンジニア、多言語使用者、そして創作を原動力とする人間</span>{" "}です。
            </p>

            <p className="mb-3">
              私は
              <a
                href="https://zh.wikipedia.org/wiki/天津师范大学"
                target="_blank"
                rel="noopener noreferrer"
                className="underline italic"
              >
                {" "}{" "}天津師範大学{" "}{" "}
              </a>
              でソフトウェア工学を専攻し、主に自己学習と個人開発を通じて経験を積んできました。私にとってプログラミングは単なる機能実装の手段ではなく、
              <span className="font-medium italic">論理性・構造・創造性を兼ね備えた表現の一つ</span>{" "}です。正確さが求められる一方で、美しさも追求できる点に強い魅力を感じています。
            </p>

            <p className="mb-3">
              最初の完成したプロジェクトは、好きな作品のためにファンサイトを制作したことでした。当初はフロントエンド中心でしたが、機能拡張に伴いバックエンド機能も段階的に実装しました。この経験を通して、
             抽象的なアイデアを実装可能な機能へ分解する力や、試行錯誤を重ねながら使いやすさを改善していく姿勢を身につけました。
            </p>

            <p className="mb-3">
              また、
              <span className="font-medium italic">中国語・英語・日本語の三言語</span>{" "}で業務および創作が可能です。米国での有給インターンシップを経て、
              <span className="font-medium italic">日本語能力試験N1を独学で取得</span>{" "}し、来日しました。プログラミングと言語学習には共通点があると考えており、いずれもルールを理解し、構造を組み立て、複雑な内容を他者に伝える営みだと捉えています。
            </p>

            <p>
              プログラミング以外では、文章執筆やイラスト制作といった個人創作活動も継続しています。
              <span className="font-medium italic">信頼性と創造性の両立できるエンジニア</span>{" "}を目指し、長期的な積み重ねを大切にしています。
              <br />
              <span className="font-medium italic">&ldquo;Every master was once a beginner who refused to quit.&rdquo;</span>
            </p>
          </>



        </>
      ) : (
        <>
          <>
            <p className="mb-3">
              If I were to describe myself in three words, they would be:
              <span className="font-medium italic"> full-stack developer, multilingual learner, and creator.</span>
            </p>

            <p className="mb-3">
              My journey into Software Engineering at
              <a
                href="https://zh.wikipedia.org/wiki/天津师范大学"
                target="_blank"
                rel="noopener noreferrer"
                className="underline italic"
              >
                {" "}{" "}Tianjin Normal University{" "}{" "}
              </a>
              began with a rebellious spark—I wanted to
              <span className="font-medium italic"> break the social prejudice</span> that &ldquo;women cannot excel in engineering.&rdquo;
              However, once I truly entered the world of programming, I discovered a profound sense of belonging. To me, code is not just a tool; it is the perfect balance between
              <span className="font-medium italic"> rational logic and emotional expression.</span>
            </p>

            <p className="mb-3">
              My first major project was a fan website for a work I deeply admire. Building a dedicated digital space for beloved characters taught me that front-end development is more than writing code—it is an
              <span className="font-medium italic"> act of digital artistry.</span> To enable community interaction, I added back-end modules and integrated interactive features. Watching this project grow from a simple idea into a functional system felt like
              <span className="font-medium italic"> nurturing a new life.</span> It is a work of passion, carrying my love for storytelling into the digital realm.
            </p>

            <p className="mb-3">
              Beyond coding, I am a polyglot and a storyteller. I work fluently in
              <span className="font-medium italic"> Chinese, English, and Japanese.</span> My pursuit of language led me to a paid internship in the United States and enabled me to pass the
              <span className="font-medium italic"> JLPT N1 through self-study</span> before moving to Japan to start my professional career. Whether I am writing novels, drawing fan art, or architecting a database, I am always driven by the same desire: to create.
            </p>

            <p>
              Although I am still at the beginning of my professional path, I am committed to continuous growth.
              <span className="font-medium italic">
                &ldquo;Every master was once a beginner who refused to quit.&rdquo;
              </span>
              {" "}I strive to be an engineer who balances reliability with creative soul.

            </p>
          </>
        </>
      )}
    </motion.section>
  )
}
