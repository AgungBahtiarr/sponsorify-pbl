import { db, Role, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Role).values([
		{ id: 1, role: "Event Organizer" },
		{ id: 2, role: "Sponsor" }
	])

	await db.insert(User).values([
		{ name: "Agung Bahtiar", email: "agungbahtiar050@gmail.com", idRole: 1 }
	])
}
