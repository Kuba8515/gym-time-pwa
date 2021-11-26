import { getWorkouts } from '../../../util/database';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const workouts = await getWorkouts();
    return res.status(200).json(workouts);
  }
  return res.status(405);
}
