export default function WorkoutCard(props) {
  return (
    <div className="grid border-2 p-2 rounded shadow-sm bg-white dark:bg-gray-800 my-4">
      <div className="grid grid-cols-1 justify-center">
        <h3 className="text-m font-bold">{props.title}</h3>
        <p className="text-sm mt-2">{props.description}</p>
        <a
          className="hover:bg-blue-100 text-blue-400 p-2 hover:text-blue-900"
          href={`/workouts/${props.link}`}
        >
          View this routine
        </a>
      </div>
    </div>
  );
}
