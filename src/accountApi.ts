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
     * @param {String} email
     * @param {Boolean} password
     * @returns {Object} The account object.
     *
     */
    async login(email, password) {
        this.accountClient.login(email, password);
    }

}
