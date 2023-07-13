export default function Post(product) {
  const style = {
    // width: "50%",
    padding: "5px",
    // margin: "20px auto",
    borderRadius: "10px",
    border: "2px solid orange",
  };
  return (
    <div style={style}>
      <h3>{product.model}</h3>
      <span>{product.memory}gb </span>
      <span>{product.color}</span>
      <p>{product.description}</p>
      {product.new && <p>NEW</p>}
      <p>{product.price}₽</p>
    </div>
  );
}
