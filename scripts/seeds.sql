
-- -- -- -- Deleting from the databases
DELETE FROM light_bites_db.Customer;
DELETE FROM light_bites_db.order_history;
DELETE FROM light_bites_db.orders;
DELETE FROM light_bites_db.shopping_cart;
DELETE FROM light_bites_db.Stock;
DELETE FROM light_bites_db.what_ordered;

DROP DATABASE light_bites_db; 
CREATE DATABASE light_bites_db; 
USE light_bites_db;


CREATE TABLE Customer ( -- Login information table – for authentication
	unique_id integer not null auto_increment primary key, -- unique id for customers
	firstname varchar(50) not null, -- customers first name
    lastname varchar(50) not null, -- customers last name
    phonenumber varchar(12) not null, -- customers phone number
    email varchar(100) not null, -- customers email 
    password varchar(50) not null, -- user password
    address1 varchar(100) not null, -- customers address line 1
    address2 varchar(100), -- customers address line 2
    address3 varchar(100), -- customers address line 3
    city varchar(50) not null, -- customers address city
    state varchar(50) not null, -- customers address state
    zip varchar(10) ,-- customers address zip code
	createdAt datetime,
    updatedAt datetime
);
INSERT INTO Customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Anthony','Duncan','281-555-1234','test@gmail.com','password123','1234 test rd','Apt 001', '', 'Austin','TX','78750');
INSERT INTO Customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Justin','Mozley','281-500-1234','test1@gmail.com','password123','1120 test ln','Apt 002', '', 'Buda','TX','78610');
INSERT INTO Customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Owais','Jamil','281-550-1234','test2@gmail.com','password123','1234 test ave','', '', 'Kyle','TX','78610');
INSERT INTO Customer (firstname, lastname, phonenumber, email, password, address1, address2, address3, city, state, zip) VALUES ('Kevin','Henderson','281-000-1234','test3@gmail.com','password123','1235 test rd','Apt 004', '', 'Buda','TX','78610');


CREATE TABLE order_history ( -- History – once order completed, history of all orders from what ordered
	unique_id integer not null, -- orders.unique_id (customers.unique_id)
    order_id integer not null, -- orders.unique_id
    fulfillment_date datetime, -- fulfillment date
    meal_id integer not null, -- item ordered (from stocks)
    quantity integer not null, -- amount of the items they want
    price decimal(13,2) not null, -- cost of the item in the order
	order_date datetime not null, -- date the item was order
    delivery_date datetime, -- date the delivery will be made (shopping_carts.order_date)
	createdAt datetime,
    updatedAt datetime
);
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),1,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,3,12,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO order_history (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,4,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));


CREATE TABLE Stock ( -- stocks – inventory of items that can be ordered
	meal_id integer auto_increment not null primary key, -- id of the meal
    fulfillment_date datetime not null, -- fulfillment date
	price decimal(13,2) not null, -- money
    repeatItem integer not null, -- if the item should be repeated or not
	title1 varchar(100) not null, -- name of the meal
    title2 varchar(50),
    title3 varchar(50),
    line04 varchar(50),
    line05 varchar(50),
    line06 varchar(50),
    line07 varchar(50),
    line08 varchar(50),
    line09 varchar(50),
    line10 varchar(50),
    line11 varchar(50),
    line12 varchar(50),
    line13 varchar(50),
    line14 varchar(50),
    line15 varchar(50),
    line16 varchar(50),
    line17 varchar(50),
    line18 varchar(50),
    line19 varchar(50),
    line20 varchar(50),
    imageURL varchar(100), -- URL of the image
    title varchar(100) not null, -- the title of the meal
    description varchar(100), -- a description of the meal
    protein varchar(20), -- protein count
    carbs varchar(20), -- carbohydrate count
    calories varchar(20), -- calorie count
    category varchar(15) not null, -- category of the food (breakfast/lunch/dinner, snack)
    fats varchar(20), -- fat count
    sodium varchar(20), -- sodium count or "low sodium"
    vegetarianOption integer, -- is this a vegetarian option
    createdAt datetime,
    updatedAt datetime
);
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Steak wrapped veggies with side salad', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 1, 'Steak wrapped veggies with side salad', '', '', '', 'Keto Friendly', 'Cal 298', 'Protein 35', 'Carbs 10', 'Fats 32g', '', 'Steak', 'Bell pepper', 'Asparagus', '', '', '', '', '', '', '', '', '', 'Protein: 35g', 'Carbs: 10g', '223.6 cals', 'Lunch/Dinner', 'Fats: 32g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Butternut Squash Mac n Cheese', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 1, 'Butternut Squash Mac n Cheese', '', '', '', '', 'Cal 432', 'Protein 19g', 'Carbs 55g', 'Fat 15g', '', 'Bacon', 'Cheddar Cheese', 'Broccoli', 'Butternut Squash', '', '', '', '', '', '', '', '', 'Protein: 19g', 'Carbs: 55g', '432 cals', 'Lunch/Dinner', 'Fats: 15g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Chicken Egg Roll Bowl', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 1, 'Chicken Egg Roll Bowl', '', '', '', '', 'Cal 223', 'Protein 20g', 'Carbs 6', 'Fat 2g', '', 'Cabbage', 'Carrots', 'Chicken', '', '', '', '', '', '', '', '', '', 'Protein: 20g', 'Carbs: 6g', '223 cals', 'Lunch/Dinner', 'Fats: 2g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Light King Ranch Casserole', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 1, 'Light King Ranch Casserole', '', '', '', '', 'Cal 282', 'Protein 21g', 'Carbs 26g', 'Fat 10g', '', 'Chicken', 'Tomatoes', 'Green Chillies', 'Corn Tortillas', '', '', '', '', '', '', '', '', 'Protein: 21g', 'Carbs: 26g', '282 cals', 'Lunch/Dinner', 'Fats: 10g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Chicken Tetrazzini', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 1, 'Chicken Tetrazzini', '', '', '', '', 'Cal 288', 'Protein 24g', 'Carbs 35g', 'Fat 6g', '', 'Chicken', 'Whole Wheat Pasta', 'Cheese', '', '', '', '', '', '', '', '', '', 'Protein: 24g', 'Carbs: 35g', '288 cals', 'Lunch/Dinner', 'Fats: 6g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Egg Muffins ', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 3.99, 0, 'Egg Muffins ', '', '', '', '', 'Cal 230 (for 2)', 'Protein 18g', 'Carbs 6g', 'Fat 16g', '', 'Eggs', 'Mushroom ', 'Spinich', 'Cheese', '', '*For two', '', '', '', '', '', '', 'Protein: 18g', 'Carbs: 6g', '230 cals', 'Breakfast', 'Fats: 16g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Breakfast Box', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 6.99, 0, 'Breakfast Box', '', '', '', '', 'Cal 287', 'Protein 11g', 'Carbs 17g', 'Fat 11g', '', 'Boiled eggs', 'Apple', 'Grapes', 'Cheese', '', '', '', '', '', '', '', '', 'Protein: 11g', 'Carbs: 17g', '287 cals', 'Breakfast', 'Fats: 11g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Protein Box', (SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 5.99, 0, 'Protein Box', '', '', '', '', 'Cal 237', 'Protein 14g', 'Carbs 9g', 'Fat 18g', '', 'Egg muffin ', 'Cheese', 'Berries', 'Almonds', '', '', '', '', '', '', '', '', 'Protein: 14g', 'Carbs: 9g', '237 cals', 'Snack', 'Fats: 18g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Pizza Casserole', (SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 2, 'Pizza Casserole', 'low carb/keto- friendly', '', '', '', 'Cal 292', 'Protein 14g', 'Carbs 19g', 'Fat 11g', '', 'Pepperoni', 'Cheese', 'Cauliflower', 'Tomatoes', '', '', '', '', '', '', '', '', 'Protein: 14g', 'Carbs: 19g', '292 cals', 'Lunch/Dinner', 'Fats: 11g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Healthy Stroganoff', (SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 2, 'Healthy Stroganoff', '', '', '', '', 'Cal 230', 'Protein 25g', 'Carbs 21g', 'Fat 26g', '', 'Beef', 'Whole wheat noodles', 'mushrooms', '', '', '', '', '', '', '', '', '', 'Protein: 25g', 'Carbs: 21g', '230 cals', 'Lunch/Dinner', 'Fats: 26g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Garlic Chicken Stirfry', (SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 2, 'Garlic Chicken Stirfry', '', '', '', '', 'Cal 316', 'Protein 33g', 'Carbs 23g', 'Fats 7g', '', 'Chicken', 'Bell pepper', 'Broccoli', 'Mushrooms', '', '', '', '', '', '', '', '', 'Protein: 33g', 'Carbs: 23g', '316 cals', 'Lunch/Dinner', 'Fats: 7g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Mini chicken Pot pies', (SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 2, 'Mini chicken Pot pies', '', '', '', '', 'Cal 223', 'Protein 13g', 'Carbs 22g', 'Fat 10g', '', 'Chicken', 'Peas', 'Carrots', '', '', '', '', '', '', '', '', '', 'Protein: 13g', 'Carbs: 22g', '223 cals', 'Lunch/Dinner', 'Fats: 10g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Salmon over veggies', (SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 8.99, 2, 'Salmon over veggies', '', '', '', 'Whole 30', 'Cal 236', 'Protein 31g', 'Carbs 10g', 'Fat 6g', '', 'Salmon ', 'Mixed veggies', '', '', '', '', '', '', '', '', '', '', 'Protein: 31g', 'Carbs: 10g', '236 cals', 'Lunch/Dinner', 'Fats: 6g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Light tamales and black bean salsa', (SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 3, 'Light tamales and black bean salsa', '', '', '', '', 'Cal 360', 'Protein 16g', 'Carbs 28g ', 'Fat 21g', '', 'Pork Tamales', 'Black beans', 'Corn', 'Bell pepper', 'Jalepeno', '', '', '', '', '', '', '', 'Protein: 16g', 'Carbs: 28g', '360 cals', 'Lunch/Dinner', 'Fats: 21g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Healthy Jambalaya', (SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 8.99, 3, 'Healthy Jambalaya', '', '', '', '', 'Cal 311', 'Protein 23', 'Carbs 12g', 'Fat 19g', '', 'Shrimp', 'Sausage', 'Cauliflower', 'Bell pepper', 'Celery', 'Onion', '', '', '', '', '', '', 'Protein: 23g', 'Carbs: 12g', '311 cals', 'Lunch/Dinner', 'Fats: 19g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Teriyaki Chicken Bowl', (SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 3, 'Teriyaki Chicken Bowl', '', '', '', '', 'Cal 370', 'Protein 30g', 'Carbs 39', 'Fat 9g', '', 'Chicken', 'Broccoli', 'Carrots', 'Brown rice', '', '', '', '', '', '', '', '', 'Protein: 30g', 'Carbs: 39g', '370 cals', 'Lunch/Dinner', 'Fats: 9g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Greek Lemon Chicken', (SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 3, 'Greek Lemon Chicken', '', '', '', '', 'Cal 388', 'Protein 31g', 'Carbs 27g', 'Fat 13g', '', 'Chicken', 'Squash', 'Tomatoes', 'Orzo rice', 'Spinach', '', '', '', '', '', '', '', 'Protein: 31g', 'Carbs: 27g', '388 cals', 'Lunch/Dinner', 'Fats: 13g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Cheeseburger Casserole', (SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 3, 'Cheeseburger Casserole', '', '', '', 'Low Carb', 'Cal 198', 'Protein 18g', 'Carbs 1.7g', 'Fat 21.5g', '', 'Ground Beef', 'Cheeseburger Casserole', 'Cauliflower', 'Cream Cheese', '', '', '', '', '', '', '', '', 'Protein: 18g', 'Carbs: 1.7g', '198 cals', 'Lunch/Dinner', 'Fats: 21.5g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Meatloaf', (SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 4, 'Meatloaf', '', '', '', '', 'Cal 382', 'Protein 38g', 'Carbs 22g', 'Fat 23g', '', 'Ground Turkey', 'Cauliflower', 'Broccoli', 'Carrots', '', '', '', '', '', '', '', '', 'Protein: 38g', 'Carbs: 22g', '382 cals', 'Lunch/Dinner', 'Fats: 23g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Pot Roast', (SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 4, 'Pot Roast', '', '', '', '', 'Cal 467', 'Protein 36', 'Carbs 30g', 'Fat 23g', '', 'Pot Roast', 'Cauliflower', 'Carrots', 'Mushrooms', 'Potatoes', '', '', '', '', '', '', '', 'Protein: 36g', 'Carbs: 30g', '467 cals', 'Lunch/Dinner', 'Fats: 23g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Baked Pesto Chicken', (SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 4, 'Baked Pesto Chicken', '', '', '', '', 'Cal 386', 'Protein 44g', 'Carbs 5g', 'Fat 22g', '', 'Chicken', 'Cheese', 'Basil Pesto', 'Zucchini', 'Wild Rice', '', '', '', '', '', '', '', 'Protein: 44g', 'Carbs: 5g', '386 cals', 'Lunch/Dinner', 'Fats: 22g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('BBQ Chicken Casserole', (SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 4, 'BBQ Chicken Casserole', '', '', '', '', 'Cal 265', 'Protein 29g', 'Carbs 2g', 'Fat 14g', '', 'Chicken', 'Bacon', 'Cheese', 'Sugar-free BBQ sauce', '', '', '', '', '', '', '', '', 'Protein: 29g', 'Carbs: 2g', '265 cals', 'Lunch/Dinner', 'Fats: 14g', '', 0, CURDATE(), CURDATE());
INSERT INTO Stock (title, fulfillment_date, price, repeatItem, title1, title2, title3, line04, line05, line06, line07, line08, line09, line10, line11, line12, line13, line14, line15, line16, line17, line18, line19, line20, imageURL, description, protein, carbs, calories, category, fats, sodium, vegetarianOption, createdAt, updatedAt) VALUES ('Chicken Cauliflower Casserole', (SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)), 7.99, 4, 'Chicken Cauliflower Casserole', '', '', '', '', 'Cal 273', 'Protein 25g', 'Carbs 9.2g', 'Fat 15g', '', 'Chicken', 'Cauliflower', 'Broccoli', 'Cheese', '', '', '', '', '', '', '', '', 'Protein: 25g', 'Carbs: 9.2g', '273 cals', 'Lunch/Dinner', 'Fats: 15g', '', 0, CURDATE(), CURDATE());


CREATE TABLE orders ( -- Orders – Deliveries or pickups, will create a unique id to attach to shopping cart and carry forward.
	unique_id integer not null, -- unique_id for the customers (customers.unique_id)
    order_id integer not null auto_increment primary key, -- unique id for the specific order
    fulfillment_date datetime, -- fulfillment date
    order_date datetime not null, -- now() when the order is placed
    order_type varchar(10) not null, -- delivery or pick-up
    delivery_date datetime, -- date when the order should be completed (following monday) 
    order_status varchar(20) not null, -- status of the order (must be updated when the order is completed)
	createdAt datetime,
    updatedAt datetime
);
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('1',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');
INSERT INTO orders (unique_id, order_date, fulfillment_date, order_type, delivery_date, order_status) VALUES ('2',now(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'Delivery',(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),'In Progress');


CREATE TABLE shopping_cart ( -- Shopping Cart – items being ordered during the ordering process
	unique_id integer not null, -- orders.unique_id (customers.unique_id)
	order_id integer not null, -- orders.unique_id
    fulfillment_date datetime, -- fulfillment date
    meal_id integer not null, -- item ordered (from stocks)
    quantity integer not null, -- amount of the items they want
    price decimal(13,2) not null, -- cost of the item in the order
	createdAt datetime,
    updatedAt datetime
);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),1,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,2,16);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,3,12);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,2,16);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,1,8);
INSERT INTO shopping_cart (unique_id, order_id, fulfillment_date, meal_id, quantity, price) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,4,16);


CREATE TABLE what_ordered ( -- What Ordered – once paid for, what was ordered from shopping cart
	unique_id integer not null, -- orders.unique_id (customers.unique_id)
    order_id integer not null, -- orders.unique_id
    fulfillment_date datetime, -- fulfillment date
    meal_id integer not null, -- item ordered (from stocks)
	quantity integer not null, -- amount of the items they want
    price decimal(13,2) not null, -- cost of the item in the order
    order_date datetime not null, -- date the item was order
    delivery_date datetime, -- date the delivery will be made (shopping_carts.order_date) 
	createdAt datetime,
    updatedAt datetime
);
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),1,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (1,1,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,3,12,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),2,2,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (09 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),3,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (16 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),4,1,8,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (23 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));
INSERT INTO what_ordered (unique_id, order_id, fulfillment_date, meal_id, quantity, price, order_date, delivery_date) VALUES (2,2,(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)),5,4,16,CURDATE(),(SELECT DATE_ADD(CURDATE(), INTERVAL (30 - IF(DAYOFWEEK(CURDATE())=1, 08, DAYOFWEEK(CURDATE()))) DAY)));


-- CREATE TABLE ingredients ( -- ingredients that are in the meals (future)
-- 	meal_id integer not null, -- item ordered (from stocks)
--     item_id integer not null auto_increment primary key, -- unique id for the ingredient in the order
--     ingredient_name varchar(100) not null, -- name of the ingredient
--     unit_number integer not null, -- number of units in the meal
--     unit_id varchar(20) not null -- unit type in the meal
-- );



