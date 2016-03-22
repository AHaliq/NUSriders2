
CREATE TABLE users (
  email         TEXT      PRIMARY KEY,
  username      TEXT      NOT NULL,
  currency      MONEY     NOT NULL DEFAULT 0,
  password      TEXT      NOT NULL
);

INSERT INTO users (email, username, currency, password)
  VALUES ('admin@gmail.com', 'admin', '$9999', '5f4dcc3b5aa765d61d8327deb882cf99');
/* $pw = password_hash("password")*/
