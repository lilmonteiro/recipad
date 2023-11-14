import {Typography} from "@mui/joy";
import {motion} from "framer-motion";
import {useEffect} from "react";

const IngredientsList = ({ingredients}) => {
    
  //   useEffect(() => {
  //     console.log(ingredients);
  //   }, [ingredients]);

  return (
    <Typography
      level={"body-sm"}
      component={motion.div}
      style={{margin: 0}}
      pb={1}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Typography level={"body-md"} component={motion.h2}>
        {ingredients.titulo !== "" && ingredients.titulo}
      </Typography>
      {ingredients.titulo ? <br /> : null}
      {ingredients.conteudo.map((item, i) => {
        return (
          <li key={i}>
            {item}
            <br />
          </li>
        );
      })}
    </Typography>
  );
};

export default IngredientsList;
