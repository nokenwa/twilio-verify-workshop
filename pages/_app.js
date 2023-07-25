import { Theme } from "@twilio-paste/core/theme";
import "../styles/global.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <Theme.Provider theme="default">
      <Component {...pageProps} />
    </Theme.Provider>
  );
};

export function reportWebVitals(metric) {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default MyApp;
