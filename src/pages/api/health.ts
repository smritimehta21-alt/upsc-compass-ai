import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  status: string;
  message: string;
  timestamp: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed', timestamp: new Date().toISOString() });
  }

  res.status(200).json({
    status: 'ok',
    message: 'API is running',
    timestamp: new Date().toISOString(),
  });
}
