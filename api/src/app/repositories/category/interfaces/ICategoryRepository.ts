import type { CreateCategoryDTO } from '../dto/CreateCategoryDTO.js';
import type { Category } from '../entities/Category.js';

export interface ICategoryRepository {
  findAll(): Promise<Category[] | null>
  create(createCategoryDto: CreateCategoryDTO): Promise<Category>
}
