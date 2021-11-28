import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

export type User = {
  id: number;
  username: string;
  name: string | null;
  email: string | null;
};

export type Workout = {
  id: number;
  title: string;
  description: string;
  userId: number;
};

export type Exercise = {
  id: number;
  title: string;
  description: string;
  benefits: string;
  imageUrl: string;
  sets: string;
  reps: string;
  smallImg: string;
};

export type UserWorkout = {
  userWorkoutId: number;
  userId: number;
  workoutId: number;
};

export type ExerciseWorkout = {
  exerciseWorkout: number;
  workoutId: number;
  exerciseId: number;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export type Session = {
  id: number;
  sessionsToken: string;
  userId: number;
  expiryTimestamp: Date;
};

dotenvSafe.config();

// Type needed for the connection function below
declare module globalThis {
  let postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but

    // has an "unauthorized" certificate

    // https://devcenter.heroku.com/changelog-items/852

    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.postgresSqlClient) {
      globalThis.postgresSqlClient = postgres();
    }
    sql = globalThis.postgresSqlClient;
  }
  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getUsers() {
  const users = await sql<User[]>`
    SELECT
      id, name, username, email
    FROM
      users;
  `;
  return users.map((user) => {
    return camelcaseKeys(user);
  });
}

export async function getUser(id: number) {
  const [user] = await sql<[User]>`
    SELECT
      id, name, username, email
    FROM
      users
    WHERE
      id = ${id};
  `;

  return camelcaseKeys(user);
}

export async function getUserWithPasswordHashByUsername(username: string) {
  const [user] = await sql<[UserWithPasswordHash | undefined]>`
    SELECT
      *
    FROM
      users
    WHERE
      username = ${username};
  `;
  return user && camelcaseKeys(user);
}

export async function createUser({
  name,
  username,
  email,
}: {
  name: string;
  username: string;
  email: string;
}) {
  const [user] = await sql<[User | undefined]>`
    INSERT INTO users
      (name, username, email)
    VALUES
      (${name}, ${username}, ${email})
    RETURNING
      id,
      name,
      username,
      email;
  `;
  return user && camelcaseKeys(user);
}

export async function insertUser({
  name,
  username,
  email,
  passwordHash,
}: {
  name: string;
  username: string;
  email: string;
  passwordHash: string;
}) {
  const [user] = await sql<[User | undefined]>`
    INSERT INTO users
      (name, username, email, password_hash)
    VALUES
      (${name}, ${username}, ${email}, ${passwordHash})
    RETURNING
      id,
      username,
      name,
      email
  `;
  return user && camelcaseKeys(user);
}

export async function updateUserById(
  id: number,
  {
    name,
    username,
    email,
  }: {
    name: string;
    username: string;
    email: string;
  },
) {
  const [user] = await sql<[User | undefined]>`
    UPDATE
      users
    SET
      name = ${name},
      username = ${username},
      email = ${email}
    WHERE
      id = ${id}
    RETURNING
      id,
      name,
      username,
      email;
  `;
  return user && camelcaseKeys(user);
}

export async function deleteUserById(id: number) {
  const [user] = await sql<[User | undefined]>`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING
      id,
      username,
      email;
  `;
  return user && camelcaseKeys(user);
}

export async function getWorkoutByUserId(userId: number) {
  const workouts = await sql<[Workout]>`
    SELECT
      *
    FROM
      workouts
    WHERE
      user_id = ${userId}
  `;
  return workouts.map((workout) => camelcaseKeys(workout));
}

export async function getUserBySessionToken(token: string | undefined) {
  if (!token) return undefined;

  const [user] = await sql<[User | undefined]>`
    SELECT
      users.id,
      users.name,
      users.email,
      users.username
    FROM
      sessions,
      users
    WHERE
      sessions.sessions_token = ${token} AND
      sessions.user_id = users.id
  `;
  return user && camelcaseKeys(user);
}

export async function getValidSessionByToken(token: string) {
  if (!token) return undefined;

  const [session] = await sql<[Session | undefined]>`
    SELECT
      *
    FROM
      sessions
    WHERE
      sessions_token = ${token} AND
      expiry_timestamp > NOW()
  `;

  return session && camelcaseKeys(session);
}

export async function createSession(sessionsToken: string, userId: number) {
  const [session] = await sql<[Session]>`
    INSERT INTO sessions
      (sessions_token, user_id)
    VALUES
      (${sessionsToken}, ${userId})
    RETURNING
      *
  `;

  return camelcaseKeys(session);
}

export async function deleteExpiredSessions() {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      expiry_timestamp < NOW()
    RETURNING
      *
  `;

  return sessions.map((session) => camelcaseKeys(session));
}

export async function deleteSessionByToken(token: string) {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      sessions_token = ${token}
    RETURNING
      *
  `;

  return sessions.map((session) => camelcaseKeys(session))[0];
}

export async function getExercises() {
  const exercises = await sql<Exercise[]>`
    SELECT
      id, title, description, benefits, image_url, sets, reps, small_img
    FROM
      exercises;
  `;
  return exercises.map((exercise) => {
    return camelcaseKeys(exercise);
  });
}

export async function getExercise(id: number) {
  const [exercise] = await sql<[Exercise]>`
    SELECT
      id, title, description, benefits, image_url, sets, reps, small_img
    FROM
      exercises
    WHERE
      id = ${id};
  `;

  return camelcaseKeys(exercise);
}

export async function getWorkouts() {
  const workouts = await sql<Workout[]>`
    SELECT
      id, title, description
    FROM
      workouts;
  `;
  return workouts.map((workout) => {
    return camelcaseKeys(workout);
  });
}

export async function getWorkout(id: number) {
  const workout = await sql<Workout[]>`
    SELECT
      *
    FROM
      workouts
    WHERE
      id = ${id};
  `;

  return camelcaseKeys(workout[0]);
}

export async function getWorkoutbyWorkoutId(workoutId: number) {
  if (!workoutId) return undefined;
  const [workouts] = await sql<[Workout]>`
    SELECT
      *
    FROM
      workouts
    WHERE
      id = ${workoutId};
  `;

  return camelcaseKeys(workouts);
}

export async function deleteWorkoutbyId(id: number) {
  const workouts = await sql`
  DELETE FROM
    workouts
  WHERE
    id = ${id}
  RETURNING
    *;
`;
  return camelcaseKeys(workouts[0]);
}

export async function updateWorkoutById(
  id: number,
  {
    title,
    description,
    imageUrl,
  }: {
    title: string;
    description: string;
    imageUrl: string;
  },
) {
  const workouts = await sql`
    UPDATE
      workouts
    SET
      title = ${title},
      description = ${description},
      image_url = ${imageUrl}
    WHERE
      id = ${id}
    RETURNING
      id,
      title,
      description,
      image_url
  `;
  return camelcaseKeys(workouts[0]);
}

export async function getExercisebyWorkout(workoutId: number) {
  const exercises = await sql<[Exercise]>`
    SELECT
      exercises.id,
      exercises.title,
      exercises.description,
      exercises.sets,
      exercises.reps,
      exercises.small_img
    FROM
      workouts,
      exercises_workouts,
      exercises
    WHERE
      workouts.id = ${workoutId} AND
      exercises_workouts.workout_id = workouts.id AND
      exercises.id = exercises_workouts.exercise_id;
  `;
  return exercises.map((exercise) => camelcaseKeys(exercise));
}

export async function insertToUserWorkout({
  userId,
  workoutId,
  userWorkoutId,
}: {
  userId: number;
  workoutId: number;
  userWorkoutId: number;
}) {
  const [userWorkout] = await sql<[UserWorkout]>`
      INSERT INTO wantlist
        (user_id, workout_id, workout_user_id)
      VALUES
        (${userId}, ${workoutId}, ${userWorkoutId})
      RETURNING
        id,
        user_id,
        workout_id,
        workout_user_id;
    `;
  return camelcaseKeys(userWorkout);
}
