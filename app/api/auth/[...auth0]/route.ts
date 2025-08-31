import { handleAuth } from '@auth0/nextjs-auth0';
import type { Session } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

// Force this route to use Node.js runtime instead of Edge to avoid compatibility issues
export const runtime = 'nodejs';

const afterCallback = (
  _req: NextApiRequest,
  _res: NextApiResponse,
  session: Session
): Session => {
  return session;
};

// Configure Auth0 handlers
export const GET = handleAuth();

// Export POST to handle form submissions
export const POST = handleAuth();

