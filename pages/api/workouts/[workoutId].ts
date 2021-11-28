import { NextApiRequest, NextApiResponse } from 'next';
import {
  deleteWorkoutbyId,
  getWorkoutbyWorkoutId,
  updateWorkoutById,
} from '../../../util/database';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const workout = await getWorkoutbyWorkoutId(Number(req.query.id));
    res.status(200).json(workout);
  } else if (req.method === 'DELETE') {
    const deleteWorkout = await deleteWorkoutbyId(Number(req.query.workoutId));
    return res.status(200).json(deleteWorkout);
  } else if (req.method === 'PATCH') {
    const body = req.body;

    const updatedWorkout = await updateWorkoutById(
      Number(req.query.workoutId),
      {
        title: body.title,
        description: body.description,
        imageUrl: body.imageUrl,
      },
    );

    return res.status(200).json(updatedWorkout);
  }

  return res.status(405);
}
