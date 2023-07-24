import { useState } from 'react'
import { Button, Form, FormControl, Label, Input, Text, Menu, MenuButton, MenuItem, useMenuState, Flex, Box } from '@twilio-paste/core'
import 'intl-tel-input/build/css/intlTelInput.css'
import { ChevronDownIcon } from '@twilio-paste/icons/esm/ChevronDownIcon';
import countries from './intl-tel-input/data.json'


export default function MFAForm() {

    const menu = useMenuState({ animated: false, visible: false });
    const [activeCountry, setCountry] = useState({ name: 'United Kingdom', iso2: 'gb', dialCode: '44' })

    return (
        <>
            <Form id="mfa">
                <FormControl>
                    <Label htmlFor="number">Phone Number</Label>
                    <Input id="tel" type="tel" insertBefore={
                        <MenuButton {...menu} variant="reset">
                            <Flex>
                                <Box padding="space10"><div className={"iti__flag iti__" + activeCountry.iso2} /></Box>
                                <ChevronDownIcon decorative />                    </Flex>
                        </MenuButton>
                    } />
                    <Menu style={{ overflowY: "scroll", maxHeight: "200px", maxWidth: "600px" }} {...menu} aria-label="Actions">
                        {countries.map((country, i) => {
                            return (
                                <MenuItem onClick={(e) => { e.preventDefault(); menu.hide(); setCountry(country) }} key={country.iso2} {...menu}><Flex><Box className={'iti__flag iti__' + country.iso2}></Box><Text as="p">{country.name}</Text><Text as="em">(+){country.dialCode}</Text></Flex></MenuItem>
                            )
                        })}
                    </Menu>
                </FormControl>

                <Button variant="primary" fullWidth>Start Verification</Button>
            </Form>
        </>
    )
}