import {styled} from "styled-components";
import CardRecipe from "../CardRecipe/CardRecipe";
import {Box} from "@mui/joy";
import data from "../../api/receitas.json"


const ListRepices = () => {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flexWrap: "wrap",
        p: 2,
        m: 0,
      }}
    >
      {data.receitas.map((receita, i) => {
        return <CardRecipe key={i} receita={receita}  />;
      })}
    </Box>
  );
};

export default ListRepices;
