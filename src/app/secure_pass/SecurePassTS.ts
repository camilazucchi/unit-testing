export class SecurePass {
    public checkPassword(password: string): boolean {
        return password.length >= 8 ? true : false;
    }
}