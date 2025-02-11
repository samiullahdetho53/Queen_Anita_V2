//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1AybzQzZEFnL3g2bXMySG9CYk1TZzE5ZDRCN0dQM1Y3UHYxNjJyQ04zVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3M2b2lRY3RYZjQrYVdvVnVvWFVRYU9oeWVxRkVaeC91QkFiNFczWmJsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTCt6Yzk0ajAyNDl6bmsyeVMzUmN0aWJGbW5NcVRJUkdvcEFYWWFxV0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlZWQwWXlwSGJOdVdlREJ0REZyYnB6eDl5enB0Ym9oZFlxTlgxRm5HaDNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFOK0MwbmUvaFV3cHA1RCs2c3J0bkVRUWZ5U2Jtd1BOWkxHb1huWjk4Rnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVFdnRCc1FXTkhiUjNjRFJKbU83UmdFcmtZaTV0SkcySVZMUUhuRDF5bVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VpSzUzdmF3bVhIT1l3VncvRGZueXN4WURDVGlxcVRGRVpIRmRGKzVrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGVYQWVGWFNWblhOSkllUFloUzN5ZDlBZ0wrUWRmZDFkWWNlZmdGQUgyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iks3WTJmZk9BZC9vWGhyTkNtcmxjdUZYaGZqTlRnZGJnVzArS1FCVm1qS0VaQ1hYemJSQ0RzY0c2UkdCblcrSUhGQVJQRWIvY3h3MnUvWDhqRStjbGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE1LCJhZHZTZWNyZXRLZXkiOiJGWWk2bTZKaTVjYkd3aFVwUGdncm93ZWhLZXZVOG1LaG5VRUhpTDlxRGh3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzE0MjgxNzc2M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NjE5RjgzMDlEQjM2QjYzRkMwNUIwRTJFNDc0NjQ5QyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5MjkxODk4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNR3dfeFNTeVNqeTRhaEFJWU5jYTl3IiwicGhvbmVJZCI6ImRmYjAwNTRmLTYzMDgtNDhkZi1iOWJjLWU2MGRlMTVmZDA2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpOXBRcE9GNlNLZmlDbVl1cG43amlSelE5THc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSks2ZGpvRVRTVkdOMldUSmZ5ME84THpuZjdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVDNURMTlBIIiwibWUiOnsiaWQiOiI5MjMxNDI4MTc3NjM6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiU2FtaXVsbGFoIERldGhvIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQajc1L3dCRU9qNXJiMEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJKdjBZd1ZYei9waWhGVUw5Y0JMZ29DdlRQVmJkR1ZJNjVtRHJ2aVVHR0V3PSIsImFjY291bnRTaWduYXR1cmUiOiJGVGsySnh6M1ZoQStqSm1SeXJ1c2VnYzh2ZzRJbnlscWhDbjBnKy9zNjJuZEtTVWlSMWVXRzc4aklhck1jc0tKM2JBbThMaW5GbS9GYzBHMXFYemlBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibGtmeWl6SjdIWVJXUDYvQXc5b3NwcGMrQ21VajhFYmYxZGpkSlg2bHJuZmxFVFdhZEttakRNK3lGblVzbUZHTkd3dy80QVN0OU80NEZEREt6Q0F3Z3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNDI4MTc3NjM6MTNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU2I5R01GVjgvNllvUlZDL1hBUzRLQXIwejFXM1JsU091Wmc2NzRsQmhoTSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTI5MTg5NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPcDAifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
