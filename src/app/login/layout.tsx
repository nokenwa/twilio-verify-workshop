'use client'
import { Theme } from "@twilio-paste/theme"
import NavBar from "../components/navBar"

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <Theme.Provider >
            <NavBar />
            {children}</Theme.Provider>
    )
}
