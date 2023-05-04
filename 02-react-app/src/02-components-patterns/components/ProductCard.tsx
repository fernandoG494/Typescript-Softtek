import { ReactElement, createContext } from "react";
import { useProduct } from "../hooks/useProduct";
import {
	ProductContextProps,
  Product,
} from "../interfaces/interfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
};

export const ProductCard = ({ children, product, className }: Props) => {
	const { counter, increaseBy } = useProduct();

	return (
		<div className={`${ styles.productCard } ${ className }`}>
			<Provider
				value={{
					counter,
					increaseBy,
					product,
				}}
			>
				{children}
			</Provider>
		</div>
	);
};
