import { Categories, db, Roles, Users, Sponsor } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Roles).values([
		{ id: 1, role: "Event Organizer" },
		{ id: 2, role: "Sponsor" },
	]);

	await db.insert(Users).values([
		{ name: "Agung Bahtiar", email: "agungbahtiar050@gmail.com", idRole: 1 },
		{ name: "Rifqi Nailal Faizin", email: "rifqi@gmail.com", idRole: 2 },
	]);

	await db.insert(Categories).values([
		{ id: 1, category: "Sport" },
		{ id: 2, category: "Food industry" },
		{ id: 3, category: "Health care industry" },
		{ id: 4, category: "Electronic" },
		{ id: 5, category: "Fashion" },
	]);

	await db.insert(Sponsor).values([
		{
			id: 1,
			name: "Nike, Inc.",
			address: "USA",
			description:
				"Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States.",
			email: "nike@gmail.com",
			image:
				"https://res.cloudinary.com/dmubfrefi/image/private/s--X0LLoOBX--/c_crop,h_2728,w_4090,x_334,y_0/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/002-nike-logos-swoosh-white.jpg?_a=BAAAROBs",
			idCategory: 5,
			idUser: 2,
			maxSubmissionDate: new Date("2024-04-17T00:00:00.000Z"),
		},
		{
			id: 2,
			name: "RS Bhakti Husada",
			address: "Krikilan",
			description:
				"Rumah sakit yang ada di krikilan Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
			email: "RSBH@gmail.com",
			image: "http://rsubhaktihusada.com/asset/logo/logo_webs.jpg",
			idCategory: 3,
			idUser: 2,
			maxSubmissionDate: new Date("2024-04-17T00:00:00.000Z"),
		},
	]);
}
