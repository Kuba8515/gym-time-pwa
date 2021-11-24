import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import { useState } from 'react';
import { AddIcon } from '../../components/Icons';
import Layout from '../../components/Layout';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';

export default function Exercise(props) {
  const [cart, setCart] = useState(getParsedCookie('cart') || []);
  const userCookieObject = cart.find(
    (cookieObj) => cookieObj.id === props.exercise.id,
  );

  const initialItemCount = userCookieObject ? userCookieObject.itemCount : 1;

  const [itemCount, setItemCount] = useState(initialItemCount);

  // add to cart
  const addToCartHandler = () => {
    const currentCookie = getParsedCookie('cart') || [];

    const isItemInCart = currentCookie.some((cookieObject) => {
      return cookieObject.id === props.exercise.id; // id that comes from the URL
    });
    let newCookie;
    if (isItemInCart) {
      newCookie = currentCookie.filter(
        (cookieObject) => cookieObject.itemCount + 1,
      );
    } else {
      // add the new product
      newCookie = [...currentCookie, { id: props.exercise.id, itemCount }];
    }
    setParsedCookie('cart', newCookie);
    setCart(newCookie);
    router.push('/exercises/');
  };
  return (
    <Layout username={props.username}>
      <Head>
        <title>{props.exercise.title}</title>
      </Head>
      <div className="text-center mb-2 md:mb-0 pr-4 mt-4 mx-64">
        <strong>Single Page: {props.exercise.title}</strong>
        <div>{props.exercise.description}</div>
        <div>{props.exercise.benefits}</div>
        <Image src={props.exercise.imageUrl} width="400" height="300" />
        <div className="align-center mt-5">
          <button onClick={addToCartHandler}>
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
