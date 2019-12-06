# INTERSTELLAR KINETIC ENTITY APERTURE (I.K.E.A.) Catalog
![GitHub language count](https://img.shields.io/github/languages/count/beckygold/IKEA)
![GitHub top language](https://img.shields.io/github/languages/top/beckygold/IKEA)
![GitHub](https://img.shields.io/github/license/beckygold/IKEA)

## Description
I.K.E.A. Catalog is a Node.js storefront app utilizing the Inquirer and MySQL packages. It allows the client to create an order for an inventory item stored in a MySQL database. When the client orders an item the quantity in the MySQL database is updated.

## Requirements
You must have the Inquirer and MySQL node packages and MySQL Workbench installed.

## Technologies
* JavaScript
* Node.js
* Inquirer.js
* MySQL

## Using the I.K.E.A. Catalog
Initialize the database using the ikeaSeeds.sql file in MySQL Workbench. Ensure that the `port`, `user` and `password` in the ikeaCustomer.js file are correct. Open the ikeaCatalog folder in the terminal and type `node ikeaCustomer.js` in the command line and hit enter.
![Screenshot 1](/images/screenshot01.jpg)

The logo and inventory list should appear as well as a prompt for what product you would like to buy.
![Screenshot 2](/images/screenshot02.jpg)

Type the corresponding ID in the command line and hit enter.
![Screenshot 3](/images/screenshot03.jpg)

Type the desired quantity in the command line and hit enter.
![Screenshot 4](/images/screenshot04.jpg)

The app will update the quantity in the MySQL database and calculate your total.

## Future Developments
* Create functionality for the customer to more than one product type at a time.
* Create a manager view with the ability to view products, view low inventory, add to inventory, and add new products.
* Create a supervisor view with the ability to view departments and their overhead costs, product sales and total profits as well as the ability to create new departments.

## License
MIT License

## Fair Use Statement
This app may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. Such material is used as a parody and utilized for nonprofit educational purposes only. I believe this constitutes a ‘fair use’ of any such copyrighted material as provided for in section 107 of the US Copyright Law. If you wish to use any copyrighted material from this site for purposes of your own that go beyond ‘fair use’, you must obtain expressed permission from the copyright owner.