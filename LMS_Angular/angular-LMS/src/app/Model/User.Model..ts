export class User {
    userId: number;
    roleType: number;
    email: string;
    password: string;
    username: string;
    firstName: string;
    lastName: string;
    isBlock: boolean;
    constructor(
        userId: number,
        roleType: number,
        email: string,
        password: string,
        username: string,
        firstName: string,
        lastName: string,
        isBlock: boolean
    ) {
        this.userId = userId;
        this.roleType = roleType;
        this.email = email;
        this.password = password;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.isBlock = isBlock;
    }
}
