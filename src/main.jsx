import { createRoot } from 'react-dom/client';
import './index.css';

function App() {
    return (
        <div className="products-container">

            <div className="product-card">
                <img src="/photo/web_development.jpg" alt="Web Development" />
                <div className="product-info">
                    <h2>Web Development</h2>
                    <p>Learn HTML, CSS and JavaScript and build real projects.</p>
                    <h3>$49</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="product-card">
                <img src="/photo/wireless_headphones.jpg" alt="Headphones" />
                <div className="product-info">
                    <h2>Wireless Headphones</h2>
                    <p>High quality sound with noise cancellation.</p>
                    <h3>$120</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="product-card">
                <img src="/photo/basic_tshirt.jpg" alt="T-Shirt" />
                <div className="product-info">
                    <h2>Basic T-Shirt</h2>
                    <p>Comfortable and stylish for everyday wear.</p>
                    <h3>$25</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="product-card">
                <img src="/photo/indoor_plant.jpg" alt="Indoor Plant" />
                <div className="product-info">
                    <h2>Indoor Plant</h2>
                    <p>Bring nature into your home with this beautiful plant.</p>
                    <h3>$18</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="product-card">
                <img src="/photo/gaming_mouse.jpg" alt="Gaming Mouse" />
                <div className="product-info">
                    <h2>Gaming Mouse</h2>
                    <p>Precision, speed and comfort for a better gaming experience.</p>
                    <h3>$70</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="product-card">
                <img src="/photo/mechanical_keyboard.jpg" alt="Mechanical Keyboard" />
                <div className="product-info">
                    <h2>Mechanical Keyboard</h2>
                    <p>Durable and responsive for work and gaming.</p>
                    <h3>$90</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="product-card">
                <img src="/photo/atomic_habits.jpg" alt="Atomic Habits Book" />
                <div className="product-info">
                    <h2>Atomic Habits</h2>
                    <p>A proven way to build good habits and break bad ones.</p>
                    <h3>$15</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            <div className="product-card">
                <img src="/photo/travel_backpack.jpg" alt="Travel Backpack" />
                <div className="product-info">
                    <h2>Travel Backpack</h2>
                    <p>Spacious, durable and perfect for everyday use.</p>
                    <h3>$65</h3>
                    <div className="card-actions">
                        <button className="add-to-cart">Add to cart</button>
                        <button className="favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48">
                                <path d="M0 0h48v48H0z" fill="none" />
                                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 12.124c-1.745-2.892-4.908-4.833-8.532-4.833c-5.505 0-9.968 4.463-9.968 9.968c0 1.258.243 2.457.669 3.566C9.465 30.305 24 40.709 24 40.709s14.535-10.403 17.831-19.884a9.9 9.9 0 0 0 .669-3.566c0-5.505-4.463-9.968-9.968-9.968c-3.624 0-6.787 1.94-8.532 4.833" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

createRoot(document.getElementById('root')).render(<App />);