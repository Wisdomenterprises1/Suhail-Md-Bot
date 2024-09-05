const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348169644468";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_39_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzksXG4gICAgICAgIDg1LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgODksXG4gICAgICAgIDkxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODksXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzksXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDUsXG4gICAgICAgIDUsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDksXG4gICAgICAgIDczLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjksXG4gICAgICAgIDM5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM3LFxuICAgICAgICA0NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVTZTK0tQaWZrbDk2VEtUQmdFS3dLODhndVNtMTF3RGw0YktoSjAramdXdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSFF1aFdvVlRTYkNYOVF5cmh6S1dfQVwiLFxuICBcInBob25lSWRcIjogXCJjOTY1ZDQ5Ny02NWFmLTQxYTQtYTQwNS04NDhlNzMxOGM1MThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkxLFxuICAgICAgMTk5LFxuICAgICAgMTUxLFxuICAgICAgMjUwLFxuICAgICAgMTMzLFxuICAgICAgNTQsXG4gICAgICAyMTUsXG4gICAgICAxOSxcbiAgICAgIDIyMixcbiAgICAgIDEzOSxcbiAgICAgIDI1MCxcbiAgICAgIDIxMSxcbiAgICAgIDU1LFxuICAgICAgNTYsXG4gICAgICAxNTQsXG4gICAgICAxMzcsXG4gICAgICAyMzEsXG4gICAgICA2NyxcbiAgICAgIDIyNyxcbiAgICAgIDc4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MCxcbiAgICAgIDE3NixcbiAgICAgIDI1LFxuICAgICAgMTEzLFxuICAgICAgMzgsXG4gICAgICA4NyxcbiAgICAgIDIxLFxuICAgICAgNzksXG4gICAgICAxNTUsXG4gICAgICAxMjgsXG4gICAgICAxOTAsXG4gICAgICAyNSxcbiAgICAgIDEyMixcbiAgICAgIDE5NCxcbiAgICAgIDE2OCxcbiAgICAgIDE0NSxcbiAgICAgIDE0NSxcbiAgICAgIDMxLFxuICAgICAgOTgsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiU05RNzlHQ0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk2NDQ0Njg6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJXSVNET00gRU5URVJQUklTRVNcIixcbiAgICBcImxpZFwiOiBcIjE4MzQ4NTcxNzMxOTcwNjoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPLzlwclVGRU5iWjU3WUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIitvVzdheFMvL0NJQS9vamI4OWwxNDhsd2pKSENxbGlWVFdydTBhVFdXVWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwia3A3N1huaTBmdGxucXB5V1BKUWlmQXJ2YTJVZVdER0FXMTBaaHZKUzgwSkJiNDVFNU8xcm5EQ2JKOW94TjJ0WG41OVlxcHl1czVwWUcycmQxbmgwQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia1duSnlhTjFsOGNNRjVmT09RQTViWTNGNGJva3Z5VWhaaE9DaHBJNkxmK3FmYTVxNTROem44RGw1OWlQS04zYVpyZ0FKbGZRZFRjeTVyWk1WNDEraWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2OTY0NDQ2ODoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU1NTc5Nzlcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
