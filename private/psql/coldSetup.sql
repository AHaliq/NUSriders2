
CREATE TABLE users (
  id            SERIAL    PRIMARY KEY,
  email         TEXT      NOT NULL UNIQUE,
  username      TEXT      NOT NULL,
  currency      MONEY     NOT NULL DEFAULT 0,
  password      TEXT      NOT NULL
);

INSERT INTO USERS (id, email, username, currency, password)
  VALUES (DEFAULT, "admin@gmail.com", "admin", "$9999",
    "$2y$10$pH3DbamVdsme9grzjHkoX.zWU1litz4PdfnSpVnqWEx.7qFWc1JIa");
/* $pw = password_hash("password")*/
