import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import { AddIcon } from '../../components/Icons';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function Exercise(props) {
  const [customWorkout, setCustomWorkout] = useState(
    getParsedCookie('cart') || [],
  );
  // const userCookieObject = customWorkout.find(
  //   (cookieObj) => cookieObj.id === props.exercise.id,
  // );

  // add to workout
  const addToWorkoutHandler = () => {
    const currentCookie = getParsedCookie('cart') || [];

    const isItemInCart = currentCookie.some((cookieObject) => {
      return cookieObject.id === props.exercise.id; // id that comes from the URL
    });
    let newCookie;
    if (isItemInCart) {
      return null;
    } else {
      // add the new product
      newCookie = [...currentCookie, { id: props.exercise.id }];
    }
    setParsedCookie('cart', newCookie);
    setCustomWorkout(newCookie);
    router.push('/exercises/');
  };
  return (
    <Layout username={props.username}>
      <Head>
        <title>{props.exercise.title}</title>
      </Head>
      <div className="text-center md:mb-0 pr-4 mt-12 mx-64">
        <strong>{props.exercise.title}</strong>
        <div className="grid grid-cols-2 my-8 gap-8">
          <Image src={props.exercise.imageUrl} width="200" height="250" />
          <div className="grid grid-cols-1 justify-center">
            <span className="font-semibold">
              Instructions: <p>{props.exercise.description}</p>
            </span>
            <span className="font-semibold">
              Benefits: <p>{props.exercise.benefits}</p>
            </span>
          </div>
        </div>
        <div className="align-center m-2 p-2 bg-white mx-96 shadow-2xl border-2 border-black dark:text-black">
          <button onClick={addToWorkoutHandler}>
            <AddIcon />
          </button>
          <p className="font-bold">Add exercise</p>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getExercise } = await import('../../util/database');
  console.log(context.query.exerciseId);
  const exercise = await getExercise(Number(context.query.exerciseId));

  return {
    props: {
      exercise,
    },
  };
}
