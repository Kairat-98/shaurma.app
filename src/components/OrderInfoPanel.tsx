import React from 'react';
import OrderItem from './OrderItem';

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

interface OrderInfoPanelProps {
    orderItems: OrderItem[];
    totalCost: number;
    removeItem: (itemName: string) => void;
}

const OrderInfoPanel: React.FC<OrderInfoPanelProps> = ({ orderItems, totalCost, removeItem }) => {
    return (
        <div>
            <h2>Сведения о заказе</h2>
            {orderItems.length === 0 ? (
                <p>В заказе пока нет элементов.</p>
            ) : (
                <div>
                    {orderItems.map(item => (
                        <OrderItem key={item.name} item={item} removeItem={removeItem} />
                    ))}
                    <p>Общая стоимость: {totalCost} сомов</p>
                </div>
            )}
        </div>
    );
};

export default OrderInfoPanel;
