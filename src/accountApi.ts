import AccountClient from './accountClient';

/**
 *
 */
export default class AccountApi {
    private accountClient: AccountClient;

    /**
     *
     */
    constructor() {
        this.accountClient = new AccountClient();
    }

    /**
     * Attemps to login using the email and password. Logs all login attempts.
     * @param {string} email
     * @param {string} password
     * @returns {User} The account object.
     *
     */
    async login(email: string, password: string) {
        // TODO: Implement logging class and log to track logins
        try{
            const account = await this.accountClient.login(email, password);
            // TODO: Log successful login
            return account;
        }
        catch(e){
            // TODO: Log failed login
            Promise.reject(e);
        }
    }

}
