import { createContext, ReactElement, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  value?: number; 
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
