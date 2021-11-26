import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { setParsedCookie } from '../util/cookies';

export default function Cart(props) {
  const [customWorkout, setCustomWorkout] = useState(props.cartArray);

  const router = useRouter();

  const onClickBackToExercises = () => {
    router.push('/exercises/');
  };

  const onClickClearButton = () => {
    setParsedCookie('cart', []);
    setCustomWorkout([]);
  };

  // const onClickDeleteButton = (id) => {
  //   const cookieValue = [...props.cookieArray];
  //   const newCookieValue = cookieValue.filter((e) => e.id !== id);
  //   setParsedCookie('cart', newCookieValue);
  //   setShoppingCart(newCookieValue);
  // };

  useEffect(() => {
    const newWorkout = props.cartArray
      // filter out all removed objects
      .filter((exercise) => {
        const isInSubtractedValue = props.exercises.find((item) => {
          return exercise.id === item.id;
        });
        return isInSubtractedValue;
      });
    setCustomWorkout(newWorkout);
    // update Workout Page
  }, [props.exercises, props.cartArray]);

  return (
    <Layout username={props.username}>
      {customWorkout.length === 0 ? (
        <div className="text-center mt-20">
          <button onClick={onClickBackToExercises}>
            Add exercises to your workout!
          </button>
        </div>
      ) : (
        <>
          <div className="text-center mt-4">
            <h1>My Workout</h1>
            <button
              className="text-center mt-2 font-sm"
              onClick={onClickClearButton}
            >
              Clear Workout
            </button>
          </div>
          <div className="md:mb-0 px-4 mt-5 border-2 border-gray-500 mx-96 rounded shadow-2xl align-center">
            <ul className="m-2 align-center p-4 list-none align-center">
              {customWorkout.map((exercise) => {
                const url = exercise.image;
                return (
                  <li
                    key={`exercise-li-${exercise.id}`}
                    className="border-1 my-4 shadow-lg py-2 flex flex-start"
                  >
                    <div className="mx-8 bg-white p-1.5">
                      <Image src={url} width="50" height="50" />
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
        </>
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getExercises } = await import('../util/database');

  const exercises = await getExercises(context.query.exerciseId);

  const rawCookie = context.req.cookies.cart;

  const cookieArray = rawCookie ? JSON.parse(rawCookie) : [];

  const cartArray = cookieArray.map((e) => {
    const cartObject = exercises.find((exercise) => exercise.id === e.id);

    return {
      id: cartObject.id,
      title: cartObject.title,
      description: cartObject.description,
      benefits: cartObject.benefits,
      image: cartObject.smallImg,
      sets: cartObject.sets,
      reps: cartObject.reps,
    };
  });

  return {
    props: { exercises, cartArray, cookieArray },
  };
}
