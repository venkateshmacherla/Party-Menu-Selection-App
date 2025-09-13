import React from "react";
import DishCard from "./DishCard";

export default function DishList({ dishes, selectedDishes = [], onAdd, onRemove, openModal }) {
    return (
        <div className="dish-list">
            {dishes.map((dish) => {
                const isSelected = selectedDishes.some((d) => d.id === dish.id);
                return (
                    <DishCard
                        key={dish.id}
                        dish={dish}
                        isSelected={isSelected}
                        onAdd={onAdd}
                        onRemove={onRemove}
                        openModal={openModal}
                    />
                );
            })}
        </div>
    );
}
