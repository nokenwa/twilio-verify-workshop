'use client'
import { useState } from 'react'
import { Label, Input, Box, Flex, Menu, Text, Button, MenuButton,, MenuPrimitive, MenuButton, MenuItem, useMenuState } from '@twilio-paste/core'
import 'intl-tel-input/build/css/intlTelInput.css'
import intlTelInput from 'intl-tel-input'
import { ChevronDownIcon } from '@twilio-paste/icons/esm/ChevronDownIcon';
import countries from './data.json'

export default function TelInput() {
    const menu = useMenuState({ animated: false, visible: false });
    const [activeCountry, setCountry] = useState({ name: 'United Kingdom', iso2: 'gb', dialCode: '44' })

    return (
        <>
            <Label htmlFor="number">Phone Number</Label>
            <Input id="tel" type="tel" insertBefore={
                <MenuButton {...menu} variant="reset">
                    <Flex>
                        <Box padding="space10"><div className={"iti__flag iti__" + activeCountry.iso2} /></Box>
                        <ChevronDownIcon decorative />                    </Flex>
                </MenuButton>
            } />
            <Menu style={{ overflowY: "scroll", maxHeight: "200px" }} className="countrypicker" {...menu} aria-label="Actions">
                {countries.map((country, i) => {
                    return (
                        <MenuItem onClick={(e) => { e.preventDefault(); menu.hide(); setCountry(country) }} key={country.iso2} {...menu}><Flex><Box className={'iti__flag iti__' + country.iso2}></Box><Text as="p">{country.name}<em>(+){country.dialCode}</em></Text></Flex></MenuItem>
                    )
                })}
            </Menu>

            <Button variant="primary" fullWidth>Start Verification</Button>
        </>
    )
}