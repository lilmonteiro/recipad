import styled from "styled-components";
import Filters from "../Filters/Filters";
import {motion} from "framer-motion";

const style = {
  textAlign: "center",
  color: "white",
  backgroundColor: "#1a3439",
  padding: "20px",
  boxSizing: "border-box",
};

const Header = () => {
  var transition = {duration: 3};

  return (
    <motion.div 
      style={style} 
      // exit={{opacity: 0}} 
      transition={transition}>
      <h1 style={{marginTop:0}}>ReciPad</h1>
      <Filters></Filters>
    </motion.div>
  );
};

export default Header;
