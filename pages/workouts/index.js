import Link from 'next/link';
import Layout from '../../components/Layout';
import WorkoutCard from '../../components/WorkoutCard';

export default function Workouts(props) {
  return (
    <Layout username={props.username}>
      <h1 className="font-bold text-2xl text-center mt-4">
        Browse available Workouts
      </h1>
      <div className="text-center mt-4">
        <a
          href="/custom"
          className="dark:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
        >
          Create my own
        </a>
      </div>
      <div className="w-cover border-2 mx-4 mt-6" />
      <div className="md:mb-0 mt-2 text-center">
        <ul className="m-2 align-center p-4 align-center ml-16 mr-16 gap-8 list-none">
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
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getWorkouts } = await import('../../util/database');
  const workouts = await getWorkouts(context.query.id);
  return {
    props: {
      workouts,
    },
  };
}
