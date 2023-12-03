import { users } from "@/db/data";

export default async function handler(request, response) {
  response.status(200).json(users);
}
