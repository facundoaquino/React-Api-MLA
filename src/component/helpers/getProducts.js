

const getProducts =async (product) => {


    const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${product}`)
    const data = await response.json()

    return  data
}

export default getProducts
