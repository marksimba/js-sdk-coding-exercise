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
     * 
     * @param {string} email
     * @param {string} password
     * @desc Given email and password, attempt to login. Log all login attempts.
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
