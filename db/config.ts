import { column, defineDb, defineTable } from 'astro:db';


const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    password: column.text({ optional: true }),
    idRole: column.number({ references: () => Role.columns.id })
  }
})

const Role = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    role: column.text(),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { User, Role }
});
