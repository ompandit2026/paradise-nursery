import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/CartSlice.jsx';

export default function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="content-page cart-page">
      <p className="eyebrow">YOUR SELECTION</p>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="empty-cart"><div className="empty-icon">🪴</div><h2>Your cart is waiting to grow.</h2><p>Add a plant to see it here.</p><Link className="primary-button" to="/plants">Continue Shopping</Link></div>
      ) : (
        <div className="cart-layout">
          <section className="cart-list">
            {items.map((item) => (
              <article className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-product-info"><h3>{item.name}</h3><p>Unit price: ₹{item.price.toLocaleString('en-IN')}</p><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button></div>
                <div className="quantity-control">
                  <button aria-label={`Decrease ${item.name}`} disabled={item.quantity <= 1} onClick={() => dispatch(decreaseQuantity(item.id))}>−</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name}`} onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                </div>
                <strong className="line-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
              </article>
            ))}
          </section>
          <aside className="order-summary">
            <h2>Order Summary</h2>
            <div><span>Items ({items.reduce((n, item) => n + item.quantity, 0)})</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
            <div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div>
            <button className="checkout-button" onClick={() => window.alert('Coming Soon!')}>Checkout</button>
            <Link className="continue-link" to="/plants">← Continue Shopping</Link>
          </aside>
        </div>
      )}
    </main>
  );
}
