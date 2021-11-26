import Head from 'next/head';
import Layout from '../../components/Layout';
import WorkoutCard from '../../components/WorkoutCard';

export default function User(props) {
  return (
    <Layout username={props.username}>
      <Head>
        <title>User Page</title>
      </Head>
      <div className="text-center mb-4 md:mb-0 pr-4 mt-4">
        <strong>Personal User Page of {props.user.name}</strong>
        <div>Username: {props.user.username}</div>
        <div>Email: {props.user.email}</div>
        <br />
        <strong>User Workout</strong>
        <div className="md:mb-0 text-center">
          <ul className="mx-96 p-4 list-none mb-20">
            {props.workouts.map((workout) => {
              return (
                <li key={`workout-li-${workout.id}`}>
                  <WorkoutCard
                    title={workout.title}
                    link={workout.id}
                    description={workout.description}
                    image={workout.imageUrl}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getUser, getUserBySessionToken, getWorkouts } = await import(
    '../../util/database'
  );
  console.log(context.query.userId);
  const user = await getUser(Number(context.query.userId));
  const workouts = await getWorkouts(context.query.id);
  const sessionToken = context.req.cookies.sessionToken;
  const sessionUser = await getUserBySessionToken(sessionToken);
  console.log(sessionUser);

  if (!sessionUser) {
    return {
      redirect: {
        permanent: false,
        destination: `/login?returnTo=/users/${user.id}`,
      },
    };
  }

  if (sessionUser.id !== Number(context.query.userId)) {
    return {
      props: {
        errors: [{ message: 'Not allowed' }],
      },
    };
  }
  return {
    props: {
      user,
      workouts,
    },
  };
}
