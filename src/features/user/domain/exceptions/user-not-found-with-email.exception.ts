export class UserNotFoundWithEmailException extends Error {
  constructor(public readonly email: string) {
    super(`User with email ${email} not found.`);
  }
}
