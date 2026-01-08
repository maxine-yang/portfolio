"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData, familiarWith } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>

      {skillsData?.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-left border-b pb-2">
            {group.title}
          </h3>

          <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">

            {group.skills?.map((skill, index) => (
              <motion.li
                key={index}
                className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
              >
                {skill.name}
                <span className="ml-2 text-xs opacity-50">{skill.level}%</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6 text-left border-b pb-2">
          Familiar With
        </h3>
        <ul className="flex flex-wrap justify-center gap-2">
          {familiarWith?.map((skill, index) => (
            <motion.li
              key={index}
              className="bg-gray-100 borderBlack rounded-lg px-4 py-2 text-sm text-gray-700 dark:bg-white/5 dark:text-white/70"
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>

    </section>
  );
}