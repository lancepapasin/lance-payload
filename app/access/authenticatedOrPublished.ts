import type { Access } from 'payload';

// Logged-in users can read drafts; everyone else only sees published documents.
export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) return true;
  return { _status: { equals: 'published' } };
};
