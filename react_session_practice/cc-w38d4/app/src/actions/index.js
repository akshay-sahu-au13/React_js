const productAction = () => ({
    productList: (payload) => ({
        type: "products/LIST",
        payload
    })
})

export default productAction ;