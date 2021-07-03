import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({
          status: 'Success',
          data: user,
        });
      } catch (error) {
        res.status(400).json({ status: 'Fail', message: 'Error create user' });
      }
      break;

    default:
      res.status(400).json({ status: 'Fail', message: 'Error user' });
      break;
  }
}
