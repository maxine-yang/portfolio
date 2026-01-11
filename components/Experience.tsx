/**
 * Author: maxine yang
 * Copyright 2026 Maxine yang (Updated version)
 */
"use client"

import React from "react"
import {
  experiencesData,
  experiencesDataZn,
  headerLanguageMap,
} from "@/lib/data"
import SectionHeading from "./SectionHeading"
import { motion } from "framer-motion"
import { ExperienceLabel } from "./ExperienceLabel"
import { useLocale } from "next-intl"

export default function Experience({ isMobile }: { isMobile: boolean }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  }

  const activeLocale = useLocale()

  const experienceDataShown =
    activeLocale == "jp" ? experiencesDataZn : experiencesData

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "education":
        return {
          bg: "bg-blue-50 dark:bg-blue-950/20",
          iconBg: "bg-blue-100 dark:bg-blue-900/30",
        }
      case "work":
        return {
          bg: "bg-blue-100 dark:bg-blue-950/30",
          iconBg: "bg-blue-200 dark:bg-blue-900/40",
        }
      case "project":
        return {
          bg: "bg-blue-200 dark:bg-blue-950/40",
          iconBg: "bg-blue-300 dark:bg-blue-900/50",
        }
      default:
        return {
          bg: "bg-white dark:bg-white/10",
          iconBg: "bg-gray-100 dark:bg-gray-800",
        }
    }
  }

  return (
    <section className="relative" style={{ marginBottom: 'calc(2rem + 0.5cm)' }}>
      <ExperienceLabel />
      <SectionHeading>
        {" "}
        {activeLocale === "jp"
          ? headerLanguageMap["Experiences"]
          : "My Experiences"}
      </SectionHeading>
      <div className="relative max-w-5xl mx-auto">
        {/* 時間軸線 */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block" style={{ height: 'calc(100% - 4rem - 0.5cm)' }}></div>
        
        {/* 卡片容器 */}
        <div className="space-y-4">
          {experienceDataShown.map((item, index) => {
            const styles = getTypeStyles(item.type || "")
            const isEven = index % 2 === 0
            const isLeft = isEven
            
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={variants}
                className={`relative flex items-center gap-4 md:gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 左側卡片 */}
                <div className={`flex-1 ${isLeft ? "md:text-right md:pr-6" : "md:text-left md:pl-6"} md:w-6/12`}>
                  <motion.div
                    className={`${styles.bg} border border-black/5 rounded-lg p-6 hover:shadow-lg transition-shadow`}
                  >
                    <div className={`flex items-start gap-4 mb-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-full ${styles.iconBg} flex items-center justify-center flex-shrink-0 text-xl`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold capitalize text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.location}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{item.date}</p>
                      </div>
                    </div>
                    <p className={`text-sm text-gray-700 dark:text-white/75 leading-relaxed ${isLeft ? "md:text-left" : ""}`}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* 時間軸上的點 */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 flex-shrink-0 z-10">
                  <div className={`w-4 h-4 rounded-full ${styles.iconBg} border-2 border-white dark:border-gray-800`}></div>
                </div>
                
                {/* 右側空白（用於對齊） */}
                <div className="hidden md:block flex-1 md:w-6/12"></div>
              </motion.div>
            )
          })}
        </div>
        
        {/* To be continued 提示 */}
        <div className="relative flex flex-col items-center justify-center" style={{ marginTop: 'calc(4rem + 1.5cm)' }}>
          <div className="flex items-center gap-3">
            <div className="hidden md:block w-12 h-px bg-gradient-to-r from-transparent via-gray-300 to-gray-300 dark:via-gray-600 dark:to-gray-600"></div>
            <p className="text-sm text-gray-400 dark:text-gray-500 font-light tracking-wider uppercase">
              {activeLocale === "jp" ? "続く" : "To be continued"}...
            </p>
            <div className="hidden md:block w-12 h-px bg-gradient-to-l from-transparent via-gray-300 to-gray-300 dark:via-gray-600 dark:to-gray-600"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
