// Libs
import { Command } from 'commander';
// Contacts API
import * as API from './contacts.js';

const program = new Command();

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await API.listContacts();
      return console.log(allContacts);

    case 'get':
      const contactById = await API.getContactById(id);
      return console.log(contactById);

    case 'add':
      const newContact = await API.addContact(name, email, phone);
      return console.log(newContact);

    case 'remove':
      const removedContact = await API.removeContact(id);
      return console.log(removedContact);

    default:
      return console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
