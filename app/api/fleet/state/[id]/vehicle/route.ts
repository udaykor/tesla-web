import { getVehicleData } from "@tesla-web/lib/state"
import { url } from "inspector";
import { NextResponse } from "next/server"
import { db } from '@vercel/postgres'; 

// id and vehicle_id can be numbers?
export async function GET(request: Request, { params }: {params: { id: string}}) {
  const vehicle = await getVehicleData(params.id);
  console.log('doing this')
  const dbClient = await db.connect();
  const sqResponse = await dbClient.sql`select ${request.url.split('=')[1]}`;

  console.log(sqResponse)
  return NextResponse.json({ vehicle })
};

export const runtime = 'edge';
