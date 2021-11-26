import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Exercises(props) {
  return (
    <Layout username={props.username}>
      <h1 className="font-bold text-2xl text-center mt-4">
        Databank for exercises
      </h1>

      <div className="md:mb-0 pr-4 mt-10">
        <ol className="m-4 align-center p-8 align-center ml-32 gap-2">
          {props.exercises.map((exercise) => {
            return (
              <li key={`exercise-li-${exercise.id}`}>
                <Link href={`/exercises/${exercise.id}`}>
                  <a>{exercise.title}</a>
                </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getExercises } = await import('../../util/database');
  const exercises = await getExercises(context.query.id);
  return {
    props: {
      exercises,
    },
  };
}
