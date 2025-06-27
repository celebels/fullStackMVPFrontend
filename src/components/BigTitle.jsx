import React from 'react'

export default function BigTitle({text}) {
  return (
    <>
        <h1 className="font-black text-4xl text-center md:text-left md:text-5xl bg-gradient-to-r from-[#F28CC1] to-[#8E70B7] text-transparent tracking-widest bg-clip-text py-6">
           {text}
          </h1>
    </>
  )
}
