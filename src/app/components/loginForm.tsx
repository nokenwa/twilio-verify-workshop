import { Form, FormControl, FormActions, Label, Input, Button } from '@twilio-paste/core'

export default function loginForm() {
    return (
        <>
            <Form action="/api/login" method="POST" id="login">
                <FormControl>
                    <Label htmlFor="username">Username</Label>
                    <Input name="username" id="username" type="text" />
                </FormControl>
                <FormControl>
                    <Label htmlFor="password">Password</Label>
                    <Input name="password" id="password" type="password" autocomplete="current-password" />
                </FormControl>
                <FormActions>
                    <Button type="submit" variant="primary" fullWidth> Login</Button>
                </FormActions>
            </Form>
        </>
    )
}