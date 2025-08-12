import Clonecoding2 from "./Clonecoding2"; // TESLA
import Clonecoding3 from "./Clonecoding3"; // NETFLIX
import Clonecoding4 from "./Clonecoding4"; // AIRBNB
import Clonecoding5 from "./Clonecoding5"; // MY DAYS


const Clonecoding1 = () => {
  return (
    <div className="clone-container" id="clonecoding1">
      <h2>CLONE CODING <br/> PROJECT</h2>

      <div className="clone-grid">
        {/* Tesla */}
        <div className="clone-item">
          <img src="/images/tesla.png" alt="tesla" />
          <Clonecoding2 />
        </div>

        {/* Netflix */}
        <div className="clone-item">
          <img src="/images/netflix.png" alt="netflix" />
          <Clonecoding3 />
        </div>

        {/* Airbnb */}
        <div className="clone-item">
          <img src="/images/airbnb.png" alt="airbnb" />
          <Clonecoding4 />
        </div>

        {/* My Days - full width */}
        <div className="clone-item full-width">
          <img src="/images/mydays.png" alt="mydays" />
          <Clonecoding5 />
        </div>
      </div>
    </div>
  );
};

export default Clonecoding1;
