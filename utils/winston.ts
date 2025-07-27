import winston from 'winston';

export const logger = winston.createLogger({
    level: 'silly', 
    format: winston.format.combine(        
        winston.format.timestamp(),        
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level.toUpperCase()}]: ${message}`;
        }),
        winston.format.colorize({ all: true })
    ),
    transports: [
        new winston.transports.Console(), 
        new winston.transports.File({ filename: 'logs/test-logs.log' }) 
    ]
});

