import './App.css'

function App() {
  const products = [
    { id: 1, name: 'ノートPC', price: 120000, category: 'PC'},
    { id: 2, name: 'マウス', price: 3000, category: '周辺機器'},
    { id: 3, name: 'キーボード', price: 8000, category: '周辺機器'},
    { id: 4, name: 'タブレット', price: 50000, category: 'PC'},
  ];

  return (
    <>
      <ul>
        {products
          .filter((product) => product.category === 'PC')
          .map((product) => (
            <li key={product.id}>
              {product.name}: \{product.price}
            </li>
        ))}
      </ul>
    </>
  )
}

export default App
