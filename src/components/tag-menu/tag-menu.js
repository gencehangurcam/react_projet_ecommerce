import React from 'react';

const TagMenu = ({
    tagList=[],
    handleOnClick
}) => {
    return (
        <ul className='d-flex'>
            {
                tagList.map((tag, key) => <li key={key} className='m-3'>
                    <a onClick={() => handleOnClick(tag)}>{tag}</a>
                </li>)
            }
        </ul>
    );
};

export default TagMenu;