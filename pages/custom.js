import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import {
  addItemByProductId,
  getParsedCookie,
  setParsedCookie,
  subtractItemByProductId,
} from '../util/cookies';

export default function Cart(props) {
  const [shoppingCart, setShoppingCart] = useState(props.cartArray);

  const router = useRouter();

  const onClickBackToExercises = () => {
    router.push('/exercises/');
  };

  const onClickClearButton = () => {
    setParsedCookie('cart', []);
    setShoppingCart([]);
  };

  const onClickDeleteButton = (id) => {
    const cookieValue = [...props.cookieArray];
    const newCookieValue = cookieValue.filter((e) => e.id !== id);
    setParsedCookie('cart', newCookieValue);
    setShoppingCart(newCookieValue);
  };

  useEffect(() => {
    const newFinalShoppingCartArray = props.cartArray
      // filter out all objects with a quantity below 1
      .filter((exercise) => {
        const isInSubtractedValue = props.exercises.find((item) => {
          return exercise.id === item.id;
        });
        return isInSubtractedValue;
      })
      // update the quantity of objects inside newFinalShoppingCartArray with the quantity inside subtractedValue
      .map((exercise) => {
        const e = props.exercises.find((item) => {
          return item.id === exercise.id;
        }).itemCount;
        exercise.itemCount = e;
        return exercise;
      });
    setShoppingCart(newFinalShoppingCartArray);
    // if either of these things changes, then it will update the finalShoppingCart
  }, [props.exercises, props.cartArray]);

  return (
    <Layout>
      {shoppingCart.length === 0 ? (
        <div>
          <button onClick={onClickBackToExercises}>Add exercises</button>
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
              {shoppingCart.map((exercise) => {
                const url = exercise.image;
                return (
                  <li
                    key={`exercise-li-${exercise.id}`}
                    className="border-1 my-4 shadow-lg py-2 flex flex-start"
                  >
                    <div className="mx-8">
                      <Image src={url} width="50" height="50" />
                    </div>
                    <div className="align-center mt-4">
                      <Link href={`/exercises/${exercise.id}`}>
                        <a>{exercise.title}</a>
                      </Link>
                    </div>
                    <div className="mx-32 mt-4">
                      <p className="">{exercise.sets}</p>
                    </div>
                    <div>
                      <p className="mt-4">{exercise.reps}</p>
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
