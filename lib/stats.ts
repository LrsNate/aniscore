import { Pool } from "pg";

export default class StatsRecorder {
  pool: Pool;

  constructor() {
    const connectionString = process.env.DATABASE_URL;
    const sslConfig =
      process.env.ANISCORE_ENV == "dev" ? false : { rejectUnauthorized: false };
    this.pool = new Pool({
      connectionString,
      ssl: sslConfig,
    });
  }

  async getScoreViews(scoreId: string) {
    const text = "SELECT hits FROM score_views WHERE score_id=$1";
    const values = [scoreId];
    const res = await this.pool.query(text, values);
    return res.rows[0].hits;
  }

  async recordScoreView(scoreId: string) {
    const text = "UPDATE score_views SET hits = hits + 1 WHERE score_id=$1";
    const values = [scoreId];
    return await this.pool.query(text, values);
  }
}
