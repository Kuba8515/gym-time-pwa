import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import WorkoutCard from '../components/WorkoutCard';

export default function HomePage(props) {
  return (
    <Layout username={props.username}>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1 className="font-bold text-2xl text-center mt-4">
        Browse available Workouts
      </h1>
      <div className="text-center mt-4">
        <Link href="/custom">
          <a className="dark:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
            Create my own
          </a>
        </Link>
      </div>
      {/* {props.userWorkout.length === 0 ? (
        <> */}
      <div className="border-2 border-gray-300 mt-6" />
      <div className="md:mb-0 mt-2 text-center max-w-md mx-auto">
        <ul className="m-2 align-center p-4 align-center ml-16 mr-16 mb-12 gap-8 list-none">
          {props.workouts.map((workout) => {
            return (
              <li key={`workout-li-${workout.id}`}>
                <WorkoutCard
                  title={workout.title}
                  link={workout.id}
                  description={workout.description}
                  image={workout.imageUrl}
                />{' '}
              </li>
            );
          })}
        </ul>
      </div>
      {/* </>
      ) : (
        <div>{props.userWorkout.find(userId)}</div>
        <span>hello world</span>
      )}  */}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getWorkouts, getWorkoutByUserId, getUserBySessionToken } =
    await import('../util/database');
  // const allowedUser = await getUserBySessionToken(context.req.cookies.token);
  const workouts = await getWorkouts(context.query.id);
  // const userWorkout = await getWorkoutByUserId(session.userId);
  // const userId = session?.userId;
  return {
    props: {
      workouts,
      // userWorkout,
      // userId,
    },
  };
}
