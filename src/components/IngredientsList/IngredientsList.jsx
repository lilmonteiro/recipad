import {Typography} from "@mui/joy";
import {motion} from "framer-motion";
import {useEffect} from "react";
import Checkbox from "@mui/joy/Checkbox";

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

      <div>
        {ingredients.conteudo.map((item, i) => {
          return (
            <Typography
              key={i}
              level={"body-md"}
              display={"block"}
              style={{listStyleType: "none", margin: "10px 0"}}
            >
              <Checkbox size="md" key={i} label={item} />
            </Typography>
          );
        })}
      </div>
    </Typography>
  );
};

export default IngredientsList;
