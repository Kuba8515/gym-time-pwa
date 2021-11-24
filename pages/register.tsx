import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import { Errors } from '../util/types';
import { RegisterResponse } from './api/register';

type Props = { refreshUsername: () => void; csrfToken: string };

export default function RegisterPage(props: Props) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState<Errors>([]);
  const router = useRouter();
  return (
    <Layout>
      <h1 className="text-4xl text-center font-bold mb-2 md:mb-0 pr-4">
        Register
      </h1>

      <form
        className="md:flex md:justify-center mb-6 mt-12"
        onSubmit={async (event) => {
          event.preventDefault();

          const registerResponse = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              username: username,
              email: email,
              password: password,
              csrfToken: props.csrfToken,
            }),
          });

          const registerJson =
            (await registerResponse.json()) as RegisterResponse;

          if ('errors' in registerJson) {
            setErrors(registerJson.errors);
            return;
          }
          console.log(registerJson.user);

          const destination =
            typeof router.query.returnTo === 'string' && router.query.returnTo
              ? router.query.returnTo
              : `/users/${registerJson.user.id}`;

          props.refreshUsername();

          router.push(destination);
        }}
      >
        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
          Name
          <input
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>
        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
          Username *
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>
        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>
        <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">
          Password *
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </label>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </form>

      <div>
        {errors.map((error) => (
          <div key={`error-${error.message}`}>{error.message}</div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getValidSessionByToken } = await import('../util/database');
  const { createToken } = await import('../util/csrf');

  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/register`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;
  console.log('sessionToken', sessionToken);

  const session = await getValidSessionByToken(sessionToken);

  console.log('session', session);

  if (session) {
    return {
      redirect: {
        destination: '/users',
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: createToken(),
    },
  };
}
