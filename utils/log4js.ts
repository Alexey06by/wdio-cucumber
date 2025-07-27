    import log4js from 'log4js';

    log4js.configure({
        appenders: {
            console: { type: 'console' },
            file: { type: 'file', filename: 'logs/test.log' }
        },
        categories: {
            default: { appenders: ['console', 'file'], level: 'debug' }
        }
    });

    export const logger = log4js.getLogger(' ');


    
    
    
    
    
