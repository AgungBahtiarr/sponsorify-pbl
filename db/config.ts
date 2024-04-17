import { column, defineDb, defineTable, } from 'astro:db';


const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    password: column.text({ optional: true }),
    idRole: column.number({ references: () => Roles.columns.id }),
  }
})

const Roles = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    role: column.text(),
  }
})

const Events = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    description: column.text(),
    location: column.text(),
    proposal: column.text(),
    startDate: column.date(),
    idUser: column.number({ references: () => Users.columns.id })
  }
})

const Categories = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    category: column.text()
  }
})


const Sponsor = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    description: column.text(),
    address: column.text(),
    maxSubmissionDate: column.date(),
    image: column.text(),
    idCategory: column.number({ references: () => Categories.columns.id }),
    idUser: column.number({ references: () => Users.columns.id }),
  }
});


// https://astro.build/db/config
export default defineDb({
  tables: { Users, Roles, Events, Categories, Sponsor }
});
