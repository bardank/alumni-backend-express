export class HttpError extends Error {
  type
  code
  constructor(args) {
    super(args.message);
    this.message = args.message ?? "";
    this.name = args.type;
    this.type = args.type;
    this.code = args.code;
  }
}
