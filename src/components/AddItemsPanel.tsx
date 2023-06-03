import React from 'react';

interface AddItemsPanelProps {
    addItem: (itemName: string, itemPrice: number) => void;
}

const AddItemsPanel: React.FC<AddItemsPanelProps> = ({ addItem }) => {
    const handleAddItem = (itemName: string, itemPrice: number) => {
        addItem(itemName, itemPrice);
    };

    return (
        <div>
            <h2>Добавить элементы</h2>
            <button onClick={() => handleAddItem('Гамбургер', 80)}>Гамбургер</button>
            <button onClick={() => handleAddItem('Картофель фри', 50)}>Картофель фри</button>
            <button onClick={() => handleAddItem('Пицца', 150)}>Пицца</button>
            <button onClick={() => handleAddItem('Двойной бургер', 160)}>Двойной бургер</button>
            <button onClick={() => handleAddItem('Картофель фри х2', 90)}>Картофель фри x2</button>
        </div>
    );
};

export default AddItemsPanel;
