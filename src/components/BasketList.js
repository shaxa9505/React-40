import React, {useContext} from 'react';
import BasketItem from './BasketItem';
import { ShopContext } from './Context';

function BasketList() {
    const {order = [], handleBasketShow = Function.prototype} = useContext(ShopContext)

    const totalPrice = order.reduce((sum, orderItem) => {
        return sum + orderItem.price * orderItem.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active">
                Basket
            </li>

            {order.length ? order.map(item => {
                return (
                    <BasketItem key={item.id} {...item} />
                )
            }): <li>Basket is empty</li>}

            <li className="collection-item active">
                Total price {totalPrice} <b>$</b>
            </li>
            <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
        </ul>
    );
}

export default BasketList;