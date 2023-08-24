import { NextResponse } from "next/server"
import pg from "pg";


const { Pool } = pg;

const pool = new Pool({
  // SSL by default for SQL is good, not when you have a SQL Injection.
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",

})

// id and vehicle_id can be numbers?
export async function GET(request: Request, { params }: {params: { id: string}}) {
  
  const query = `select * from vehicles WHERE id=${request.url.split('=')[1]}`;

  const res = await pool.query(query);

  console.log(res);
  
  return NextResponse.json({ res })
};
