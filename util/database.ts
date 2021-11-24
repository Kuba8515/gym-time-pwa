import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

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
};

export type Exercise = {
  id: number;
  title: string;
  description: string;
  benefits: string;
  imageUrl: string;
  bodyPart: string | null;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export type Session = {
  id: number;
  token: string;
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
  // Heroku setup
  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    // In development, connect only once to database !
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
      workouts.id,
      workouts.title,
      workouts.description
    FROM
      users,
      users_workouts,
      workouts
    WHERE
      users.id = ${userId} AND
      users_workouts.user_id = users.id AND
      users_workouts.workout_id = workouts.id;
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

export async function createSession(token: string, userId: number) {
  const [session] = await sql<[Session]>`
    INSERT INTO sessions
      (sessions_token, user_id)
    VALUES
      (${token}, ${userId})
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
      id, title, description, benefits, image_url, body_part
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
      id, title, description, benefits, image_url, body_part
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
  const [workout] = await sql<[Workout]>`
    SELECT
      id, title, description, image_url
    FROM
      workouts
    WHERE
      id = ${id};
  `;

  return camelcaseKeys(workout);
}

export async function getExercisebyWorkout(workoutId: number) {
  const exercises = await sql<[Exercise]>`
    SELECT
      exercises.id,
      exercises.title,
      exercises.description
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

export async function getExercisesbyBodypart(bodyPart: string) {
  // if (!bodyPart) return undefined;
  const exercises = await sql<Exercise[]>`
    SELECT
      body_part
    FROM
      exercises
    WHERE
      body_part = ${bodyPart}
  `;
  return exercises.map((exercise) => camelcaseKeys(exercise));
}
