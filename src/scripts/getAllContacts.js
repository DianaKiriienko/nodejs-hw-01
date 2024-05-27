import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const contacts = JSON.parse(data);

        return contacts;
    } catch (error) {
        console.log(error);
        return [];
    }
};

console.log(await getAllContacts());
