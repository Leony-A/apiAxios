const baseURL = "http://localhost:3333"

function getProducts(){
    axios.get(`${baseURL}/listAllProducts`)
    .then(response => {
        const data = response.data

        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
        
        for (const item of data) {
            let li = document.createElement('li');
            li.innerHTML = item.productName  
            content.appendChild(li)
        }
    })
    .catch(error =>{
        console.log(error)
    })
}

function createdProducts(){
    let newProduct = {
        productName: document.getElementById("name").value
    }
    axios.post(`${baseURL}/createProducts`,newProduct)
    .then(response => {
        main()
    })
    .catch(error =>{
        alert(error)
    })
}

function deleteProducts(){
    const id = document.getElementById("name").value
    axios.delete(`${baseURL}/deleteProducts/${id}`)
    .then(response =>{
        alert(response.data)
        main()
    })
    .catch(error => alert(error))
}

function main(){
    getProducts()
    document.getElementById("name").focus()
    document.getElementById("name").value = ""
}

main()