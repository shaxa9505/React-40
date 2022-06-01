import React, {useContext} from 'react';
import { ShopContext } from './Context';
import GoodItem from './GoodItem';

function GoodList() {
    
    const {goods = []} = useContext(ShopContext)

    if(!goods.length){
        return <h3>Nothing here</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => {
                return <GoodItem key={item.id} {...item} />
            })}
        </div>
    );
}

export default GoodList;