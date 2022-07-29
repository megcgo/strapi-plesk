module.exports = ({ env }) => ({
  // defaultConnection: env('DATABASE_CONNECTION_NAME'),
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "lxmaxpt_strapi1"),
      user: env("DATABASE_USERNAME", "lxmaxpt_strapi1"),
      password: env("DATABASE_PASSWORD", "Wfv03z64%"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
