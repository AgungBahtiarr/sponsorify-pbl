import type { APIRoute } from "astro";
import { db, eq, Events, } from "astro:db";


export const GET: APIRoute = async ({ params, request }) => {
  const events = await db.select().from(Events);
  return new Response(JSON.stringify({
    events
  })
  )
}


export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const name = body.name;
  const events = await db.select().from(Events).where(eq(name as any, Events.name));
  return new Response(JSON.stringify({
    name: name,
  })
  )
}