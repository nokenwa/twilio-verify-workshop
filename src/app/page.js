import NavBar from './components/navBar'
import LoginModal from './components/loginModal'
import TryNow from './components/tryNow'
import Product from './components/product'
import Footer from './components/footer'
import CookieDialog from './components/cookieDialog'
import { Box, Heading, Grid } from '@twilio-paste/core'
import COOKIES from './components/cookies';
import { getCookie } from 'cookies-next'

export default function Home() {
  return (
    <div>
      <NavBar />
      <TryNow />
      <Box className="store">
        <Heading as="h1" variant="heading10">
          Welcome to the bakery
        </Heading>
        <center>
          <div className="categories">
            <Heading as="h2" variant="heading20">NEW Flavors</Heading>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <Heading as="h2" variant="heading20">Popular</Heading>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <Heading as="h2" variant="heading20">Feature</Heading>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <Heading as="h2" variant="heading20">Specials</Heading>
          </div>
        </center>
        <Grid>
          {/* {Object.keys(COOKIES).map(cookie => (
            <Product key={cookie} product={COOKIES[cookie]} />
          ))} */}
        </Grid>
      </Box>
      <Footer pagination />
    </div>

  )
}
// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res
//   var username = getCookie('username', { req, res });
//   if (username != undefined) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/"
//       }
//     }
//   }
//   return { props: { username: false } };
// };