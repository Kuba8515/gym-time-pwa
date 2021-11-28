exports.up = async function up(sql) {
  console.log('Creating user_workout join / junction table...');
  await sql`
    CREATE TABLE user_workout (
      id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      user_id integer REFERENCES users(id) ON DELETE CASCADE,
      workout_id integer REFERENCES workouts(id) ON DELETE CASCADE,
      workout_user_id INTEGER
    );
  `;
};

exports.down = async function down(sql) {
  console.log('Dropping user_workout join / junction table...');
  await sql`DROP TABLE user_workout`;
};
