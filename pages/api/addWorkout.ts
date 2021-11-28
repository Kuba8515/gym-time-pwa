import { NextApiRequest, NextApiResponse } from 'next';
import { insertToUserWorkout, User, UserWorkout } from '../../util/database';
import { Errors } from '../../util/types';

export type RegisterRequest = {
  userId: number;
  workoutId: number;
  userWorkoutId: string;
};

export type RegisterResponse =
  | { errors: Errors }
  | { user: User }
  | { userWorkout: UserWorkout };

export default async function addWorkoutToUser(
  req: NextApiRequest,
  res: NextApiResponse<RegisterResponse>,
) {
  if (!req.body.userId || !req.body.workoutId || !req.body.userWorkoutId) {
    res.status(400).send({
      errors: [
        {
          message:
            'Request does not contain userId, workoutId or userWorkoutId',
        },
      ],
    });
    return;
  }
  try {
    const userId = req.body.userId;

    const workoutId = req.body.workoutId;

    const userWorkoutId = req.body.userWorkoutId;

    const userWorkout: UserWorkout = await insertToUserWorkout({
      userId: userId,
      workoutId: workoutId,
      userWorkoutId: userWorkoutId,
    });

    if (!userWorkout) {
      res.status(500).send({ errors: [{ message: 'Workout not created' }] });
      return;
    }
  } catch (err) {
    res.status(500).send({ errors: [{ message: (err as Error).message }] });
  }
}
