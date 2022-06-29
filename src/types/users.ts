export interface User{
    accountId: string;
    name: string;
    email: string;
}

export interface Users{
    [key: string]: User;
}