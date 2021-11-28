const exercisesWorkouts = [
  {
    workout_id: 1,
    exercise_id: 1,
  },
  {
    workout_id: 1,
    exercise_id: 2,
  },
  {
    workout_id: 1,
    exercise_id: 3,
  },
  {
    workout_id: 1,
    exercise_id: 4,
  },
  {
    workout_id: 1,
    exercise_id: 5,
  },
  {
    workout_id: 2,
    exercise_id: 6,
  },
  {
    workout_id: 2,
    exercise_id: 7,
  },
  {
    workout_id: 2,
    exercise_id: 8,
  },
  {
    workout_id: 2,
    exercise_id: 9,
  },
  {
    workout_id: 2,
    exercise_id: 10,
  },
  {
    workout_id: 3,
    exercise_id: 11,
  },
  {
    workout_id: 3,
    exercise_id: 12,
  },
  {
    workout_id: 3,
    exercise_id: 13,
  },
  {
    workout_id: 3,
    exercise_id: 14,
  },
  {
    workout_id: 3,
    exercise_id: 15,
  },
  {
    workout_id: 4,
    exercise_id: 16,
  },
  {
    workout_id: 4,
    exercise_id: 17,
  },
  {
    workout_id: 4,
    exercise_id: 18,
  },
  {
    workout_id: 4,
    exercise_id: 19,
  },
  {
    workout_id: 4,
    exercise_id: 20,
  },
  {
    workout_id: 5,
    exercise_id: 21,
  },
  {
    workout_id: 5,
    exercise_id: 22,
  },
  {
    workout_id: 5,
    exercise_id: 23,
  },
  {
    workout_id: 5,
    exercise_id: 24,
  },
  {
    workout_id: 5,
    exercise_id: 25,
  },
  {
    workout_id: 6,
    exercise_id: 26,
  },
  {
    workout_id: 6,
    exercise_id: 27,
  },
  {
    workout_id: 6,
    exercise_id: 28,
  },
  {
    workout_id: 6,
    exercise_id: 29,
  },
  {
    workout_id: 6,
    exercise_id: 30,
  },
  {
    workout_id: 7,
    exercise_id: 31,
  },
  {
    workout_id: 7,
    exercise_id: 32,
  },
  {
    workout_id: 7,
    exercise_id: 33,
  },
  {
    workout_id: 7,
    exercise_id: 34,
  },
  {
    workout_id: 7,
    exercise_id: 35,
  },
];

exports.up = async function up(sql) {
  console.log('Inserting exercises_workouts...');
  // Looping over the array and INSERTing each exercise_workout
  for (const exercisesWorkout of exercisesWorkouts) {
    await sql`
      INSERT INTO exercises_workouts
        (workout_id, exercise_id)
      VALUES
        ( ${exercisesWorkout.workout_id}, ${exercisesWorkout.exercise_id});
    `;
  }
};

exports.down = async function down(sql) {
  console.log('Deleting exercises_workouts...');
  for (const exercisesWorkout of exercisesWorkouts) {
    await sql`
      DELETE FROM
				exercises_workouts
      WHERE
        workout_id = ${exercisesWorkout.workout_id} AND exercise_id = ${exercisesWorkout.exercise_id};
    `;
  }
};
