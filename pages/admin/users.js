import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';

export default function Users(props) {
  const [userList, setUserList] = useState(props.users);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');

  const [updateUsername, setUpdateUsername] = useState('');
  const [updateEmail, setUpdateEmail] = useState('');
  const [updateFullname, setUpdateFullname] = useState('');

  async function createUser(fullName, userName, userEmail) {
    const usersResponse = await fetch(`${props.baseUrl}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fullName, userName, userEmail }),
    });

    const user = await usersResponse.json();
    const newState = [...userList, user];
    setUserList(newState);
  }

  async function deleteUser(id) {
    const userResponse = await fetch(`${props.baseUrl}/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const deletedUser = await userResponse.json();
    const newState = userList.filter((user) => user.id !== deletedUser.id);
    setUserList(newState);
  }

  async function updateUser(id, newName, newUsername, newEmail) {
    const usersResponse = await fetch(`${props.baseUrl}/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: newName,
        userName: newUsername,
        userEmail: newEmail,
      }),
    });

    const updatedUser = await usersResponse.json();

    const newState = [...userList];

    const outdatedUser = newState.find((user) => user.id === updatedUser.id);

    outdatedUser.name = updatedUser.name;
    outdatedUser.username = updatedUser.username;
    outdatedUser.email = updatedUser.email;

    setUserList(newState);
  }
  return (
    <Layout username={props.username}>
      <Head>
        <title>Admin-Page</title>
      </Head>
      <h2>Users List</h2>
      <h3>Create user:</h3>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        name:
        <input
          value={fullname}
          onChange={(e) => setFullname(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        username:
        <input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        email:
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          onClick={() => createUser(fullname, username, email)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-full"
        >
          create
        </button>
      </label>
      <br />
      <label className="block text-gray-700 text-sm font-bold mb-2">
        update full name:
        <input
          value={updateFullname}
          onChange={(e) => setUpdateFullname(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        update username:
        <input
          value={updateUsername}
          onChange={(e) => setUpdateUsername(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        update email:
        <input
          value={updateEmail}
          onChange={(e) => setUpdateEmail(e.currentTarget.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </label>
      <ul>
        {userList.map((user) => {
          return (
            <li key={`user-li-${user.id}`} className="list-disc ml-8">
              {user.username} email: {user.email}
              <button
                onClick={() => deleteUser(user.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"
              >
                delete
              </button>
              <button
                onClick={() =>
                  updateUser(
                    user.id,
                    updateFullname,
                    updateUsername,
                    updateEmail,
                  )
                }
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"
              >
                update
              </button>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const baseUrl = process.env.BASE_URL;
  const userResponse = await fetch(`${baseUrl}/api/users`);
  const users = await userResponse.json();
  const sessionToken = context.req.cookies.sessionToken;
  const { getValidSessionByToken } = await import('../../util/database');
  const session = await getValidSessionByToken(sessionToken);
  if (!session) {
    return {
      redirect: {
        destination: '/login?returnTo=/admin/users',
        permanent: false,
      },
    };
  }
  return {
    props: { users, baseUrl },
  };
}
