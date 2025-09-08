import "dotenv/config";
import "reflect-metadata";
import path from "path"
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) {
    throw new Error("Env var DATABASE_URL does not exist");
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [entitiesPath],
    ssl: { rejectUnauthorized: false } 
  };
};

const AppDataSource = new DataSource(dataSourceConfig());
//npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts
//npm run typeorm migration:run -- -d ./src/data-source
export { AppDataSource };
