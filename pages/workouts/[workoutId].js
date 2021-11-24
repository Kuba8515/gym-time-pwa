import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Exercise(props) {
  return (
    <Layout username={props.username}>
      <Head>
        <title>{props.workout.title}</title>
      </Head>
      <div className="text-center mb-2 md:mb-0 pr-4 mt-4">
        <strong>Single Page: {props.workout.title}</strong>
        <div>{props.workout.description}</div>
        <div>{props.workout.benefits}</div>
      </div>
      <div className="md:mb-0 pr-4 mt-10">
        <ul className="m-4 align-center p-8 align-center ml-32 gap-2">
          {props.exercises.map((exercise) => {
            return (
              <li key={`exercise-li-${exercise.id}`}>
                <Link href={`/exercises/${exercise.id}`}>
                  <a>{exercise.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getWorkout } = await import('../../util/database');
  const workout = await getWorkout(context.query.workoutId);
  const { getExercisebyWorkout } = await import('../../util/database');
  const exercises = await getExercisebyWorkout(Number(context.query.workoutId));

  return {
    props: {
      exercises,
      workout,
    },
  };
}
