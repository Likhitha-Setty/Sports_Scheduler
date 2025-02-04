const { Pool } = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sports_management",
  password: "Likhitha@1917",
  port: 5432,
});

pool.on("connect", () => {
  console.log("PostgreSQL connected");
});
pool.on("error", (err) => {
  console.error("Unexpected error on PostgreSQL client", err);
  process.exit(-1); 
});

module.exports = pool;