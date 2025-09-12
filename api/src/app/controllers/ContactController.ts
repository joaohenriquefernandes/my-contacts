import type { Request, Response } from 'express';
import ContactRepository from '../repositories/ContactRepository.js';

type Params = {
  id: string
}

type Body = {
  name: string;
  email: string;
  phone: string;
  categoryId: string;
}

class ContactController {
  index(request: Request, response: Response) {
    response.send('Hello');
  }

  async show(request: Request<Params>, response: Response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if(!contact) return response.status(404).json({ error: 'Contact not found.' });
    return response.json({ contact });
  }

  async store(request: Request<unknown, unknown, Body>, response: Response) {
    const { categoryId, email, name, phone } = request.body;
    if(!name) return response.status(400).json({ error: 'Name is required.'});
    const contactsExists = await ContactRepository.findByEmail(email);
    if(contactsExists) return response.status(400).json({ error: 'This e-mail is already in use' });
    const contact = await ContactRepository.create({ categoryId, email, name, phone });
    return response.json ({ contact });
  }

  async update(request: Request<Params, unknown, Body>, response: Response) {
    const { id } = request.params;
    const { categoryId, email, name, phone } = request.body;
    if(!name) return response.status(400).json({ error: 'Name is required.'});
    const contactExists = await ContactRepository.findById(id);
    if(!contactExists) return response.status(404).json({ error: 'Contact not found.' });
    const contactEmail = await ContactRepository.findByEmail(email);
    if(contactEmail && contactEmail.id !== id) return response.status(400).json({ error: 'This e-mail is already in use' });
    const contact = await ContactRepository.update(id, { name, email, phone, categoryId });
    return response.json({ contact });
  }

  async delete(request: Request<Params>, response: Response) {
    const { id } = request.params;
    const contact = await ContactRepository.findById(id);
    if(!contact) return response.status(404).json({ error: 'Contact not found.' });
    await ContactRepository.remove(id);
    return response.sendStatus(204);
  }
}

export default new ContactController();
