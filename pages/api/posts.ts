import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const post = req.body;
    console.log('Received new post:', post);
    return res.status(201).json({ message: 'Post created (mock)' });
  }
  res.status(405).json({ message: 'Method not allowed' });
}