import Image from 'next/image';
import Link from 'next/link';

export default function WorkoutCard(props) {
  return (
    <div className="flex border-2 p-2 rounded shadow-sm bg-white">
      <div className="flex flex-col m-2">
        {/* <Link href={`/workouts/${props.link}`}> */}
        {/* <a> */}
        <h3 className="text-m font-bold">{props.title}</h3>
        <br />
        <p className="text-sm">{props.description}</p>
        <a
          className="hover:bg-blue-100 text-blue-400 p-2"
          href={`/workouts/${props.link}`}
        >
          View this routine
        </a>
        {/* </a> */}
        {/* </Link> */}
      </div>
    </div>
  );
}
