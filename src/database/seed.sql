BEGIN;

INSERT INTO users VALUES
  (1, 'sgroi-l', 39, 'image1.jpg', '2023-10-10 09:37:00' ),
  (2, 'james', 1001, 'image2.jpg', '2023-10-10 10:57:00' ),
  (3, 'shaughn', 9999, 'image3.jpg', '2023-10-10 11:37:00' ),
  (4, 'deepa', 300, 'image4.jpg', '2023-10-10 11:54:00' )
ON CONFLICT DO NOTHING;

INSERT INTO polls VALUES
  (1, 4, 'Ban all operating systems other than windows', 9999, 2, '2023-10-08 11:54:00', '2023-10-07 11:54:00' ),
  (2, 2, 'Universal basic income for all', 100, 100, '2023-11-08 11:54:00', '2023-10-09 11:54:00' ),
  (3, 3, 'Tech overlords should have free and unrestrained access to all of our data', 1, 51, '2023-10-08 10:54:00', '2023-10-07 10:54:00' ),
  (4, 1, 'We should be goverened by democracy', 0, 1000000, '2023-12-08 11:54:00', '2023-06-07 11:54:00' )
ON CONFLICT DO NOTHING;
  

COMMIT;