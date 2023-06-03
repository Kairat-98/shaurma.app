import React from 'react';

interface OrderItemProps {
    item: {
        name: string;
        quantity: number;
        price: number;
    };
    removeItem: (itemName: string) => void;
}

const OrderItem: React.FC<OrderItemProps> = ({ item, removeItem }) => {
    const handleRemove = () => {
        removeItem(item.name);
    };

    return (
        <div>
            <p>{item.name}</p>
            <p>Количество: {item.quantity}</p>
            <p>Цена: {item.price} сомов</p>
            <button onClick={handleRemove}>Удалить</button>
        </div>
    );
};

export default OrderItem;
