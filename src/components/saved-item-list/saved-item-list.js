import React from 'react';
import SavedItem from '../saved-item/saved-item';

const SavedItemList = ({
    data = []
}) => {
    return (
        <div className='save-item-list'>
            { 
                data.map((item, key) => <SavedItem
                    key={key}
                    data={item}
                />)
            }
        </div>
    );
};

export default SavedItemList;