import About from "./About";
import Banner from "./Banner";
import Services from "./Services";

const Homepage = () => {
      return (
            <div className="max-w-7xl mx-auto">
                <Banner/>
                <About/>
                <Services/>
               
            </div>
      );
};

export default Homepage;