import { createContext, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product, onChangeArgs, InitialValues } from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (mensaje: string) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  value?: number; 
  onChange?: (args: onChangeArgs) => void;
  initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: Props) => {
  const { counter, maxCount, increaseBy } = useProduct({ onChange, product, value, initialValues });

  return (
    <Provider
      value={{
        counter,
        maxCount,
        product,
        increaseBy,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        { children('Hola mundo') }
      </div>
    </Provider>
  );
};
