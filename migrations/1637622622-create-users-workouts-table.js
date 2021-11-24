exports.up = async function up(sql) {
  console.log('Creating users_workouts join / junction table...');
  await sql`
    CREATE TABLE users_workouts (
      PRIMARY KEY (user_id, workout_id),
      user_id integer REFERENCES users(id) ON DELETE CASCADE,
      workout_id integer REFERENCES workouts(id) ON DELETE CASCADE
    );
  `;
};

exports.down = async function down(sql) {
  console.log('Dropping users_workouts join / junction table...');
  await sql`DROP TABLE users_workouts`;
};
