import { UserRepository } from '../../domain/repositories/UserRepository';
import { User } from '../../domain/entities/User';
import { Pool } from 'pg';

export class PostgresUserRepository implements UserRepository {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      connectionString: process.env.DATABASE_URL
    });
  }

  async findById(id: string): Promise<User | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      const row = result.rows[0];
      return new User(row.id, row.email);
    }
    return null;
  }

  async save(user: User): Promise<void> {
    await this.pool.query('INSERT INTO users (id, email) VALUES ($1, $2) ON CONFLICT (id) DO NOTHING', [user.getId(), user.getEmail()]);
  }
}
