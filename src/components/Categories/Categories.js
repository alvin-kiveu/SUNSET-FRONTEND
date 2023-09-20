import React, { Component } from "react";
import "./Categories.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

class Categories extends Component {
  handleCategoryClick = (name) => {
    // Handle category click event here
    console.log(`Clicked on category: ${name}`);
  };

  render() {
    const categories = [
      {
        name: "Wine",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/wine.png",
      },
      {
        name: "Beer",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/beer.png",
      },
      {
        name: "Liquor",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/liquor.png",
      },
      {
        name: "Canned Cocktails",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/ready-to-drink.png",
      },
      {
        name: "Hard Seltzer",
        imageUrl: "	https://dydza6t6xitx6.cloudfront.net/navigation/category/hard-seltzer.png",
      },
      {
        name: "Mixers & more",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/zero-proof.png",
      },
      {
        name: "Extras",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/extras.png",
      },
      {
        name: "Beer",
        imageUrl: "https://dydza6t6xitx6.cloudfront.net/navigation/category/beer.png",
      },
      
     
    ];

    return (
      <div className="categories-container">
        <div className="d-flex flex-row overflow-auto"> {/* Use Bootstrap classes for horizontal scroll */}
          {categories.map((category, index) => (
            <div
              key={index}
              className="category p-3 text-center" // Add Bootstrap classes for styling
              onClick={() => this.handleCategoryClick(category.name)} // Handle click event
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="category-image"
              />
              <p className="category-name">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
