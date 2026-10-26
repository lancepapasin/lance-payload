const priceFormatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export const formatPrice = (amount: number) => priceFormatter.format(amount);
