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
      <div className="md:mb-0 px-4 mt-5 border-2 border-gray-500 mx-80 rounded shadow-2xl align-center">
        <ul className="m-2 align-center p-4 list-none align-center">
          {props.exercises.map((exercise) => {
            return (
              <li
                className="border-1 my-4 shadow-lg py-2 flex flex-start"
                key={`exercise-li-${exercise.id}`}
              >
                <div className="mx-12 bg-white p-1.5">
                  <Image src={exercise.smallImg} width="50" height="50" />
                </div>
                <div className="align-center mt-5">
                  <Link href={`/exercises/${exercise.id}`}>
                    <a>{exercise.title}</a>
                  </Link>
                </div>
                <div className="mx-32 mt-5">
                  <p className="">{exercise.sets}</p>
                </div>
                <div>
                  <p className="mt-5">{exercise.reps}</p>
                </div>
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
