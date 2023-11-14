import {ButtonGroup, Button} from "@mui/joy";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import {motion} from "framer-motion";

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
        endDecorator={<PlayCircleOutlineRoundedIcon />}
        size="lg"
        variant="solid"
        color="warning"
      >
        COMEÇAR
      </Button>
    </motion.div>
  );
};

export default StepsRecipe;
