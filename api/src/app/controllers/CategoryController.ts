import type { Request, Response } from 'express';
import CategoryRepository from '../repositories/category/CategoryRepository.js';

type Body = {
  name: string;
}

class CategoryController {
  async index(request: Request, response: Response) {
    const categories = await CategoryRepository.findAll();
    return response.json({ categories });
  }

  async store(request: Request<unknown, unknown, Body>, response: Response) {
    const { name } = request.body;
    if(!name) return response.status(400).json({ error: 'Name is required.'});
    const category = await CategoryRepository.create({ name });
    return response.status(201).json({ category });
  }
}

export default new CategoryController();
