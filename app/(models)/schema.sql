DROP TABLE IF EXISTS donations;

CREATE TABLE IF NOT EXISTS donations (
  firstName VARCHAR(20),
  lastName VARCHAR(20),
  typeDonation VARCHAR(20),
  quantity INTEGER,
  donationDate DATE,
)

