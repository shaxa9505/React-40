import React, {useContext} from 'react';
import { ShopContext } from './Context';

function Cart() {

    const {order, handleBasketShow = Function.prototype} = useContext(ShopContext)
    const quantity = order.length

    return (
        <div className="cart blue white-text" onClick={handleBasketShow}>
            <i className="material-icons">add_shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}

export default Cart;