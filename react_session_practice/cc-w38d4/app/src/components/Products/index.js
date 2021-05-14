import { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import productAction from '../../actions'

const Products = (props) => {
    console.log("Product props: ",props);
    const {dispatch} = props
    const fecthData = useCallback(() => {
        const url = "https://fakestoreapi.com/products"

        fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch(productAction.productList(data))
        })
    },[dispatch])

    useEffect(() => {
        fecthData()
        
        
    }, [fecthData]);

    console.log("Props after fetch::", props)

    return <>
        <div className="container">
            <h1>Products</h1>
            <div className="listing">
                {
                    props.products.map(product => {
                        return <div className="product" key={product.id}>
                            <div className="left">
                                <div className="title">
                                    {product.title}
                                </div>
                                <div className="category">
                                    {product.category}
                                </div>
                                <div className="desc">
                                    {product.description}
                                </div>
                            </div>
                            <div className="right">
                                <div className="price">
                                    Buy it for ${product.price}
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}

const mapStateToProps = (state) => {
    return {
        products:state
    }
}

export default connect(mapStateToProps)(Products);