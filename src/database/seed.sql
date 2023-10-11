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
  (4, 1, 'We should be goverened by democracy', 0, 1000000, '2023-12-08 11:54:00', '2023-06-07 11:54:00' ), 
  (5, 4, 'Citizens are required to attend monthly innovation workshops to unlearn useful skills and embrace complicated, unnecessary technology.', 19, 8, '2023-12-08 11:54:00', '2023-10-07 11:54:00' ),
  (6, 2, 'Citizens have the inalienable right to complain about the government, provided they do so only in an obscure programming language.', 17, 89, '2023-12-08 11:54:00', '2023-10-09 11:54:00' ),
  (7, 3, 'Freedom of speech is guaranteed, as long as it involves endless discussions about the color and texture of bureaucratic red tape.', 111, 91, '2023-12-08 10:54:00', '2023-10-07 10:54:00' ),
  (8, 1, 'Citizens are legally obliged to cast their votes using a secret algorithm only known to AI systems.', 440, 111, '2023-01-08 11:54:00', '2022-06-07 11:54:00' ),
  (9, 4, 'The right to due process has been replaced with the right to receive a "404 - Justice Not Found" error.', 987, 211, '2023-10-08 11:54:00', '2022-10-07 11:54:00' ),
  (10, 2, 'The government operates a Ministry of Acronyms (MoA) responsible for creating lengthy, unintelligible abbreviations for all official documents.', 1, 2, '2023-12-08 11:54:00', '2023-10-09 11:54:00' ),
  (11, 3, 'A dedicated department is responsible for creating circular arguments that never lead to conclusions', 1, 51, '2023-12-08 10:54:00', '2023-10-07 10:54:00' ),
  (12, 1, 'All major decisions, from healthcare to education, are made through a coin flip by the Ministry of Coin Flips.', 1, 0, '2023-01-08 11:54:00', '2022-06-07 11:54:00' ),
  (13, 4, 'The government guarantees every citizen the right to have slow, unreliable internet connections to foster patience and meditation.', 11, 807, '2024-10-08 11:54:00', '2023-10-07 11:54:00' ),
  (14, 4, 'Citizens have the right to misinterpret any government document or law as they see fit, and the government is obliged to provide conflicting interpretations.', 983, 38, '2022-10-08 11:54:00', '2021-10-07 11:54:00' )

ON CONFLICT DO NOTHING;
  

COMMIT;