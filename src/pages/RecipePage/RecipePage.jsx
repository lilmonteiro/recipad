import CardRecipe from "../../components/CardRecipe/CardRecipe";
import {Box} from "@mui/joy";
import data from "../../api/receitas.json";
import Header from "../../components/Header/Header";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

const RecipePage = () => {
  const {id} = useParams();
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    setReceita(data.receitas.find((i) => i.id == id));
  }, []);

  return (
    <div>
      <Header />
      <Box
        component="ul"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          flexWrap: "wrap",
          p: 0,
          m: 0,
        }}
      >
        {receita && (
          <CardRecipe
            rounded={false}
            delay={true}
            recipepage={true}
            receita={receita}
          />
        )}
      </Box>
      <Box sx={{p: 2, m: 0}}>
        {receita && (
          <motion.p
            style={{margin: 0}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.5}}
          >
            {receita.descricao}
          </motion.p>
        )}
      </Box>
    </div>
  );
};

export default RecipePage;
