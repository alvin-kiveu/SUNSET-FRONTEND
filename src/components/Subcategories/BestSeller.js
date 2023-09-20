import React, { Component } from 'react';
import './BestSeller.css';

class BestSeller extends Component {
  render() {
    const bestseller = [
      {
        name: "Miller Lite Lager Beer",
        imageUrl: "https://products1.imgix.drizly.com/ci-miller-lite-424a8b5143a4c04a.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
        rate: "4.5",
        reviews: "300",
        price: "ksh 200",
      },
      {
        name: "Bud Light Lager Beer",
        imageUrl: "https://products1.imgix.drizly.com/ci-aperol-4dbb0dd1d2e50f9d.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
        rate: "4.5",
        reviews: "1.5k",
        price: "ksh 200",
      },
      {
        name: "Coors Light Lager Beer",
        imageUrl: "https://products0.imgix.drizly.com/ci-high-noon-tequila-seltzer-variety-8-pack-a5487ca4b99c039f.png?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
        rate: "4.5",
        reviews: "100",
        price: "ksh 200",
      },
      {
        name: "La Marca Prosecco Sparkling Wine",
        imageUrl: "https://products1.imgix.drizly.com/ci-la-marca-prosecco-e31a356c8afc6f54.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
        rate: "4.5",
        reviews: "1k",
        price: "ksh 200",
      },
      {
        name: "Heineken Lager Beer",
        imageUrl: "https://products3.imgix.drizly.com/ci-makers-mark-101-57dad814c7d078ed.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
        rate: "4.5",
        reviews: "20",
        price: "ksh 200",
      },
      {
        name: "Budweiser Lager Beer",
        imageUrl: "https://products1.imgix.drizly.com/ci-veuve-clicquot-yellow-label-e147d2b1b6d562d9.jpeg?auto=format%2Ccompress&ch=Width%2CDPR&fm=jpg&q=20",
        rate: "4.5",
        reviews: "138",
        price: "ksh 200",
      },
    ];
    return (
      <div className="sub-category-container">
        <div className="sub-category-header">Best Seller</div>
        <div className="d-flex flex-row overflow-auto">
          {bestseller.map((bestseller, index) => (
            <div
              key={index}
              className="sub-category p-3 text-center"
              onClick={() => this.handleBestSellerClick(bestseller.name)}
            >
              <div className="sub-category-image-container">
                <img
                  src={bestseller.imageUrl}
                  alt={bestseller.name}
                  className="sub-category-image"
                />
              </div>
              <div className='sub-category-social'>
                <i className="fa fa-star sub-category-star"></i>
                <div className="sub-category-rate">{bestseller.rate}</div>
                (<div className="sub-category-reviews">{bestseller.reviews}</div>)
              </div>
              <div className="sub-category-name">{bestseller.name}</div>

              <div className="sub-category-price">{bestseller.price}</div>

            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BestSeller;