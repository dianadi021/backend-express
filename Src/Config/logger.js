const path = require("path");
require("winston-daily-rotate-file");
const { createLogger, transports, format } = require("winston");

const transportJSON = new transports.DailyRotateFile({
  filename: path.join(__dirname, "../Logs/Activities/%DATE%.json"),
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "30d",
  format: format.combine(format.timestamp(), format.json()),
});

const transportLog = new transports.DailyRotateFile({
  filename: path.join(__dirname, "../Logs/Post-Datas/%DATE%.log"),
  datePattern: "YYYY-MM-DD",
  zippedArchive: false,
  maxSize: "20m",
  maxFiles: "30d",
  format: format.combine(format.timestamp(), format.simple()),
});

const Main = createLogger({
  level: "info",
  transports: [transportJSON, transportLog, new transports.Console()],
});

module.exports = Main;
