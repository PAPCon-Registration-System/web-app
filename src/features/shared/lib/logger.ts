import consola from "consola";

const environment = process.env.NODE_ENV;

/**
 * Logger class for logging messages with optional context and data.
 * Supports both instance-based and static logging.
 */
export class Logger {
  private context: object | null;

  /**
   * Creates an instance of Logger with an optional context object.
   * @param {object | null} context - Context to include in all log messages (default is null).
   *
   * @example
   * const customLogger = new Logger({ serverId: '123', userId: 456 });
   * customLogger.log('Operation started');
   */
  constructor(context: object | null = null) {
    this.context = context;
  }

  private static formatPayload(data?: object) {
    return data ? { ...data, environment } : { environment };
  }

  private formatWithContext(data?: object) {
    return {
      ...Logger.formatPayload(data),
      ...(this.context ? { context: this.context } : {}),
    };
  }

  static log(msg: string, data?: object) {
    consola.info(msg, Logger.formatPayload(data));
  }

  log(msg: string, data?: object) {
    consola.info(msg, this.formatWithContext(data));
  }

  static warn(msg: string, data?: object) {
    consola.warn(msg, Logger.formatPayload(data));
  }

  warn(msg: string, data?: object) {
    consola.warn(msg, this.formatWithContext(data));
  }

  static error(msg: string, data?: object) {
    consola.error(msg, Logger.formatPayload(data));
  }

  error(msg: string, data?: object) {
    consola.error(msg, this.formatWithContext(data));
  }
}
