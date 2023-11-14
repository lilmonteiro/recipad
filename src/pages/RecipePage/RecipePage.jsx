import CardRecipe from "../../components/CardRecipe/CardRecipe";
import {Box, Typography, Button, ButtonGroup} from "@mui/joy";
import data from "../../api/receitas.json";
import Header from "../../components/Header/Header";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import StepsRecipe from "../../components/StepsRecipe/StepsRecipe";
import ContentRecipe from "../../components/ContentRecipe/ContentRecipe";

const RecipePage = () => {
  const {id} = useParams();
  const [receita, setReceita] = useState(null);
  const [step, setStep] = useState(0);

  useEffect(()=>{
    // console.log("step:" + step)
  }, [step])

  useEffect(() => {
    setReceita(data.receitas.find((i) => i.id == id));
  }, []);

  return (
    <div
      style={{
        height: window.innerHeight + "px",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
      <Box
        sx={{
          display: "flex",
          gap: 2,
          flexDirection: "column",
          p: 2,
          m: 0,
          flex: 1,
        }}
      >
        {receita && <ContentRecipe step={step} content={receita.passos[step]} />}
        {receita && <StepsRecipe step={step} setStep={setStep} items={receita.passos} />}
      </Box>
    </div>
  );
};

export default RecipePage;
