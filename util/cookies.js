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

export function getCookies(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setCookies(key, value) {
  Cookies.set(key, JSON.stringify(value));
  return;
}

export function subtractItemByProductId(id) {
  // newCookieValue is the decoded version of whatever is inside the cookie; currently an array
  const newCookieValue = getParsedCookie('cart') || [];

  // id that we're passing and the id of the product
  const productIdInCookie = newCookieValue.find((p) => p.id === id);

  if (productIdInCookie.itemCount > 1) {
    productIdInCookie.itemCount -= 1;
  } else {
    // get index of product with the id that's passed as a parameter
    const removeIndex = newCookieValue
      .map(function (item) {
        return item.id;
      })
      .indexOf(id);

    // remove object
    newCookieValue.splice(removeIndex, 1);
  }
  setParsedCookie('cart', newCookieValue);
  return newCookieValue;
}

export function addItemByProductId(id) {
  // newCookieValue is the decoded version of whatever is inside the cookie; currently an array
  const newCookieValue = getParsedCookie('cart') || [];

  // id that we're passing and the id of the product
  const productIdInCookie = newCookieValue.find((p) => p.id === id);

  if (productIdInCookie) {
    productIdInCookie.itemCount += 1;
  } else {
    newCookieValue.push({
      id: id,
      itemCount: 1,
    });
  }

  // this function creates the cookie
  setParsedCookie('cart', newCookieValue);

  return newCookieValue;
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
