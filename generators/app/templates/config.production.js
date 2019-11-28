module.exports = {
  port: 3000,
  uploads: 'uploads',
  attachmentsPath: 'attachments',
  SECRET: '0xD58F835B69D207A76CC5F84a70a1D0d4C79dAC95',
  logger: {
    file: {
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '200m',
      maxFiles: '1m',
      level: 'info'
    }
  },
  ormconfig: {
    name: 'default',
    type: 'sqlite',
    database: 'db.sqlite',
    synchronize: true,
    logging: true
  },
  googleFontAPIKey: ''
}
