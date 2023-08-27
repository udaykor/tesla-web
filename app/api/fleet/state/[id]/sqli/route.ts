import { NextResponse } from "next/server"
import pg from "pg";
import { Client } from "pg";


// Non-existent Database - This is a SQLi for learning tainted flows with Snyk
const client = new Client({
  host: 'my.database-server.com',
  port: 5334,
  database: 'dat',
  user: 'database-user',
  password: 'secretpassword!!',
})

const { Pool } = pg;

// // Non-existent Database - This is a SQLi for learning tainted flows with Snyk
const pool = new Pool({
  // SSL by default for SQL is good, not when you have a SQL Injection.
  connectionString: process.env.POSTGRES_URL?.concat("?sslmode=require"),

})

// id and vehicle_id can be numbers?
export async function GET(request: Request, { params }: {params: { id: string}}) {
  
  const stmt = `select * from vehicles WHERE id=${request.url.split('=')[1]}`;
  const res = await pool.query(stmt);

  await client.connect();
  await client.query(stmt);
  
  // Do not return anything
  return NextResponse.json({ 

  })
};
