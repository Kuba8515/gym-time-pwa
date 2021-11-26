import Image from 'next/image';
import Link from 'next/link';

export default function WorkoutCard(props) {
  return (
    <div className="grid border-2 p-2 rounded shadow-sm bg-white dark:bg-gray-800">
      <div className="grid grid-cols-1 m-2 justify-center">
        <h3 className="text-m font-bold">{props.title}</h3>
        <br />
        <p className="text-sm">{props.description}</p>
        <a
          className="hover:bg-blue-100 text-blue-400 p-2"
          href={`/workouts/${props.link}`}
        >
          View this routine
        </a>
      </div>
    </div>
  );
}
