import { column, defineDb, defineTable } from "astro:db";

export default defineDb({
  tables: {
    Link,
  },
});

const Link = defineTable({
  columns: {
    desc: column.text({ primaryKey: true }),
    link: column.text(),
    icon: column.text(),
  },
});
