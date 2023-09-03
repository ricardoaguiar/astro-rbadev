/** @jsxImportSource react */

import { addItemToCart } from '../stores/cart';
import type { ShopItem } from '../types';

export const AddToCart = ({ item }: { item: ShopItem }) => {
  return (
    <button
      onClick={() => addItemToCart(item)}
      className="big-link"
    >
      Add to cart
    </button>
  );
}