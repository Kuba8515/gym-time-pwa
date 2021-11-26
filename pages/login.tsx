import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import { Errors } from '../util/types';
import { LoginResponse } from './api/login';

export default function LoginPage(props: { refreshUsername: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>([]);
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <h1 className="text-4xl text-center font-bold mb-2 md:mb-0 pr-4 mt-10">
        Login
      </h1>

      <form
        onSubmit={async (event) => {
          event.preventDefault();

          const loginResponse = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });

          const loginJson = (await loginResponse.json()) as LoginResponse;

          if ('errors' in loginJson) {
            setErrors(loginJson.errors);
            return;
          }
          console.log(loginJson.user);

          const destination =
            typeof router.query.returnTo === 'string' && router.query.returnTo
              ? router.query.returnTo
              : `/users/${loginJson.user.id}`;

          props.refreshUsername();

          router.push(destination);
        }}
        className="md:flex md:justify-center mb-6 mt-12"
      >
        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            placeholder="Enter your username"
            className="bg-white appearance-none border-2 border-purple-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>
        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            placeholder="Enter your password"
            className="bg-white appearance-none border-2 border-purple-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded">
          Login
        </button>
      </form>

      <div className="text-red">
        {errors.map((error) => (
          <div key={`error-${error.message}`}>{error.message}</div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getValidSessionByToken } = await import('../util/database');

  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/login`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  console.log(session);

  if (session) {
    return {
      redirect: {
        destination: `/users`,
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
