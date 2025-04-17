import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'; // Replace 'drizzle-orm' with the correct module if different

export const tasks = sqliteTable('tasks', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
	list_id: integer('list_id')
		.notNull()
		.references(() => lists.id),
});

export const lists = sqliteTable('lists', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	name: text('name').notNull(),
});

export type Task = typeof tasks.$inferSelect;
