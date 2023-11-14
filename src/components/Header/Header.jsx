import styled from "styled-components";
import Filters from "../Filters/Filters";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const style = {
  textAlign: "center",
  color: "white",
  backgroundColor: "#1a3439",
  padding: "20px",
  boxSizing: "border-box",
};

const Header = () => {
  var transition = {duration: 3};
  var navigate = useNavigate();

  const goToHome = () => {
    navigate("/receitas");
  };

  return (
    <motion.div
      style={style}
      // exit={{opacity: 0}}
      transition={transition}
    >
      <h1 onClick={goToHome} style={{marginTop: 0}}>
        ReciPad
      </h1>
      <Filters></Filters>
    </motion.div>
  );
};

export default Header;
