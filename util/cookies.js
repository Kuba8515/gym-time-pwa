import { serialize } from 'cookie';
import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export function addOrRemoveFromFollowingArray(followingArray, userId) {
  const isUserFollowed = followingArray.some(
    (cookieObject /* number => object */) => {
      return cookieObject.id === userId; // id that comes from the URL
    },
  );

  let newCookie;
  if (isUserFollowed) {
    // remove the user
    newCookie = followingArray.filter(
      (cookieObject /* number => object */) => cookieObject.id !== userId,
    );
  } else {
    // add the userdev
    newCookie = [...followingArray, { id: userId }];
  }

  return newCookie;
}

export function createSerializedRegisterSessionTokenCookie(token) {
  // check if we are in production e.g. Heroku
  const isProduction = process.env.NODE_ENV === 'production';

  const maxAge = 60 * 60 * 24;

  return serialize('sessionToken', token, {
    maxAge: maxAge,

    expires: new Date(Date.now() + maxAge * 1000),

    // Important for security
    httpOnly: true,
    // Important for security
    // Set secure cookies on production (eg. Heroku)
    secure: isProduction,
    path: '/',

    sameSite: 'lax',
  });
}
