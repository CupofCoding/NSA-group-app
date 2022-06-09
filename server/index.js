const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");   //new connection to run queries

//middleware
app.use(cors());    //Fullstack requires getting data from the client-side. request.body object is the only way to get it from the client-side. 
app.use(express.json());    //gives access to request.body to get JSON data

//ROUTES//

//create a __
app.post("/products", async(req, res) => { //"route", async allows for await to wait for function to complete before continuing(request, resolve)
    try {
        const { description } = req.body;
        const newProduct = await pool.query("INSERT INTO product (description) VALUES($1) RETURNING *", [description]);
        //INSERT INTO is required in order to run queries and add data to the correct table and column. ($1) is a placeholder variable by pglibary to add dymanic data. [defines $1]. 
        //RETURNING * is used to return all data 
        //Same as INSERT INTO product(description) VALUES ('another thing to do') in the CLI, automatically assigned ids

        res.json(newProduct.rows[0]);   //limits data shown to relevant data only; first item
        //console.log(req.body) //test using POSTMAN; Open App -> New -> select POST and insert url: http://localhost:5000/products; select Body, select raw, Text pulldown and JSON. Insert JSON test data; {   "description": "Need to do something"   } while Nodemon Index is running.
    } catch (error) {
        console.error(error.message);
    }
});

//get all __s
app.get("/products", async(req,res) => {
    try {
        const allProduct = await pool.query("SELECT * FROM product");
        res.json(allProduct.rows); //returns all the the data so RETURNING * isn't required.         
    } catch (error) {
        console.error(error.message)        
    }
});

//get a __
app.get("/products/:id", async(req, res) => {  //:id allows dynamic URLs doesn't have to be named id
    try {
        const { id } = req.params
        const product = await pool.query("SELECT * FROM product WHERE product_id = $1", [id]);    //selects all from table where indicates column
        
        res.json(product.rows[0]);
        //Test route in postman GET http://localhost:5000/products/4
        //console.log(req.params) //for testing
    } catch (error) {
        console.error(error.message)
    }
});

//update a __
app.put("/products/:id", async(req, res) => {  //req.body to get info about description & req.params specify product information we want
    try {
        const { id } = req.params;
        const {description} = req.body;
        const updateProduct = await pool.query("UPDATE product SET description = $1 WHERE product_id = $2", 
        [description, id]
        ); //specifies which table then what column and value to update. $2 is a variable placeholder

        res.json("product was updated.");
    } catch (error) {
        console.error(error.message)
    }
})

//delete a __
app.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await pool.query("DELETE FROM product WHERE product_id = $1",
        [id]);

        res.json("product was deleted.");
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000, () => {
    console.log("server started, port: 5000")
}); //"node index" to test, use "nodemon index" for live updates instead of restarting terminal each time.