'use client'
import Link from 'next/link'
import { Stack } from '@twilio-paste/core/stack';
import { Box } from '@twilio-paste/core/box';
import LoginModal from './loginModal'


export default function NavBar() {
    return (
        <>
            <div className="sale-banner">
                <table style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            <td>Call Us: +8800701-800300</td>
                            <td style={{ 'textAlign': 'center' }}>Take 30% off when you spend $99 or more with code: "HappyCookie". <u>More details</u></td>
                            <td style={{ 'textAlign': 'right' }}>Facebook &nbsp;&nbsp; Twitter &nbsp;&nbsp; Instagram</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Box marginBottom="space50" className="NavBar">
                <Stack element="NAVBAR" orientation="horizontal" spacing="space40" style={{ width: '100%' }}>
                    <img className="logo" src="/logo.png" alt="Party Cookies Logo" />
                    <Link href="/">Home</Link>
                    <span>About</span>
                    <span>Contact</span>
                    <span>Feature</span>
                    <div>
                        <span className="icon">
                            <img src='/search.svg' width={20} height={20} style={{ verticalAlign: 'text-bottom' }} alt="Search" />
                        </span>
                        <span className="icon">
                            <img src='/cart.svg' width={20} height={20} style={{ verticalAlign: 'text-bottom' }} alt="Cart" />
                        </span>
                        <LoginModal />

                    </div>
                </Stack>
            </Box></>

    )
}
