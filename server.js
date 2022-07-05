const strapi = require("@strapi/strapi");
strapi({
  autoReload: true,
  serveAdminPanel: true,
}).start();
