import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
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
