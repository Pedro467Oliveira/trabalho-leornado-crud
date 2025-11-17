import * as userRepo from '../repositories/userRepository.js';

export async function createUserService(data) {
  const { login, email, senha, foto } = data;

  if (!login || !email || !senha) {
    const err = new Error('Campos obrigatórios: login, email, senha.');
    err.status = 400;
    throw err;
  }

  const existsLogin = await userRepo.findUserByLogin(login);
  if (existsLogin) {
    const err = new Error('Login já cadastrado.');
    err.status = 409;
    throw err;
  }

  const existsEmail = await userRepo.findUserByEmail(email);
  if (existsEmail) {
    const err = new Error('Email já cadastrado.');
    err.status = 409;
    throw err;
  }

  return await userRepo.createUser({ login, email, senha, foto });
}

import { findAllUsers } from "../repositories/userRepository.js";

export async function getUsersService(db) {
  return await findAllUsers(db);
}
