import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { useState } from "react";

const product1 = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee Mug 2 - Card",
  img: "./coffee-mug2.png",
};

const products: Product[] = [product1, product2];

interface ProductInCard extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{[key: string]: ProductInCard}>({});

  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
    setShoppingCart(oldShoppingCard => {
      if(count === 0){
        const { [product.id]: toDelete, ...rest } = oldShoppingCard;
        return rest;
      }

      return {
        ...oldShoppingCard,
        [ product.id ]: {...product, count}
      }
    });
  };

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
