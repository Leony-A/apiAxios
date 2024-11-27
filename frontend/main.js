const baseURL = "http://localhost:3333"

function getProducts(){
    axios.get(`${baseURL}/listAllProducts`)
    .then(response=>{
        const data = response.data
        const content = document.getElementById('content')

        while(content.firstChild){
            content.removeChild(content.firstChild)
        }

        for(const item of data){
            let li = document.createElement('li')
            li.innerHTML = `${item.id}-${item.productName}`

            content.appendChild(li)
        }
    })
    .catch(error=>{
        console.log(error)
    })
}

function createdProducts(){
    let newProduct = {
        productName : document.getElementById('name').value
    }

    axios.post(`${baseURL}/createProducts`,newProduct)
    .then(responde=>{
        main()
    })
    .catch(error=>{
        alert(error)
    })
}

function clearControls(){
    const inputName = document.getElementById('name');
    inputName.focus();
    inputName.value = ""
}

function main(){
    getProducts()
    clearControls()
}

main();