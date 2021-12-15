import React, { useContext } from "react";
import { ProductsContext } from "../context-provider/product.context";

import PageTemplate from "../templates/page/page.template";
import ProductSlider from '../components/product-slider/product-slider';

const products = [
    {
        "title": "Helfilger",
        "image": "/assets/img/img1.png",
        "tags": ["sale", "new"],
        "price": "49",
        "reduction": "39"
    },
    {
        "title": "Nike Just",
        "image": "/assets/img/img2.png",
        "tags": "rare",
        "price": "37",
        "reduction": "27"
    },
    {
        "title": "Fila",
        "image": "/assets/img/img3.png",
        "price": "100",
        "reduction": "80"
    },
    {
        "title": "Timberland",
        "image": "/assets/img/img4.png",
        "price": "150",
        "reduction": "99"
    },
    {
        "title": "Helfilger",
        "image": "/assets/img/img1.png",
        "tags": ["sale", "new"],
        "price": "49",
        "reduction": ""
    },
    {
        "title": "Helfilger",
        "image": "/assets/img/img1.png",
        "tags": ["sale", "new"],
        "price": "49",
        "reduction": "39"
    },
    {
        "title": "Nike Just",
        "image": "/assets/img/img2.png",
        "tags": "rare",
        "price": "37",
        "reduction": ""
    },
    {
        "title": "Fila",
        "image": "/assets/img/img3.png",
        "price": "100",
        "reduction": "80"
    },
    {
        "title": "Timberland",
        "image": "/assets/img/img4.png",
        "price": "150",
        "reduction": "99"
    },
    {
        "title": "Helfilger",
        "image": "/assets/img/img1.png",
        "tags": ["sale", "new"],
        "price": "49",
        "reduction": ""
    },
    {
        "title": "Helfilger",
        "image": "/assets/img/img1.png",
        "tags": ["sale", "new"],
        "price": "49",
        "reduction": ""
    },
    {
        "title": "Nike Just",
        "image": "/assets/img/img2.png",
        "tags": "rare",
        "price": "37",
        "reduction": "27"
    }
]
const ProductsRoute = () => {
    
    const { products, setProducts } = useContext(ProductsContext);

    return <>
        <PageTemplate
            pageTitle={"Products"}
            pageContent={<>
                <ProductSlider data={products} />
            </>}
        ></PageTemplate>
    </>
}

export default ProductsRoute;