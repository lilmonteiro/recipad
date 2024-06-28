import {ButtonGroup, Button} from "@mui/joy";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import {motion} from "framer-motion";
import {green} from "@mui/material/colors";
import {styled} from "@mui/material/styles";

const StepsRecipe = ({step, setStep, items}) => {
  const handleSelectStep = (e) => {
    setStep(e.target.id);
  };

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.8}}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginTop: "auto",
      }}
    >
      <ButtonGroup
        sx={{flexWrap: "wrap"}}
        spacing="0.5rem"
        aria-label="spacing button group"
      >
        {items &&
          items.map((passo, i) => {
            return (
              <Button
                variant="solid"
                color="warning"
                key={i}
                sx={{flexGrow: 1}}
                id={i}
                onClick={handleSelectStep}
              >
                {passo.titulo}
              </Button>
            );
          })}
      </ButtonGroup>
      <Button
        fullWidth
        endDecorator={<ShareRoundedIcon />}
        size="lg"
        variant="plain"
        color="warning"
      >
        Compartilhar
      </Button>
    </motion.div>
  );
};

export default StepsRecipe;
