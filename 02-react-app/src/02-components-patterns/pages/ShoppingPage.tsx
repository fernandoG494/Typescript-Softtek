import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            className="bg-dark text-white"
            key={ product.id }
            onChange={ onProductCountChange }
            product={ product }
            value={ shoppingCart[product.id]?.count || 0 }
          >
            <ProductImage
              className="custom-image"
              style={{
                boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
              }}
            />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              className="bg-dark text-white"
              key={key}
              onChange={onProductCountChange}
              product={product}
              style={{ width: "100px" }}
              value={ product.count }
            >
              <ProductImage
                className="custom-image"
                style={{
                  boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
                }}
              />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center"
                }}
              />
            </ProductCard>
          ))
        }
      </div>
    </div>
  );
};
