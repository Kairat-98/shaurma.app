import React, { useState } from 'react';
import OrderInfoPanel from './components/OrderInfoPanel';
import AddItemsPanel from './components/AddItemsPanel';

interface OrderItem {
    name: string;
    quantity: number;
    price: number;
}

const App: React.FC = () => {
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    const addItemToOrder = (itemName: string, itemPrice: number) => {
        const existingItem = orderItems.find(item => item.name === itemName);

        if (existingItem) {
            const updatedItems = orderItems.map(item =>
                item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
            );
            setOrderItems(updatedItems);
        } else {
            const newItem: OrderItem = { name: itemName, quantity: 1, price: itemPrice };
            setOrderItems([...orderItems, newItem]);
        }
    };

    const removeItemFromOrder = (itemName: string) => {
        const updatedItems = orderItems.filter(item => item.name !== itemName);
        setOrderItems(updatedItems);
    };

    const totalCost = orderItems.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <OrderInfoPanel orderItems={orderItems} totalCost={totalCost} removeItem={removeItemFromOrder} />
                </div>
                <div className="col-md-6">
                    <AddItemsPanel addItem={addItemToOrder} />
                </div>
            </div>
        </div>
    );
};

export default App;

