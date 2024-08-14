// import { PgTable } from "drizzle-orm/pg-core";
// import { db } from "@/src/db/drizzle";

// export abstract class AbstractRepository<T>
// {
//   protected abstract table: PgTable<any>;

//   async create(item: T): Promise<void> {
//     // Implementation for creating an item
//   }

//   async findById(id: number): Promise<T | null> {
//     // Implementation for finding an item by ID
//     return null;
//   }

//     async findAll(): Promise<T[]>
//     {
//         const data = await db.select().from(this.table);
//     return [];
//   }

//   async update(id: number, item: Partial<T>): Promise<void> {
//     // Implementation for updating an item
//   }

//   async delete(id: number): Promise<void> {
//     // Implementation for deleting an item
//   }
// }