import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const productDetail1 = {
    _id: "001",
    title: "iPhone 2",
    price: 1000,
    brand: "Apple",
    thumbnail: "https://imagedelivery.net/znDGKaxxskgDbNUpqPVRFg/ph-collection-media/images/436982.jpg/w=1920,q=75,metadata=keep",
};

function Product({ productDetail = productDetail1 }) {
    return (
        <div className="product">
            <img
                alt={productDetail.title}
                src={productDetail.thumbnail}
                srcSet={`${productDetail.thumbnail} 1x, ${productDetail.thumbnail}?w=400 2x`}
                sizes="(max-width: 600px) 100vw, (min-width: 600px) 50vw, 200px"
            />
            <h4>{productDetail.title}</h4>
            <h5>{productDetail.brand}</h5>
            <p>${productDetail.price.toFixed(2)}</p> {/* Format price to 2 decimal places */}
            <button>Add to Cart</button>
        </div>
    );
}

// Define prop types for better validation and documentation
Product.propTypes = {
    productDetail: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        brand: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
    }),
};

export default Product;
