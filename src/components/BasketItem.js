import React, {useContext} from 'react';
import { ShopContext } from './Context';

function BasketItem(props) {

    const { id, name, price, quantity} = props

    const {removeFromBasket, incrementQuantity, decrementQuantity} = useContext(ShopContext)

    return (
        <li className="colleection-item">
            {name} x{quantity} = {price * quantity} <b>$</b>

            <span className="secondary-content">
                <i className="material-icons basket-delete" onClick={() => removeFromBasket(id)}>delete_forever</i>
            </span>
            <span className="secondary-content">
                <i className="material-icons basket-delete" onClick={() => incrementQuantity(id)}>add</i>
            </span>
            <span className="secondary-content">
                <i className="material-icons basket-delete" onClick={() => decrementQuantity(id)}>remove</i>
            </span>
        </li>
    );
}

export default BasketItem;