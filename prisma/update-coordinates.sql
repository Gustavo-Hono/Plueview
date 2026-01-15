-- Update existing weather_data records with default latitude/longitude
-- Replace these coordinates with your actual weather station location

UPDATE weather_data
SET 
  latitude = -23.5505,
  longitude = -46.6333
WHERE 
  latitude IS NULL 
  OR longitude IS NULL;

-- Verify the update
SELECT COUNT(*) as updated_records
FROM weather_data
WHERE latitude IS NOT NULL AND longitude IS NOT NULL;
