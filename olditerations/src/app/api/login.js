
import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
const { createHash } = require('node:crypto');

export default async function handler(req, res) {
    console.log('hello')

    if (req.method == "POST") {
        const username = req.body['username']
        const guess = req.body['password']
        res.send('hello')

        // const users = fakeDB.filter(user => { return user.username === username })
        // if (users.length == 0) {
        //     redirect("/login?msg=Incorrect username or password");
        //     return;
        // }
        // const user = users[0]
        // const guess_hash = createHash('sha256').update(guess).digest('hex');
        // console.log(guess_hash)
        // if (guess_hash == user.password) {
        //     // const cookies = new Cookies(req, res)
        //     // cookies.set('username', username)
        //     redirect("/mfa")
        // } else {
        //     redirect("/login?msg=Incorrect username or password")
        // }
    } else {
        return redirect("/")
    }
}

const fakeDB = [
    {
        username: 'chatterboxcoder',
        password: '',
        email: 'nokenwa@chatterboxcoder.me',
        tel: '+447947574148'
    },
]