const workouts = [
  {
    id: 1,
    title: 'Very beginner workout plan',
    description:
      'Goal: general strength, stability, mobility and conditioning / Ability level: very beginner - beginner',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519275/next_pwa/beginner_h9ojml.jpg',
  },
  {
    id: 2,
    title: 'Lean and mean',
    description:
      'Goal: blend of muscle building, fat loss, and strength / Ability level: beginner and intermediate',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519279/next_pwa/lean_and_mean_njuzkj.jpg',
  },
  {
    id: 3,
    title: 'Bodyweight workout',
    description:
      'Goal: general strength, stability, mobility and conditioning / Ability level: intermediate - advanced',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519265/next_pwa/bodyweight_rzxjn7.jpg',
  },

  {
    id: 4,
    title: 'Strong as an ox',
    description:
      'Goal: power and strength / Ability level: intermediate - advanced',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519275/next_pwa/strong_swh4lt.jpg',
  },
  {
    id: 5,
    title: 'Bulk up',
    description:
      'Goal: increase muscle-mass, fat loss / Ability level: intermediate',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519271/next_pwa/bulkup_s9lflc.jpg',
  },
  {
    id: 6,
    title: 'Big friggin arms',
    description:
      'Goal: re-stimulate muscle growth / Ability level: All levels, suggested for intermediates',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519271/next_pwa/bigarms_modzx9.jpg',
  },
  {
    id: 7,
    title: 'Build for the beach',
    description:
      'Goal: muscle-building, fat loss, and athletic conditioning / Ability level: intermediate (scaleable for beginner)',
    imageUrl:
      'https://res.cloudinary.com/ds0l7ww1a/image/upload/v1637519258/next_pwa/beachbody_wph2dx.jpg',
  },
];

exports.up = async function up(sql) {
  console.log('Inserting workouts...');
  for (const workout of workouts) {
    await sql`
      INSERT INTO workouts
        (title, description, image_url)
      VALUES
        (${workout.title}, ${workout.description}, ${workout.imageUrl});
    `;
  }
};

exports.down = async function down(sql) {
  console.log('Deleting workouts...');
  for (const workout of workouts) {
    await sql`
      DELETE FROM
        workouts
      WHERE
        title = ${workout.title} AND description = ${workout.description} AND image_url = ${workout.imageUrl};
    `;
  }
};
