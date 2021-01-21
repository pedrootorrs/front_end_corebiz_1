let data;

axios.get('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(function (response) {
        data = response.data
        console.log(data)
        let shelter = document.getElementById('productsShelterCore')
        let conteinerIndex = 0
        data.map((value, index) => {
            let conteiner = document.createElement("div")
            let image = document.createElement("img")
            let imageDisc = document.createElement("img")
            let productsName = document.createElement("p")
            let productsStars = document.createElement("div")
            let productsListPrice = document.createElement("p")
            let productsPrice = document.createElement("p")
            let productsInstallments = document.createElement("p")
            let btnBuy = document.createElement("button")
            if (value.listPrice) {
                productsListPrice.append("de R$ " + (value.listPrice / 100).toLocaleString("pt-br", { minimumFractionDigits: 2 }))
                conteiner.appendChild(imageDisc)
            }
            if (value.installments.length) {
                let installments = value.installments[0]
                productsInstallments.append("ou em " + (installments.quantity) + "x de R$ " + (installments.value / 100).toLocaleString("pt-br", { minimumFractionDigits: 2 }))
            }
            for (let index = 1; index <= 5; index++) {
                let stars = document.createElement("img")
                if (index <= value.stars) {
                    stars.setAttribute("src","./imagens/estrelacheia.png")
                }
                else {
                    stars.setAttribute("src","./imagens/estrelavazia.png")
                }
                productsStars.appendChild(stars)
            }
            conteiner.setAttribute("class", "productsConteiner")
            productsName.setAttribute("class", "productsName")
            imageDisc.setAttribute("class","flag")
            productsListPrice.setAttribute("class", "productsListPrice")
            productsPrice.setAttribute("class", "productsPrice")
            productsInstallments.setAttribute("class", "productsInstallments")
            btnBuy.setAttribute("class", "btnBuy")
            image.setAttribute("src", value.imageUrl)
            imageDisc.setAttribute("src","./imagens/Flag.png")
            productsName.append(value.productName)
            productsPrice.append("por R$ " + (value.price / 100).toLocaleString("pt-br", { minimumFractionDigits: 2 }))
            btnBuy.append("COMPRAR")
            conteiner.appendChild(image)
            conteiner.appendChild(productsName)
            conteiner.appendChild(productsStars)
            conteiner.appendChild(productsListPrice)
            conteiner.appendChild(productsPrice)
            conteiner.appendChild(productsInstallments)
            conteiner.appendChild(btnBuy)
            shelter.appendChild(conteiner)
        })
    })
    .catch(function (error) {
        data = []
        console.log(error);
    })


