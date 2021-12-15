import "./product.scss"

const Product = ({
    title,
    image,
    tags=[],
    price,
    reduction,
    save,
}) => {

    return(

    <li className="product d-flex justify-content-center col-sm-12 col-md-3 col-lg-3">
        <div>
            <div className="product-header" style={{backgroundImage: `url(${image})`}}>
                <div className="item-tag-list">
                    {
                        tags instanceof Array && tags.length > 0 ? 
                            tags.map((tag, key) => <span key={key} className={`tag tag-${tag}`}>{tag}</span>) 
                        : null
                    }
                </div>
                <div className="item-heart">
                    <button onClick={save} className='btn-heart'><i class="fas fa-heart"></i></button>
                </div>
            </div>
            <div className="product-footer">
                <h4>{title}</h4>
                <div>
                    {
                        price ?
                            <span className={`slider-item-price${reduction ? ' text-line': ''}`}>${price}</span>
                        : ''
                    }
                    {
                        reduction ?
                            <span className="slider-item-reduction">${reduction}</span>
                        : ''
                    }
                </div>
            </div>
        </div>
    </li>
    
    )    

}

export default Product