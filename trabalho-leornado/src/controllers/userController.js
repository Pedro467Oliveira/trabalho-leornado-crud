import { getUsersService } from "../services/userService.js";

export async function getUsersController(req, res) {
  try {
    const users = await getUsersService(req.db);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar usuários." });
  }
}