import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";

const Mode = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <label className="relative inline-flex items-center cursor-pointer w-[50px] h-[22px]">
        <div className="w-[43px] h-[22px] m-auto bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-full transition-colors"></div>
        <div className="absolute top-[3px] left-1 w-4 h-4 bg-[#FF5F5F] rounded-full flex items-center justify-center text-white">
          <IoIosSunny className="text-xs" />
        </div>
      </label>
    )
  }

  const isDark = theme === 'dark'

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer w-[50px] h-[22px]">
        {/* Hidden checkbox */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={!isDark}
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
        />

        {/* Background track */}
        <div className="w-[43px] h-[22px] m-auto bg-[#FFFFFF] dark:bg-[#374151] border-2 border-[#D1D5DB] dark:border-[#4B5563] rounded-full transition-colors"></div>

        {/* Knob */}
        <div
          className={`absolute top-[3px] left-1 right-[3px] bottom-[3px] w-4 h-4 bg-[#FF5F5F] rounded-full transition-transform flex items-center justify-center text-white ${
            isDark ? "left-0" : "translate-x-6 left-0"
          }`}
        >
          {isDark ? <IoMoonSharp className="text-xs" /> : <IoIosSunny className="text-xs" />}
        </div>
      </label>
    </>
  )
}

export default Mode