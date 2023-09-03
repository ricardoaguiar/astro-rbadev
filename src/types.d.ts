export type ShopItem = {
	id: number;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
	};
	price: number;
};

export type CartStore = {
	quantity: number;
	item: ShopItem;
};
