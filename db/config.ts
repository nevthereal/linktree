import { column, defineDb, defineTable } from "astro:db";

const Link = defineTable({
  columns: {
    desc: column.text({ primaryKey: true }),
    link: column.text(),
    icon: column.text(),
  },
});

export default defineDb({
  tables: { Link },
});
