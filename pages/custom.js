import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import { setParsedCookie } from '../util/cookies';

export default function Cart(props) {
  const [cart, setCart] = useState(props.cartArray);

  const router = useRouter();

  const clearButton = () => {
    setParsedCookie('cart', []);
    setCart([]);
  };

  const onClickDeleteButton = (id) => {
    const cookieValue = [...props.cookieArray];
    const newCookieValue = cookieValue.filter((e) => e.id !== id);
    setParsedCookie('cart', newCookieValue);
    setCart(newCookieValue);
  };
  return (
    <Layout>
      <div className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        {cart.length === 0 ? (
          <Link href="/exercises">'Add Exercise' to get started.</Link>
        ) : (
          <>
            {cart.map((exercise) => (
              <div
                key={`exercise-li-${exercise.id}`}
                className="mx-32 w-128 h-64"
              >
                <h1>{exercise.title}</h1>
                <h2>{exercise.description}</h2>
                <div>
                  <button onClick={() => onClickDeleteButton(exercise.id)}>
                    x
                  </button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
      <p className="text-center">
        <button onClick={clearButton}>Clear workout</button>
      </p>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { getExercises } = await import('../util/database');
  const exercises = await getExercises(context.query.id);
  const rawCookie = context.req.cookies.cart;
  console.log(rawCookie);

  const cookieArray = rawCookie ? JSON.parse(rawCookie) : [];

  const cartArray = cookieArray.map((e) => {
    const cartObject = exercises.find((exercise) => exercise.id === e.id);
    // console.log('cartObject', cartObject);

    return {
      id: cartObject.id,
      title: cartObject.title,
      description: cartObject.description,
      image: cartObject.imageUrl,
      itemCount: e.itemCount,
    };
  });

  return {
    props: { exercises, cartArray, cookieArray },
  };
}
