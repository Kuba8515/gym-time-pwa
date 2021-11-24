export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-8">
      <p className=" text-center text-sm font-medium text-gray-800 hover:text-indigo-900 dark:text-gray-400 dark:hover:text-indigo-400">
        Copyright &copy; <span>Next PWA Workout App</span>{' '}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}
