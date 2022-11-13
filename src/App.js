import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // all products 
  const products = [
    { name: 'Books', price: 200 },
    { name: 'Loshon', price: 180 },
    { name: 'router', price: 2900 },
    { name: 'stand', price: 11 },
    { name: 'mobile phone', price: 10000 },
    { name: 'laptop', price: 20000 },
  ];

  return (
    <div className="App">
      <ExternalUsers></ExternalUsers>
      {/* counter component  */}
      <Counter></Counter>

      {/* products loops  */}
      <div className="product-containers">
        {
          products.map(product => <Product name={product.name} price={product.price}></Product>)
        }
      </div>

    </div>
  );
}
// data call from json placehonder api
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className="all-users">
      {
        users.map(user => <Users name={user.name} email={user.email} phone={user.phone}></Users>)
      }
    </div>
  );
}
function Users(props) {
  return (
    <div class="single-user">
      <h1>Users:{props.name}</h1>
      <h2>Email: {props.email}</h2>
      <p><strong>Phone: {props.phone}</strong></p>
    </div>
  );
}

// display product item in UI
function Product(props) {
  return (
    <div className="product-item">
      <h2>Product: {props.name} </h2>
      <h3>Price: {props.price}</h3>
      <button className="buy-btn">buy now</button>
    </div>
  );
}

// Counter jsxf
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1>Counter: {count} </h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;





