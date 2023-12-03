import { users } from "@/db/data";

export default async function handler(request, response) {
  const { userId } = req.query;

  const user = users.find((user) => user.id === userId);

  if (!user) {
    return response.status(404).json({ status: 'Not found' });
  }
  response.status(200).json(user);
}
