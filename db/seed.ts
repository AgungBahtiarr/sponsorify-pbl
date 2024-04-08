import { db, Roles, Users } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Roles).values([
		{ id: 1, role: "Event Organizer" },
		{ id: 2, role: "Sponsor" }
	])

	await db.insert(Users).values([
		{ name: "Agung Bahtiar", email: "agungbahtiar050@gmail.com", idRole: 1 }
	])
}
