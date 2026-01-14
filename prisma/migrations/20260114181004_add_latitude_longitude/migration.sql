-- This is an empty migration.

ALTER TABLE "weather_data"
ADD COLUMN "latitude" DOUBLE PRECISION,
ADD COLUMN "longitude" DOUBLE PRECISION;
