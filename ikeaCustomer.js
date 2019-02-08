// require mysql and inquirer
const mysql = require("mysql");
const inquirer = require("inquirer");

// set up connection to database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "paprika",
    database: "ikeacatalog"
});

function load() {
    console.log(" ");
    console.log("Retrieving inventory data...");
    console.log(" ");
};

// connect to server and database
connection.connect(function (err) {
    if (err) throw err;
    console.log("Welcome to the INTERSTELLAR KINETIC ENTITY APERATURE (I.K.E.A.) Catalog");
    console.log("---------------------------------------");
    console.log(" _____________ __________________");
    console.log("  ____  _/__  //_/___  ____/__    |   ");
    console.log("    __  / __  ,<   __  __/  __  /| |   ");
    console.log("   __/ /___  /| |___  /______  ___ |__ ");
    console.log("   /___/(_)_/ |_|(_)_____/(_)_/  |_|(_)");
    console.log("----------------------------------------");
    setTimeout(load, 1000, 'loading')
    // call start function after 2 seconds
    setTimeout(start, 2000, 'started');
    
});

// start function that displays inventory then prompts user for product id and quantity
function start() {
    // call function to query inventory
    queryInventory();
};

// function to display inventory and prompt user for product selection
function queryInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        console.log("ID | ITEM | DEPT | PRICE | AMOUNT");
        for (var i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | ${res[i].department_name} | ${res[i].price} | ${res[i].stock_quantity}`);
        }
        console.log("-----------------------------------------------");
        
        selectProduct(res);
    });
};

// function for to select product and quantity
function selectProduct(products) {
    // console.log(products);
    inquirer
        .prompt([
            {
                type: "input",
                name: "product_selection",
                message: "Please enter your desired ITEM ID"
            },
            {
                type: "input",
                name: "quantity_selection",
                message: "How many UNITS do you require?"
            }
        ])
        .then(answers => {
            // .filter grabs the item matching the id the user entered
            const product_item = products.filter((product) => {
                return product.item_id === parseInt(answers.product_selection)
            });

            // If the stock quantity < the requested quantity, inform the user insufficient quantity
            if (product_item[0].stock_quantity < answers.quantity_selection) {
                console.log("INSUFFICIENT QUANTITY, TRANSACTION ABORTED.\n");
                queryInventory();
            } else {
                connection.query(
                    "SELECT products WHERE item_id = ?",
                    [answers.product_selection], function (err, res) {
                        // console.log(res);

                    });

                // update quantity in mysql database
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                [
                    {
                        stock_quantity: product_item[0].stock_quantity - answers.quantity_selection
                    }, 
                    {
                        item_id: answers.product_selection
                    }
                ],
                function(err, res) {
                    const cost = product_item[0].price*answers.quantity_selection;
                    console.log("Requisiton submitted, proceeding with transaction...");
                    console.log(`Your total is: ${cost} CREDITS`);
                    connection.end();
                });
            }
        });
};