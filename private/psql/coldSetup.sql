
CREATE TABLE users (
  id            SERIAL    PRIMARY KEY
  email         TEXT      UNIQUE,
  username      TEXT      NOT NULL,
  currency      MONEY     NOT NULL DEFAULT 0,
  password      TEXT      NOT NULL
);

CREATE TABLE route (
  placeIDA    varchar(28)   NOT NULL,
  placeIDB    varchar(28)   NOT NULL,
  latA        numeric       NOT NULL,
  lngA        numeric       NOT NULL,
  latB        numeric       NOT NULL,
  lngB        numeric       NOT NULL,
  driverID    integer       NOT NULL REFERENCES users (id),
  routeID     serial        PRIMARY KEY
);


INSERT INTO users (email, username, currency, password)
  VALUES ('admin@gmail.com', 'admin', '$9999', '5f4dcc3b5aa765d61d8327deb882cf99');
/* $pw = password_hash("password")*/
