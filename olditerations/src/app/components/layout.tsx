'use client'
import type { Metadata } from 'next'
import './global.css'
import { Theme } from '@twilio-paste/core/theme'
import NavBar from './navBar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><Theme.Provider><NavBar />{children}</Theme.Provider></body>
    </html>
  )
}