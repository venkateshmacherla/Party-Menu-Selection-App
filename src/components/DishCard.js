import React from "react";
import { useNavigate } from "react-router-dom";
import ingredientImg from './assets/ingredient.png';

export default function DishCard({
    dish,
    isSelected,
    onAdd,
    onRemove
}) {
    const navigate = useNavigate();

    return (
        <div className="dish-card">
            <div className="dish-info">
                <h3 className="dish-title">
                    {dish.name}{" "}
                    {dish.type === "VEG" ? (
                        <span className="veg-dot">🟢</span>
                    ) : (
                        <span className="nonveg-dot">🔴</span>
                    )}
                </h3>
                <p className="dish-description">
                    {dish.description.slice(0, 50)}...{" "}
                    <span className="read-more">Read more</span>
                </p>
                <button
                    className="ingredient-btn"
                    onClick={() => {
                        // Navigate to ingredient detail page with dish state
                        navigate("/ingredient-detail", { state: { dish } });
                    }}
                >
                    <img
                        src={ingredientImg}
                        alt="Ingredient"
                        style={{
                            width: 26,
                            height: 26,
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            marginRight: 5,
                            objectFit: 'contain'
                        }}
                    />
                    Ingredient
                </button>
            </div>

            <div className="dish-action">
                <div className="dish-img-wrapper">
                    <img src={dish.image} alt={dish.name} className="dish-img" />
                    <div className="dish-btn-wrapper">
                        {isSelected ? (
                            <button className="remove-btn" onClick={() => onRemove(dish.id)}>
                                Remove
                            </button>
                        ) : (
                            <button className="add-btn" onClick={() => onAdd(dish)}>
                                Add +
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
