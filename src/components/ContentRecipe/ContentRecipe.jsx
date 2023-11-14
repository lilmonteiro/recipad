import {Box, Typography} from "@mui/joy";
import {motion} from "framer-motion";
import {useEffect} from "react";
import IngredientsList from "../IngredientsList/IngredientsList";
import PrepareMode from "../PrepareMode/PrepareMode";

const ContentRecipe = ({step, content}) => {
  useEffect(() => {
    // console.log(content);
  }, [step]);

  useEffect(() => {
    // console.log("render");
  });

  return (
    <Box component={motion.div} p={0} m={0}>
      {content.titulo.toLowerCase() === "ingredientes" ? (
        content.conteudo.map((ingredients, i) => {
          return (
            <IngredientsList
              key={i}
              ingredients={ingredients}
            ></IngredientsList>
          );
        })
      ) : (
        <PrepareMode key={step} content={content} />
      )}
    </Box>
  );
};

export default ContentRecipe;
