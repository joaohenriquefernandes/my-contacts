import { query } from '../../../database/index.js';
import type { CreateContactDTO } from './dtos/CreateContactDTO.js';
import type { UpdateContactDTO } from './dtos/UpdateContactDTO.js';
import type { Contact } from './entities/Contact.js';
import type { IContactRepository } from './interfaces/IContactRepository.js';

class ContactRepository implements IContactRepository {
  async findAll(orderBy: string = 'asc'): Promise<Contact[] | null> {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
    const rows = await query<Contact>(`
      SELECT contacts.*, categories.name AS category_name FROM contacts
      LEFT JOIN categories
      ON categories.id = contacts.category_id
      ORDER BY contacts.name ${direction}
    `);
    return rows ?? null;
  }

  async findById(id: string): Promise<Contact | null> {
    const [row] = await query<Contact>(`
      SELECT * FROM contacts
      WHERE contacts.id = $1
    `, [id]);
    return row ?? null;
  }

  async findByEmail(email: string): Promise<Contact | null> {
    const [row] = await query<Contact>(`
      SELECT * FROM contacts
      WHERE contacts.email = $1
    `, [email]);
    return row ?? null;
  }

  async create({ name, categoryId, email, phone }: CreateContactDTO): Promise<Contact> {
    const [row] = await query<Contact>(`
      INSERT INTO contacts(name, email, phone, category_id)
      VALUES($1, $2, $3, $4)
      RETURNING *
    `, [name, email, phone, categoryId]);
    return row!;
  }

  async update(id: string, { name, categoryId, email, phone }: UpdateContactDTO): Promise<Contact> {
    const [row] = await query<Contact>(`
        UPDATE contacts
        SET name = $1, email = $2, phone = $3, category_id = $4
        WHERE id = $5
        RETURNING *
    `, [name, email, phone, categoryId, id]);
    return row!;
  }

  async remove(id: string): Promise<void> {
    await query(`
      DELETE FROM contacts
      WHERE id = $1
    `, [id]);
    return;
  }
}

export default new ContactRepository();
