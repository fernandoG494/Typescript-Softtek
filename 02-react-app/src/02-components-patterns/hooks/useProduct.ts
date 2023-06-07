import { useEffect, useState, useRef } from 'react';
import { InitialValues, Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
	product: Product;
	value?: number;
	initialValues?: InitialValues;
	onChange?: (args: onChangeArgs) => void;
};

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {
	const [counter, setCounter] = useState<number>(initialValues?.count || value);
	const isMounted = useRef(false);

	const isControlled = useRef( !!onChange );

	const increaseBy = (value: number) => {
		if( isControlled.current) {
			return onChange!({ count: value, product });
		};

		const newValue = Math.max(counter + value, 0);
		setCounter(newValue);
		onChange && onChange({ count: newValue, product });
	};

	useEffect(() => {
		if (!isMounted.current) return;
		setCounter(value);
	}, [ value ]);

	useEffect(() => {
		isMounted.current = true;
	}, []);

	return {
		counter,
		increaseBy,
	};
};
