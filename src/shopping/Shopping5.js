
import { useNavigate } from 'react-router-dom';
import { IoIosArrowDropright } from "react-icons/io";

const Shopping5 = () => {
  const navigate = useNavigate();

  const goToMyproject = () => {
    navigate('/myproject');
  };

  return (
    <div>
      <p>shopping5</p>
      <IoIosArrowDropright onClick={goToMyproject} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default Shopping5;