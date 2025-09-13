import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function IngredientDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const dish = location.state?.dish;

    if (!dish) {
        return (
            <div className="ingredient-detail no-selection">
                <p>No dish selected.</p>
                <button className="btn back-btn" onClick={() => navigate(-1)}>
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="ingredient-detail">
            <header className="ingredient-header">
                <h2 className="dish-title">{dish.name}</h2>
                <button
                    className="btn back-btn"
                    onClick={() => navigate(-1)}
                    aria-label="Go back to previous page"
                >
                    ← Back
                </button>
            </header>

            <div className="dish-description-container">
                <p className="dish-desc">{dish.description}</p>
                <img src={dish.image} alt={dish.name} className="dish-image" />
            </div>

            <section className="ingredients-section">
                <h3 className="ingredients-title">Ingredients <span className="servings-info">(For 2 or 3 people)</span></h3>
                <table className="ingredients-table" aria-label={`Ingredients for ${dish.name}`}>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dish.ingredients.map((ing, i) => (
                            <tr key={i}>
                                <td>{ing.name}</td>
                                <td className="ingredient-qty">{ing.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
