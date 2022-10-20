import { createLogger, transports, format } from 'winston';
const { combine, timestamp, label, printf, simple, colorize } = format;

const printFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level} : ${message}`;
});

const printLogFormat = {
  file: combine (
    label({
      label: "BACK-PROJECT"
    }),
    timestamp({
      format: 'YYYY-MM-DD HH:mm:dd',    
    }),
    printFormat
  ),
  console: combine (
    colorize(),  
    simple(),
    printFormat
  ),
};

const opts = {
    file: new transports.File({
        filename: 'access.log',
        dirname: './logs',
        level: 'info',
        format: printLogFormat.file,
    }),
    console: new transports.Console({
        level: 'info',
        format: printLogFormat.console,
    }),
}

const logger = createLogger({
  transports: [opts.file],
});

if(process.env.NODE_ENV !== 'production') {
  logger.add(opts.console);
}

// logger.stream = {
//   write: (message:string) => logger.info(message:string)
// }

export default logger;