export class Logger {
  static info(message, ...rest) {
    const date = new Date()
      .toISOString()
      .replace(/T/, " ") // replace T with a space
      .replace(/\..+/, ""); // delete the dot and everything after;
    return console.log(`[${date}] ${message}`, ...rest);
  }

  static error(message, ...rest) {
    const date = new Date()
      .toISOString()
      .replace(/T/, " ") // replace T with a space
      .replace(/\..+/, ""); // delete the dot and everything after;
    return console.error(`[${date}] ${message}`, ...rest);
  }
}
