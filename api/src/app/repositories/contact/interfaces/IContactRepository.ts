import type { CreateContactDTO } from '../dtos/CreateContactDTO.js';
import type { UpdateContactDTO } from '../dtos/UpdateContactDTO.js';
import type { Contact } from '../entities/Contact.js';

export interface IContactRepository {
  findAll(orderBy: string): Promise<Contact[] | null>;
  findById(id: string): Promise<Contact | null>
  findByEmail(email: string): Promise<Contact | null>
  create(createContactDto: CreateContactDTO): Promise<Contact>
  update(id: string, updateContactDto: UpdateContactDTO): Promise<Contact>
  remove(id:  string): Promise<void>
}
