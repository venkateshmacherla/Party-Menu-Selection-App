import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import DishList from "./components/DishList";
import Filters from "./components/Filters";
import IngredientDetail from "./components/IngredientDetail"; // new screen
import { dishes } from "./data/mockDishes";
import "./App.css";

// Main Dish Selection Screen
function MainApp() {
  const [selectedCategory, setSelectedCategory] = useState("MAIN COURSE");
  const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];
  const [search, setSearch] = useState("");
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  const [showVeg, setShowVeg] = useState(false);
  const [showNonVeg, setShowNonVeg] = useState(false);

  const navigate = useNavigate();

  const availableDishes = dishes.filter((dish) => {
    const matchesCategory =
      dish.mealType === selectedCategory &&
      dish.name.toLowerCase().includes(search.trim().toLowerCase());

    if (!showVeg && !showNonVeg) return matchesCategory;
    if (showVeg && !showNonVeg) return matchesCategory && dish.isVeg;
    if (!showVeg && showNonVeg) return matchesCategory && !dish.isVeg;
    return matchesCategory;
  });

  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = selectedDishes.filter((dish) => dish.mealType === cat).length;
    return acc;
  }, {});

  const addDish = (dish) => {
    if (!selectedDishes.find((d) => d.id === dish.id)) {
      setSelectedDishes([...selectedDishes, dish]);
    }
  };

  const removeDish = (id) => {
    setSelectedDishes(selectedDishes.filter((dish) => dish.id !== id));
  };

  function handleBack() {
    window.history.back();
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="search-container">
          <i
            className="fa-solid fa-chevron-left back-icon"
            onClick={handleBack}
            role="button"
            tabIndex={0}
          ></i>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search dish for your party..."
            className="search-input"
          />

          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>
      </header>

      <Filters
        categories={categories}
        active={selectedCategory}
        onChange={setSelectedCategory}
        categoryCounts={categoryCounts}
        showVeg={showVeg}
        setShowVeg={setShowVeg}
        showNonVeg={showNonVeg}
        setShowNonVeg={setShowNonVeg}
        selectedCategory={selectedCategory}
        selectedDishes={selectedDishes}
      />

      <main className="dish-section">
        <div className="north-header-container">
          <h3 className="north-header">North Indian</h3>
          <span className="north-header-arrow">^</span>
        </div>

        <DishList
          dishes={availableDishes}
          selectedDishes={selectedDishes}
          onAdd={addDish}
          onRemove={removeDish}
          openModal={() => { }}
        />
      </main>

      <footer className="app-footer">
        <div
          className="footer-selection-row clickable-row"
          onClick={() => {
            if (selectedDishes.length) setDetailModalOpen(true);
          }}
        >
          <span>
            Total Dish Selected <b>{selectedDishes.length}</b>
          </span>
          <span className="footer-arrow">&#8250;</span>
        </div>
        <button className="continue-btn">Continue</button>
      </footer>

      {/* Detail Modal */}
      {detailModalOpen && selectedDishes.length > 0 && (
        <div
          className="modal-backdrop-card"
          onClick={() => setDetailModalOpen(false)}
        >
          <div
            className="detail-modal-card detail-modal-vertical-scroll"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedDishes.map((dish) => (
              <div key={dish.id} className="detail-card">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="detail-card-img"
                />
                <div className="detail-card-header">
                  <h3 className="detail-card-title">
                    {dish.name}{" "}
                    {dish.isVeg ? (
                      <span className="veg-dot" title="Vegetarian">🟢</span>
                    ) : (
                      <span className="nonveg-dot" title="Non-Vegetarian">🔴</span>
                    )}
                  </h3>
                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeDish(dish.id);
                    }}
                  >
                    Remove
                  </button>
                </div>
                <div className="detail-card-desc">
                  <span className="region-name">North Indian </span>
                  {dish.description}
                </div>
                <button
                  className="ingredient-btn"
                  onClick={() => {
                    navigate("/ingredient-detail", { state: { dish } });
                    setDetailModalOpen(false);
                  }}
                >
                  🍲 Ingredient
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

// App component with Router
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/ingredient-detail" element={<IngredientDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
