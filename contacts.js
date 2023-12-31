// Libs
import fs from 'fs/promises';
import path from 'path';
// Helpers
import { generateId } from './helpers/generateId.js';
import { checkExistingContact } from './helpers/checkExistingContact.js';

const contactsPath = path.resolve('db', 'contacts.json');

export const listContacts = async () => {
  const buffer = await fs.readFile(contactsPath);

  return JSON.parse(buffer);
};

export const getContactById = async contactId => {
  const allConacts = await listContacts();

  const contactById = allConacts.find(item => item.id === contactId);

  return contactById || null;
};

export const removeContact = async contactId => {
  const allConacts = await listContacts();

  const index = allConacts.findIndex(item => item.id === contactId);

  if (index === -1) {
    return null;
  }

  const [removedContact] = allConacts.splice(index, 1);

  await fs.writeFile(contactsPath, JSON.stringify(allConacts, null, 2));

  return removedContact;
};

export const addContact = async (name, email, phone) => {
  const allConacts = await listContacts();

  const isExistingContact = checkExistingContact(
    allConacts,
    name,
    email,
    phone
  );

  if (isExistingContact) {
    return isExistingContact;
  }

  const newContact = {
    id: await generateId(),
    name,
    email,
    phone,
  };

  allConacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(allConacts, null, 2));

  return newContact;
};
