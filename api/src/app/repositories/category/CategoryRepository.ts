import { query } from '../../../database/index.js';
import type { CreateCategoryDTO } from './dto/CreateCategoryDTO.js';
import type { Category } from './entities/Category.js';
import type { ICategoryRepository } from './interfaces/ICategoryRepository.js';

class CategoryRepository implements ICategoryRepository {
  async findAll(): Promise<Category[] | null> {
    const rows = await query<Category>(`
      SELECT * FROM categories
      ORDER BY name
    `);
    return rows ?? null;
  }
  async create({ name }: CreateCategoryDTO): Promise<Category> {
    const [row] = await query<Category>(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *
    `, [name]);
    return row!;
  }
}

export default new CategoryRepository();
