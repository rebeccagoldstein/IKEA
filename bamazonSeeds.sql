DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("QUASAR Workspace Illuminator", "habitat mod", 25.00, 6), 
("PLANE Horizontal Surface", "habitat mod", 100.00, 4), 
("SCHRODINGER Containment Cube", "habitat mod", 150.00, 5), 
("FOWLER Bipedal Lounging Pod", "habitat mod", 60.00, 7), 
("SUPINE Tetrapod Cryochamber", "habitat mod", 200.00, 6), 
("Deydrated Protein Spheres, 1 Serving", "organic matter", 10.00, 32), 
("Quantum Entangler", "tools", 350.00, 3), 
("Quantum Untangler", "tools", 1000.00, 1), 
("Plumbus", "household", 15.00, 8), 
("Starship Keychain", "misc", 5.00, 14);
/* VALUES ("Lightning Cable", "electronics", 10.00, 100), ("Laptop Charger", "electronics", 50.00, 25), ("French Coffee Press", "kitchen", 20.00, 30), ("Bluetooth Speaker", "electronics", 60.00, 25), ("Wine Rack", "household", 25.00, 50), ("Bluetooth Keyboard", "electronics", 20.00, 40), ("Salt and Pepper Shakers", "kitchen", 10.00, 50), ("Cast Iron Skillet", "kitchen", 30.00, 20), ("Banana Hook", "kitchen", 10.00, 30), ("Decorative Key Hook", "household", 5.00, 25);
*/


SELECT * FROM products;