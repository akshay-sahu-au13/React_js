import {useEffect} from 'react'
import {connect} from 'react-redux';
import productActions from '../../actions';
function Products(props) {
    const {dispatch} = props;
    useEffect(() => {
        dispatch(productActions.productList)
        
    }, [dispatch])

    return (
        <div className="products">
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
    )
}

const mapStateToProps = (state) => {
    return {
        products: state
    }
}

export default connect(mapStateToProps)(Products);
