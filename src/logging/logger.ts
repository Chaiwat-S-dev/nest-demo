import { transports, format } from 'winston'
import { WinstonModule } from 'nest-winston'
import 'winston-daily-rotate-file'


export const Logger = () => {
  return WinstonModule.createLogger({
    transports: [
      // logging error level
      new transports.DailyRotateFile({
        filename: `logs/%DATE%-error.log`, 
        level: 'error',
        format: format.combine(format.timestamp(), format.json()),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxFiles: '30d',
      }),
      // logging all level
      new transports.DailyRotateFile({
        filename: `logs/%DATE%-combined.log`,
        format: format.combine(format.timestamp(), format.json()),
        datePattern: 'YYYY-MM-DD',
        zippedArchive: false,
        maxFiles: '30d',
      }),
        // we also want to see logs in our console
      new transports.Console({
        format: format.combine(
          format.cli(),
          format.splat(),
          format.timestamp(),
          format.printf((info) => {
            return `${info.timestamp} ${info.level}: ${info.message}`
          }),
        ),
      }),
    ],
  })
}