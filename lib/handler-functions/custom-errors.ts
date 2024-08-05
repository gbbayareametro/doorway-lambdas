export class MatchingError extends Error {
  name: string;
  message: string;
  cause: any;
  constructor({ name, message, cause }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
  }
}
