import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice.jsx';
import { plants } from '../data/plants.js';

const categories = ['Air Purifying', 'Low Maintenance', 'Decorative'];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAdded = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="content-page">
      <header className="page-heading">
        <p className="eyebrow">FIND YOUR NEW FAVOURITE</p>
        <h1>Shop houseplants</h1>
        <p>Fresh greenery for every room, routine, and growing experience.</p>
      </header>
      {categories.map((category) => (
        <section className="plant-category" key={category}>
          <div className="section-title"><h2>{category}</h2><span>{plants.filter((p) => p.category === category).length} plants</span></div>
          <div className="plant-grid">
            {plants.filter((plant) => plant.category === category).map((plant) => (
              <article className="plant-card" key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <div className="plant-card-body">
                  <span className="plant-tag">{plant.category}</span>
                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <div className="plant-card-footer">
                    <strong>₹{plant.price.toLocaleString('en-IN')}</strong>
                    <button disabled={isAdded(plant.id)} onClick={() => dispatch(addToCart(plant))}>
                      {isAdded(plant.id) ? 'Added ✓' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
