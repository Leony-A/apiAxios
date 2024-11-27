const cors = require ("cors")
const express = require ("express")
const app = express()

app.use(express.json())
app.use(cors())


//********************************************** */

app.get("/V1/Customers/:id",(request,response) => {
    const {id} = request.params
    console.log(id)
    return response.status(200).send(id)
})

app.get("/V1/produtos",(request,response) => {
    return response.status(200).json(
        {
            id: 1,
            productName: "Arroz Rei Arthur 5kg",
            valor: 12.00
        }
    )
})

//********************************************** */


let products = [
    {
        id: 1,
        productName: "Arroz Rei Arthur 5kg"
    }
]

app.get("/listAllProducts",(request,response) => {
    return response.json(products)
})

app.post("/createProducts",(request,response) => {
    let lastId
    if(products.length === 0){
        lastId = 0
    }
    else{
        lastId = products[products.length - 1].id
    }
    const { productName }  = request.body
    products.push(
        {
            id: lastId + 1,
            productName: productName
        }
    )
    return response.json("Product registered successfully")
})

app.delete("/deleteProducts/:id",(request,response)=>{
    const  { id }   = request.params
    //Localizando o produto pelo paramentro id passado pelo front
    const product = products.find(product => Number(product.id) === Number(id))
    //verificando se o produto existe para deletar ou se nao existe retornar ao front
    if (!product){
        return response.json("Product not found")
    }
    //Filtrou todos os produtos que tem o id diferente do informado no frontend
    products = products.filter(product => Number(product.id) !== Number(id))
    return response.send("Deleted product")
})

app.listen(3333, () => {
    console.log("Backend Rodando!")
})
