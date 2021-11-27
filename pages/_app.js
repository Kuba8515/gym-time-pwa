import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState();

  const refreshUsername = useCallback(async () => {
    const response = await fetch('/api/profile');
    const profile = await response.json();

    console.log(profile);
    if ('errors' in profile) {
      console.log(profile.errors);
      return;
    }
    setUsername(profile.user.username);
  }, []);

  useEffect(() => {
    refreshUsername();
  }, [refreshUsername]);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon-apple-touch.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component
          {...pageProps}
          username={username}
          refreshUsername={refreshUsername}
        />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
