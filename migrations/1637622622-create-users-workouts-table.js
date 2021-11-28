exports.up = async function up(sql) {
  console.log('Creating users_workouts join / junction table...');
  await sql`
    CREATE TABLE users_workouts (
      id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      user_id integer REFERENCES users(id) ON DELETE CASCADE,
      workout_id integer REFERENCES workouts(id) ON DELETE CASCADE,
      workout_user_id INTEGER
    );
  `;
};

exports.down = async function down(sql) {
  console.log('Dropping users_workouts join / junction table...');
  await sql`DROP TABLE users_workouts`;
};
