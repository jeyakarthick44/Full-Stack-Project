const initialState = {
    products : []
}
const products = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state
    }

}

export default products;