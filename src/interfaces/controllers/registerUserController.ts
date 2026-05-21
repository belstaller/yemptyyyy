import { NextApiRequest, NextApiResponse } from 'next';
import { RegisterUser } from '../../application/use-cases/RegisterUser';
import { InMemoryUserRepository } from '../../infrastructure/repositories/InMemoryUserRepository';

const repository = new InMemoryUserRepository();
const registerUser = new RegisterUser(repository);

export default async function registerUserController(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { id, email } = req.body;
      await registerUser.execute({ id, email });
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
