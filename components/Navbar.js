import { useTheme } from 'next-themes';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { LiftLogo, Moon, Sun } from '../components/Icons';

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
                router.push('/home');
              }}
            >
              <LiftLogo />
            </button>
            <div className="md:block ml-8 dark:text-white mx-12">
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
            <div className="m-auto pl-36">
              <ul className="list-none ml-80 flex items-baseline space-x-4 gap-8">
                <li>
                  <Link href="/users">
                    <a className="md:block font-semibold px-2 dark:text-white dark:hover:bg-indigo-800 rounded">
                      Users
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/exercises">
                    <a
                      data-cy="home-exercises-link"
                      className="md:block font-semibold px-2 dark:text-white dark:hover:bg-indigo-800 rounded"
                    >
                      Exercises
                    </a>
                  </Link>
                </li>
                {!props.username && (
                  <>
                    <Link href="/login">
                      <a className="dark:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded shadow-lg">
                        Login
                      </a>
                    </Link>
                    <Link href="/register">
                      <a className="dark:text-white bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded shadow-lg">
                        Get Started
                      </a>
                    </Link>
                  </>
                )}

                {props.username && (
                  <Link href="/logout">
                    <a className="font-semibold dark:text-white">Logout</a>
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
