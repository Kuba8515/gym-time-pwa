import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { AddIcon, Home, LiftLogo, Moon, Sun, Users } from '../components/Icons';

export default function Header(props) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="bg-white shadow-bottom dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="flex-shrink-0 cursor-pointer"
              onClick={() => {
                router.push('/');
              }}
            >
              <LiftLogo />
            </button>
            <div className="md:block">
              <div className="ml-8 flex items-baseline space-x-4">
                <button
                  aria-label="Home"
                  onClick={() => {
                    router.push('/');
                  }}
                  className="cursor-pointer dark:text-gray-300 text-gray-700 dark:hover:bg-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <Home aria-label="Home" />
                </button>
              </div>
            </div>
            <div className="md:block ml-8 dark:text-white">
              {props.username ? (
                <>Logged in as {props.username} &nbsp;&nbsp;&nbsp;</>
              ) : (
                'Not logged in'
              )}
            </div>
            <div className="flex-shrink-0 cursor-pointer ml-8">
              <button
                aria-label="dark mode"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="bg-white hover:bg-gray-100 focus:ring focus:ring-gray-500 transition dark:bg-gray-800 dark:hover:bg-gray-900 focus:outline-none rounded-md p-1.5"
              >
                {theme === 'dark' ? (
                  <Sun aria-hidden="true" />
                ) : (
                  <Moon aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="m-auto pl-40">
              <ul className="list-none ml-80 flex items-baseline space-x-4 gap-16">
                {/* <li>
                  <Link href="/users">
                    <a>
                      <Users className="dark:text-white" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/custom">
                    <a>
                      <AddIcon className="dark:text-white" />
                    </a>
                  </Link>
                </li> */}
                <li>
                  <Link href="/exercises">
                    <a
                      data-cy="home-exercises-link"
                      className="dark:text-gray-400 md:block dark:text-white"
                    >
                      Exercises
                    </a>
                  </Link>
                </li>
                {!props.username && (
                  <>
                    <Link href="/login">
                      <a className="dark:text-white">Login</a>
                    </Link>
                    <Link href="/register">
                      <a className="dark:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
                        Get Started
                      </a>
                    </Link>
                  </>
                )}

                {props.username && (
                  <Link href="/logout">
                    <a className="dark:text-white">Logout</a>
                  </Link>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
