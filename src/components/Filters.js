import React from "react";

export default function Filters({
    categories,
    active,
    onChange,
    categoryCounts,
    showVeg,
    setShowVeg,
    showNonVeg,
    setShowNonVeg,
    selectedCategory,
    selectedDishes,
}) {
    const safeSelectedCategory = selectedCategory || "";

    return (
        <>
            <div className="filters">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${active === cat ? "active" : ""}`}
                        onClick={() => onChange(cat)}
                    >
                        {cat}{" "}
                        <span className="filter-badge">
                            {categoryCounts[cat] || 0}
                        </span>
                    </button>
                ))}
            </div>

            <h3 className="header-main-course">
                {safeSelectedCategory.replace(/COURSE/i, "Courses")} Selected (
                {
                    selectedDishes.filter(
                        (d) => d.mealType === safeSelectedCategory
                    ).length
                }
                )
                <span className="filter-toggle-group">
                    {/* Veg Toggle */}
                    <span
                        className={`filter-veg-toggle${showVeg ? " active" : ""
                            }`}
                        onClick={() => setShowVeg((prev) => !prev)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && setShowVeg((prev) => !prev)
                        }
                        tabIndex={0}
                        role="button"
                        title="Show Vegetarian"
                    >
                        <span className="filter-dot filter-veg-dot"></span>
                    </span>

                    {/* Non-Veg Toggle */}
                    <span
                        className={`filter-nonveg-toggle${showNonVeg ? " active" : ""
                            }`}
                        onClick={() => setShowNonVeg((prev) => !prev)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && setShowNonVeg((prev) => !prev)
                        }
                        tabIndex={0}
                        role="button"
                        title="Show Non-Vegetarian"
                    >
                        <span className="filter-dot filter-nonveg-dot"></span>
                    </span>
                </span>
            </h3>
        </>
    );
}
