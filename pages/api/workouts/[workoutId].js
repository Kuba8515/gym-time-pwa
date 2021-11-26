import { getWorkout, getWorkoutbyId } from '../../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const workouts = await getWorkout(Number(req.query.workoutId));
    return res.status(200).json(workouts);
  } else if (req.method === 'DELETE') {
    const deletedUser = await getWorkoutbyId(Number(req.query.workoutId));
    return res.status(200).json(deletedUser);
  }
  return res.status(405);
}
