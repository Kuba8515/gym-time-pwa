const Home = () => {
  return (
    <button>
      <svg
        aria-label="home"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        height="24"
        width="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </button>
  );
};

const Moon = () => {
  return (
    <svg
      aria-label="moon"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="fill-current text-gray-900"
    >
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
    </svg>
  );
};

const Sun = () => {
  return (
    <svg
      aria-label="sun"
      width="18"
      height="18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="fill-current text-gray-50"
    >
      <path
        fillRule="evenodd"
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const Logo = () => {
  return (
    <button
      aria-label="logo"
      className=" inline-flex items-center justify-center w-10 h-10 text-black transition-colors rounded-lg focus:shadow-outline  hover:bg-indigo-900  hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 0 512 512"
        width="32"
        stroke="currentColor"
        className="fill-current"
      >
        <path d="m289.9 52.7h31c8.9 0 17 3.7 22.9 9.5 5.8 5.9 9.5 14 9.5 22.9v24.3c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.3-7.5-7.5v-24.3c0-4.8-1.9-9.1-5.1-12.2-3.1-3.1-7.5-5.1-12.2-5.1h-31c-1.4 6.3-4.6 12-9.1 16.4-6.2 6.2-14.6 9.9-23.9 9.9h-137.1c-9.3 0-17.8-3.8-23.9-9.9-4.4-4.4-7.7-10.1-9.1-16.4h-31c-4.8 0-9.1 2-12.2 5.1-3.1 3.1-5.1 7.5-5.1 12.2v336.4c0 4.1-3.3 7.5-7.5 7.5s-7.5-3.3-7.5-7.5v-336.4c0-8.9 3.6-17 9.5-22.9 5.9-5.8 13.9-9.5 22.8-9.5h31c1.4-6.3 4.7-12 9.1-16.4 6.1-6.2 14.6-10 23.9-10h11.7c1.4-6.3 4.7-12 9.1-16.4 6.1-6.2 14.6-9.9 23.9-9.9h47.7c9.3 0 17.8 3.8 23.9 9.9 4.4 4.4 7.7 10.1 9.1 16.4h11.7c9.3 0 17.8 3.8 23.9 10 4.4 4.4 7.6 10.1 9.1 16.4zm19.8 266.7c4.2 0 7.5 3.4 7.5 7.5s-3.3 7.5-7.5 7.5h-156.4c-4.1 0-7.5-3.3-7.5-7.5 0-4.1 3.4-7.5 7.5-7.5zm0-81.5c4.2 0 7.5 3.3 7.5 7.5 0 4.1-3.3 7.5-7.5 7.5h-156.4c-4.1 0-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5zm0-81.6c4.2 0 7.5 3.3 7.5 7.5 0 4.1-3.3 7.5-7.5 7.5h-156.4c-4.1 0-7.5-3.3-7.5-7.5 0-4.2 3.4-7.5 7.5-7.5zm-235.1 223.3h42.7c4.2 0 7.5 3.4 7.5 7.5v42.7c0 4.1-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.3-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm-35.2-96.5h42.7c4.2 0 7.5 3.3 7.5 7.5v42.7c0 4.1-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.4-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm-35.2-96.6h42.7c4.2 0 7.5 3.4 7.5 7.5v42.7c0 4.2-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.3-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm-35.2-96.5h42.7c4.2 0 7.5 3.3 7.5 7.5v42.7c0 4.1-3.3 7.5-7.5 7.5h-42.7c-4.1 0-7.5-3.4-7.5-7.5v-42.7c0-4.1 3.4-7.5 7.5-7.5zm35.2 15h-27.7v27.7h27.7zm218.2 270.5c-4.1 0-7.5-3.3-7.5-7.5 0-4.1 3.4-7.5 7.5-7.5h10.2v-262.1c0-4.1 3.4-7.5 7.5-7.5s7.5 3.3 7.5 7.5v262.1h28.7v-47.5c0-4.1 3.4-7.5 7.5-7.5h45.8c4.1 0 7.5 3.3 7.5 7.5v26.4h38.3c4.1 0 7.5 3.3 7.5 7.5v78.8c0 4.1-3.3 7.5-7.5 7.5h-38.3v26.4c0 4.1-3.3 7.5-7.5 7.5h-45.8c-4.1 0-7.5-3.3-7.5-7.5v-47.5h-28.7v22.6c0 8.9-3.7 17-9.5 22.8-5.9 5.9-13.9 9.5-22.9 9.5-88.4 0-176.7 0-265.1 0-8.9 0-17-3.6-22.8-9.5-5.9-5.8-9.5-13.9-9.5-22.8v-24.3c0-4.1 3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5v24.3c0 4.8 2 9.1 5.1 12.2 3.1 3.1 7.5 5.1 12.2 5.1h165.9v-18.9h-38.3c-4.1 0-7.5-3.4-7.5-7.5v-78.8c0-4.1 3.4-7.5 7.5-7.5h38.3v-26.4c0-4.1 3.4-7.5 7.5-7.5h45.8c4.1 0 7.5 3.3 7.5 7.5v47.5h11.6c4.1 0 7.5 3.3 7.5 7.5 0 4.2-3.4 7.5-7.5 7.5h-11.6v21.7h99.5v-21.7h-53.9zm10.2 36.7h-55.8v40h38.4c4.8 0 9.1-2 12.2-5.1 3.2-3.1 5.1-7.5 5.1-12.2zm104.5 6.1h30.8v-63.8h-30.8zm-251.9 0h30.8v-63.8h-30.8zm206.1 33.9h30.8v-131.6h-30.8zm-129.5 0c0-43.9 0-87.7 0-131.6h-30.8v131.6zm-55.3-482h-47.7c-5.2 0-9.9 2.1-13.3 5.6-3.4 3.4-5.5 8.1-5.5 13.3 0 4.1-3.4 7.5-7.5 7.5h-18.4c-5.2 0-9.9 2.1-13.3 5.6-3.4 3.4-5.5 8.1-5.5 13.3 0 5.2 2.1 9.9 5.5 13.3 3.4 3.4 8.1 5.6 13.3 5.6h137.1c5.2 0 9.9-2.1 13.3-5.6 3.4-3.4 5.6-8.1 5.6-13.3 0-5.2-2.1-9.9-5.6-13.3-3.4-3.4-8.1-5.6-13.3-5.6h-18.4c-4.2 0-7.5-3.3-7.5-7.5 0-5.2-2.1-9.9-5.5-13.3-3.4-3.4-8.1-5.6-13.3-5.6z" />
      </svg>
    </button>
  );
};

const LiftLogo = () => {
  return (
    <button
      aria-label="calender 2"
      className=" inline-flex items-center justify-center w-12 h-12 text-gray-800 dark:text-gray-100 transition rounded-lg focus:shadow-outline hover:bg-indigo-200 dark:hover:bg-indigo-800   "
    >
      <svg
        viewBox="0 0 500.03 500.03"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        className="fill-current h-8 w-8 md:h-9 md:w-9"
      >
        <path d="M252.581 395.053c15.688 15.708 15.591 40.979 0 56.57l-35.28 35.28c-15.461 15.5-40.874 15.696-56.57 0l-147.61-147.61c-15.59-15.6-15.59-40.98 0-56.57l35.28-35.28c15.591-15.592 40.862-15.688 56.57 0zM19.068 377.737c-3.609-3.609-9.609-2.946-12.395 1.331-11.067 16.986-7.654 37.463 5.028 50.146l59.11 59.11c12.572 12.572 33.034 16.189 50.14 5.034 4.278-2.79 4.949-8.788 1.338-12.4zm257.773-209.024c-6.25-6.24-16.38-6.24-22.63 0l-85.5 85.5c-6.25 6.25-6.25 16.38 0 22.63l54.47 54.47c6.229 6.229 16.359 6.251 22.63 0l85.5-85.5c6.25-6.25 6.25-16.38 0-22.63zm204.132-46.442c3.612 3.612 9.613 2.939 12.402-1.341 11.146-17.11 7.485-37.577-5.054-50.117l-59.11-59.11C416.56-.939 396.096-4.423 379.088 6.654c-4.278 2.786-4.944 8.787-1.334 12.397zM339.291 13.123c-15.6-15.59-40.98-15.6-56.57 0l-35.28 35.28c-15.591 15.59-15.688 40.861 0 56.57l147.61 147.61c15.723 15.703 40.996 15.575 56.57 0l35.28-35.28c15.59-15.59 15.59-40.97 0-56.57z" />
      </svg>
    </button>
  );
};

const Users = () => {
  return (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
};

const ChevronDownIcon = () => {
  return (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

const EditInactiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
};

const EditActiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
};

const DuplicateInactiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
};

const DuplicateActiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
};

const ArchiveInactiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const ArchiveActiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const MoveInactiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const MoveActiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
};

const DeleteInactiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
};

const DeleteActiveIcon = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
};

const AddIcon = () => {
  return (
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export {
  AddIcon,
  ArchiveActiveIcon,
  ArchiveInactiveIcon,
  ChevronDownIcon,
  DeleteActiveIcon,
  DeleteInactiveIcon,
  DuplicateActiveIcon,
  DuplicateInactiveIcon,
  EditActiveIcon,
  EditInactiveIcon,
  Home,
  LiftLogo,
  Logo,
  Moon,
  MoveActiveIcon,
  MoveInactiveIcon,
  Sun,
  Users,
};
