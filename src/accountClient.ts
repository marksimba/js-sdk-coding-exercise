import {Users} from './types/users';
import db from "./databases/users.json";

export default class AccountClient {
    async login(email: string, password: string) {
        return new Promise((resolve, reject) => {
            const user = (<Users>db)[`${email}:${password}`];
            if (user) resolve(user);
            reject('Unknown user');
        });
    }

}
