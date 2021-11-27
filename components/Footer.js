import Link from 'next/link';
import { Home, User } from './Icons';

export default function Footer() {
  return (
    <div>
      <nav className="fixed mx-auto bottom-0 inset-x-0 bg-white border-2 border-gray-200 mx-72 dark:bg-gray-800">
        <ul className="flex flex-row text-xs font-semibold list-none justify-evenly">
          <Link href="/home">
            <a className="w-full block py-2 px-3 text-center border-r-2 dark:text-white">
              <Home />
              <li>Home</li>
            </a>
          </Link>
          <Link href="/custom">
            <a className="w-full block py-2 px-3 text-center border-r-2 dark:text-white">
              <User />
              <li>My Workout</li>
            </a>
          </Link>
          <Link href="/users">
            <a className="w-full block py-2 px-3 text-center border-r-2 dark:text-white">
              <User />
              <li>Users</li>
            </a>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
