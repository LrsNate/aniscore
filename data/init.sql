CREATE TABLE IF NOT EXISTS score_views (
    score_id VARCHAR(20) PRIMARY KEY,
    hits INT
);

INSERT INTO score_views(score_id, hits)
VALUES ('U78h2CCs', 0)
ON CONFLICT(score_id) DO NOTHING;

INSERT INTO score_views(score_id, hits)
VALUES ('ecxJB2CY', 0)
ON CONFLICT(score_id) DO NOTHING;

INSERT INTO score_views(score_id, hits)
VALUES ('wls5B0Vy', 0)
ON CONFLICT(score_id) DO NOTHING;

INSERT INTO score_views(score_id, hits)
VALUES ('vZwEWdzg', 0)
ON CONFLICT(score_id) DO NOTHING;

INSERT INTO score_views(score_id, hits)
VALUES ('VtbZreuv', 0)
ON CONFLICT(score_id) DO NOTHING;

INSERT INTO score_views(score_id, hits)
VALUES ('DMDIgQR', 0)
ON CONFLICT(score_id) DO NOTHING;
