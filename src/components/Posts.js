import Post from "./Post";
import { useEffect, useState } from "react";

// const API_URL = "https://jsonplaceholder.typicode.com/posts";
const API_URL =
  "https://script.google.com/macros/s/AKfycbzbr8nbF1nJQyA8OdFoQeV2JktX_lUKLpNjQwMMdVXjXStE72zwWbAXRIlqF2vJMufS/exec";

export default function Posts(props) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const categories = await res.json();
        setCategories(categories.sheets);
        // setProducts(categories.products);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  const setHandleProducts = async (category) => {
    let response = await fetch(API_URL + `?category=${category}`);
    const data = await response.json();
    setProducts(data.products);
    console.log(data);
  };
  // const sendData = useCallback(async () => {
  //   const data = await axios
  //     .post(API_URL, newUser)
  //     .then((response) => {
  //       store.dispatch(resultModal(response.data));
  //       handleActiveModalState();
  //     })
  //     .catch((error) => error)
  //     .finally();

  //   // console.log(Object.values(data));
  // }, []);

  // const setHandleProducts = (category) => {
  //   console.log(API_URL + `?category=${category}`);

  //   useEffect(() => {
  //     (async function () {
  //       try {
  //         const res = await fetch(API_URL + `${category}`);
  //         const categories = await res.json();
  //         setCategories(categories);
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //       // setIsLoading(false);
  //     })();
  //   }, []);
  // };

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((json) => setPosts(json))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);
  console.log(products);
  if (error) {
    return <h1>ERROR: {error}</h1>;
  }
  return (
    <div>
      {/* <h1>Categories:</h1> */}
      <hr />
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        categories.map((category, i) => (
          <button onClick={() => setHandleProducts(category)} key={i}>
            {category}
          </button>
        ))
      )}
      {/* {products && <h1>Products:</h1>} */}
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          padding: "10px",
        }}
      >
        {products &&
          products.map((product, i) => (
            <Post key={i} {...product}></Post>
            // <div
            //   key={i}
            //   style={{
            //     backgroundColor: "white",
            //     borderRadius: "6px",
            //     color: "blue",
            //   }}
            // >
            //   <p>Модель {product.model}</p>
            //   <p>Объем памяти {product.memory}</p>
            //   <p>Цвет {product.color}</p>
            //   <p>Описание {product.description}</p>
            //   {product.new && <p>NEW</p>}
            //   <p>Цена {product.price}₽</p>
            // </div>
          ))}
      </div>
    </div>
  );
}
