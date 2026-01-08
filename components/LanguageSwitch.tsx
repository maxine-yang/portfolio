"use client"

import { IoLanguageOutline } from "react-icons/io5"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export default function LanguageSwitch() {
  const localActive = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const onChangeLanguage = () => {
    const nextLocale = localActive === "en" ? "jp" : "en"
    
    const segments = pathname.split('/')
    segments[1] = nextLocale
    const newPath = segments.join('/') || '/'

    router.replace(newPath, {
      scroll: false,
    })
  }

  return (
    <>
      <button
        onClick={onChangeLanguage}
        className="w-[2.5rem] h-[2.5rem] bg-opacity-80 flex items-center justify-center gap-1 transition-all "
      >
        <span className="sr-only">Change Language</span>
        {/* <IoLanguageOutline /> */}

        {/* <span className="text-sm hover:scale-[1.15] active:scale-105 transition-all">
          {" "}
          {localActive == "en" ? "EN" : "JP"}
        </span> */}

        <span className="text-sm font-bold hover:scale-[1.15] active:scale-105 transition-all border-b-2 border-transparent hover:border-black dark:hover:border-white pb-1">
          {localActive === "en" ? "EN" : "JP"}
        </span>
      </button>
    </>
  )
}
