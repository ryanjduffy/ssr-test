import NextApp from "next/app";

import '../styles/globals.css'

function MyApp({ Component, apiKey, pageProps }) {
  return <Component {...pageProps} apiKey={apiKey} />
}

MyApp.getInitialProps = (appContext) => {
  const props = NextApp.getInitialProps(appContext);
  const authHeader = appContext.ctx.req?.headers.authorization;
  const authProps = { apiKey: undefined };

  if (authHeader) {
    const [scheme, token] = authHeader.split(" ", 2);
    if (!token || !/^Bearer$/i.test(scheme)) {
      console.error("Format is Authorization: Bearer [token]");
    } else {
      authProps.apiKey = token;
    }
  }

  return { ...props, ...authProps };
};

export default MyApp
