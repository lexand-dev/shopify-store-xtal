import { Hero } from '@/components/home/Hero'
import React from 'react'

export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Hero />
      {children}
    </>
  )
}
