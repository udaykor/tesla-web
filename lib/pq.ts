import pg from "pg";


const { Pool } = pg;

  // SSL by default for SQL is good
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

const executeQuery = async (statement: string) => {
  const response = await pool.query(statement);
};

export default executeQuery;
