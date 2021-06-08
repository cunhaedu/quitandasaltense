import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
}

type CartContextData = {
  productList: Product[];
  total: number;
  addProduct: (product: Product) => void;
  removeProduct: (index: number, product: Product) => void;
}

type CartContextProviderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  function addProduct(product: Product) {
    const products = productList;
    products.push(product);
    setProductList(products);

    setTotal(total + Number(product.price));
  }

  function removeProduct(index: number, product: Product) {
    if (productList.length <= 1) {
      setProductList([]);
      setTotal(0);
    } else {
      setProductList(productList.splice(index - 1, 1));
      setTotal(total - Number(product.price));
    }
  }

  return (
    <CartContext.Provider value={{
      total,
      removeProduct,
      addProduct,
      productList,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
