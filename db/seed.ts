import { db, Role } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Role).values([
		{ id: 1, role: "Event Organizer" },
		{ id: 2, role: "Sponsor" }
	])
}
