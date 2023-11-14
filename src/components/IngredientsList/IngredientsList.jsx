import {Typography} from "@mui/joy";
import {motion} from "framer-motion";


const IngredientsList = ({ingredients}) => {
  return (
    <Typography
      level={"body-sm"}
      component={motion.li}
      style={{margin: 0}}
      pb={1}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
      transition={{duration: .5}}
    >
      <Typography level={"body-md"} component={motion.h2}>
        {ingredients.titulo !== "" && ingredients.titulo}
      </Typography>
      {ingredients.titulo ? <br /> : null}
      {ingredients.conteudo.map((item, i) => {
        return (
          <Typography key={i}>
            {item}
            <br />
          </Typography>
        );
      })}
    </Typography>
  );
};

export default IngredientsList;
