import * as userService from '../services/userService.js';

export async function createUser(req, res) {
  try {
    const result = await userService.createUserService(req.body);
    res.status(201).location(`/usuario/${result.id}`).json({
      id: result.id,
      message: 'Usuário criado com sucesso.'
    });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
}