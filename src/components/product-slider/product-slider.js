import React, { useState } from 'react';
import Product from '../product/product';
import TagMenu from '../tag-menu/tag-menu';




const ProductSlider = ({data=[]}) => {


    let tagList = [...new Set(data.map(x => {
        if (x.tags instanceof Array) {
            return x.tags  
        }
    }).flat(1))]

    tagList = tagList.filter(x => x !== undefined)
    tagList.unshift("all")
    console.log(tagList);
    
    const [dataToShow, setDataToShow] = useState(data)
    const [tagFilter, setTagFilter] = useState("")
    

    return (
        <div className='d-flex justify-content-center'>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <TagMenu tagList={tagList} handleOnClick={(tag) => {

                        if (tag === tagFilter || tag === "all") {
                            setDataToShow(data)
                            setTagFilter("")
                        } else {
                            const filterData = data.filter(x => {
                                if (x.tags) {
                                    return x.tags.indexOf(tag) > -1
                                }
                            })
                            setDataToShow(filterData)
                            setTagFilter(tag)
                        }
                    }} />
                </div>
                <div className='d-flex justify-content-center mb-5 row'>
                    {
                        dataToShow.length > 0 ?
                        dataToShow.map((x, key) => <Product
                                key={key}
                                title={x.title}
                                image={x.image} 
                                tags={x.tags}
                                price={x.price}  
                                reduction={x.reduction} 
                                heart={x.heart}    
                            />)
                        : null
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;