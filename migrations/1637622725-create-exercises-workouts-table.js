exports.up = async function up(sql) {
  console.log('Creating exercises_workouts join / junction table...');
  await sql`
    CREATE TABLE exercises_workouts (
      PRIMARY KEY (exercise_id, workout_id),
      exercise_id integer REFERENCES exercises(id) ON DELETE CASCADE,
      workout_id integer REFERENCES workouts(id) ON DELETE CASCADE
    );
  `;
};

exports.down = async function down(sql) {
  console.log('Dropping exercises_workouts join / junction table...');
  await sql`DROP TABLE exercises_workouts`;
};
