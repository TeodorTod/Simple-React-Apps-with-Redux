import CardItem from "./CardItem";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../features/modal/modalSlice";

const CardContainer = () => {
    const { cartItems, total, amount } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    if (amount < 1) {
        return <section className="cart">
            <header>
                <h2>your cart</h2>
                <h4 className="empty-cart">is currently empty</h4>
            </header>
        </section>
    }

    return (
        <section className="cart">
            <header>
                <h2>your cart</h2>
            </header>
            <div>
                {cartItems.map((item) => {
                    return <CardItem key={item.id} {...item} />
                })}
            </div>
            <footer>
                <div className="cart-total">
                    <hr />
                    <h4>total <span>${total}</span></h4>
                </div>
                <button className="btn clear-btn"
                onClick={() => {
                    dispatch(openModal()); 
                }}
                >clear cart</button>
            </footer>
        </section>
    )
}

export default CardContainer