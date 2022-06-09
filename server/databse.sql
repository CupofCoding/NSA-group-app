CREATE DATABASE nsa_psql;

CREATE TABLE products( 
    item_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE products
ADD _itemname, _color, _size, _cost, _description VARCHAR(255);

INSERT INTO products (_itemname, _color, _size, _cost, _description)
VALUES (value_1, value_2);


CREATE TABLE purchases( 
    order_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)
);

ALTER TABLE purchases
ADD _orderid _itemstotal _itempaid _itemqty _taxes _discount _orderinfo VARCHAR(255);

INSERT INTO purchases (_orderid, _itemstotal, _itempaid, _itemqty, _taxes, _discount, _orderinfo)
VALUES (value_1, value_2);


CREATE TABLE orderinfos( 
    order_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE orderinfos
ADD _shipto _tax _shipping VARCHAR(255);

INSERT INTO orderinfos (_shipto, _tax, _shipping)
VALUES (value_1, value_2);


CREATE TABLE purchases( 
    order_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE purchases
ADD _orderid _itemstotal _itempaid _itemqty  _taxes _discount _orderinfo  VARCHAR(255);

INSERT INTO purchases (_orderid, _itemstotal, _itempaid, _itemqty,  _taxes, _discount, _orderinfo )
VALUES (value_1, value_2);


CREATE TABLE carts( 
    cart_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE carts
ADD _additem _removeitem _saved VARCHAR(255);

INSERT INTO carts (_additem, _removeitem, _saved)
VALUES (value_1, value_2);


CREATE TABLE wishlists( 
    wishlist_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE wishlists
ADD wishlistid _listname _itemid VARCHAR(255);

INSERT INTO wishlists (wishlistid, _listname, _itemid)
VALUES (value_1, value_2);


CREATE TABLE users( 
    user_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE users
ADD _username login VARCHAR(255)
_phone
_email
_firstname VARCHAR(255)
_lastname VARCHAR(255)
_address VARCHAR(255);

INSERT INTO users (_username, _phone, _email, _firstname, _lastname, _address)
VALUES (value_1, value_2);


CREATE TABLE passwords( 
    password_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE passwords
ADD _password _fkey VARCHAR(255);

INSERT INTO passwords (_password, _fkeyn)
VALUES (value_1, value_2);


CREATE TABLE payments( 
    payment_id SERIAL PRIMARY KEY, 
    description VARCHAR(255)    
);

ALTER TABLE payments
ADD _bank _cardnumber _cvvcode _zipcode VARCHAR(255);

INSERT INTO payments (_bank, _cardnumber, _cvvcode, _zipcode)
VALUES (value_1, value_2);

--() defines schema
--creates serialized unique id
--max char 255