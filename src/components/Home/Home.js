import { Component } from "react";  
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import BestSeller from '../Subcategories/BestSeller';

class Home extends Component {
  render() {
    return (
      <>
       <Banner />
        <div className="container">
          <Categories />
          <BestSeller />
        </div>
      </>
    )
  }
}
export default Home;