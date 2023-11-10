import {Container} from "./style";
import Header from "../../components/Header/Header";
import ListRepices from "../../components/ListRecipes/ListRepices";
import {motion} from "framer-motion"

const AllRecipesPage = () => {
  return (
    <Container>
      <Header />
      <ListRepices></ListRepices>
    </Container>
  );
};

export default AllRecipesPage;
