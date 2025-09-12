import { Client, type QueryResult, type QueryResultRow } from 'pg';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycontacts'
});

client.connect();

export async function query<T extends QueryResultRow, P extends unknown[] = unknown []>(query: string, values?: P): Promise<T[]> {
  const { rows }: QueryResult<T> = await client.query<T>(query, values);
  return rows;
}
