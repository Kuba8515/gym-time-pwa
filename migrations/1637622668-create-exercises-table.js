exports.up = async function up(sql) {
  console.log('Creating exercises table...');
  await sql`
    CREATE TABLE exercises (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      title VARCHAR(60) NOT NULL,
      description VARCHAR(800) NOT NULL,
      benefits VARCHAR(500) NOT NULL,
			image_url VARCHAR(300) NOT NULL,
      body_part VARCHAR(20)
    );
  `;
};

exports.down = async function down(sql) {
  console.log('Dropping exercises table...');
  await sql`DROP TABLE exercises;`;
};