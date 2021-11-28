import Head from 'next/head';
import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main>
      <Head>
        <title>Welcome</title>
      </Head>

      <div className="flex items-center min-h-screen p-6 bg-white dark:bg-gray-900">
        <div className="flex-0 h-full max-w-4xl mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-xl dark:bg-black">
          <div className="flex flex-col overflow-y-auto md:flex-row w-72 sm:w-80 md:w-auto">
            <div className="h-48 md:h-auto md:w-1/2 ">
              <img
                aria-hidden="true"
                className="object-cover w-full h-full"
                src="/images/starting.jpg"
                alt="Office"
                height="640px"
                width="440px"
              />
            </div>
            <main className="flex items-center justify-center md:p-6 mt-2 py-6 md:mt-0 md:w-1/2">
              <div className=" text-gray-700 dark:text-gray-200  ">
                <h1 className="px-0 sm:px-4 md:px-0 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-2 md:mb-3 tracking-tighter md:leading-3 ">
                  A healthy mind in a healthy body
                </h1>

                <h2 className="  md:text-lg text-center text-base font-medium mb-6 md:mb-12 leading-3  lg:leading-3 ">
                  Train hard, track smart.
                </h2>
                <div className="pt-2 md:pt-0 ml-12">
                  <Link href="/login">
                    <a
                      data-cy="index-login-link"
                      className="flex mx-auto py-2.5 pl-3.5 lg:pr-12 pr-7 sm:pr-12 md:pr-7 lg:ml-14 shadow-lg bg-indigo-700 text-white rounded-sm w-48"
                    >
                      <svg
                        className="w-6 h-6 mr-4 ml-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      Log in
                    </a>
                  </Link>
                  <Link href="/register">
                    <a
                      data-cy="index-register-link"
                      className="flex mx-auto py-2.5 pl-3.5 lg:pr-12 pr-7 sm:pr-12 md:pr-7 lg:ml-14 shadow-lg bg-indigo-700 text-white rounded-sm w-48 mt-4"
                    >
                      <svg
                        className="w-6 h-6 mr-4 ml-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        />
                      </svg>
                      Sign up
                    </a>
                  </Link>
                  <br />
                  <div className="relative right-7 mt-8">
                    <Link href="/home">
                      <a
                        data-cy="index-continue-link"
                        className="flex space-x-3 items-center mx-auto py-2.5 pl-3.5 lg:pr-12 pr-7 sm:pr-12 md:pr-7 lg:ml-14 shadow-lg bg-indigo-700 text-white rounded-sm w-64 text-center"
                      >
                        <svg
                          className="w-6 h-6 mr-4 ml-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                        Continue as guest
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </main>
  );
}
