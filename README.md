##

# Twilio Verify Workshop at WWDC

This workshop will teach you the fundamentels of Twilio Verify and how to use Twilio Verify to secure your applications with 2Factor Authentication.

In this course you'll learn how to:

- Add 2FA SMS to a Login Flow
- Add Voice and Whatsapp as MFA Channels
- Add Retry and CoolDown Logic
- Add Fallback Logic
- Secure Application from SMS Pumping
- Implement Email MFA with Sendgrid

# Phase 1: How to Follow Along

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> Local Development

## Run Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> Cloud Development

_I will be using Gitpod._ You can get a free account [Here](https://gitpod.io/login/)
I will be sharing a gitpod snapshot during the workshop, and you can use it to join the workshop.

# Phase 2: Sign up for a free Twilio Account

[Create a new Twilio Account for free here](https://www.twilio.com/try-twilio)

_If you're in a workshop the Twilions will be able to give you a promocode with some free credit_

# Phase 3: Setup environment Variables

Create and add these Environment Variables. Check `.env.local.sample` to see the names of the environmental variables used in the project.

- Twilio Account Sid [Find it in the Twilio Console](https://www.twilio.com/console)
- Twilio API Key [Create a new API Key and Secret in the twilio Console](https://console.twilio.com/us1/account/keys-credentials/api-keys)
- Twilio API Secret
- A Verify Service SID. [Create one in the Twilio Console](https://www.twilio.com/console/verify/services)

# Phase 3.5 Add your details to the fake DB

Replace the details in `fakeDB.json` with your own. You can use fake data but make sure you use a real phone number and email so that you can test your verifications on those channels.

# Phase 4: Tour the Project

> Skip to this part`git checkout start`

Now that you've got the project running let's talk about what we have.
We have the home page and in the top right you should see a login Button.
Try navigating to `/account`. You should be forwarded back to the home page.

Try logging in with the email and password, you should see that you're taken to a personalised account page with your name. You'll also notice that even if you navigate back to the home page you'll have a new button in the navbar and logout functionality.

We're storing our user data in a jwt and using 'server-side' props to check for this jwt in the cookie.

# Phase 5: Implement SMS 2FA

# Phase 6: Implement Preferred Channel MFA

# Phase 7: Implement Retry and FallBack Logic

# Phase 8: Secure against SMS Pumping

# Phase 9: Implement Email MFA
