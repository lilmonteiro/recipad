import {Home} from "@mui/icons-material";
import {AnimatePresence} from "framer-motion";
import {Route, Routes, useLocation} from "react-router-dom";
import RecipePage from "./pages/RecipePage/RecipePage";
import AllRecipesPage from "./pages/AllRecipesPage/AllRecipesPage";

function App() {
  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/receita/:id" element={<RecipePage />} />
          <Route path="/receitas" element={<AllRecipesPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
