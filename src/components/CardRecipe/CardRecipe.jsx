import {
  Card,
  Chip,
  CardCover,
  CardContent,
  Typography,
  Stack,
  Box,
} from "@mui/joy";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LocalDiningRoundedIcon from "@mui/icons-material/LocalDiningRounded";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import {useNavigate} from "react-router-dom";
import {animate, motion} from "framer-motion";
import {useState} from "react";
import {Link} from "react-router-dom";

const CardRecipe = ({
  titleSize,
  recipepage = false,
  delay,
  rounded = true,
  receita,
}) => {
  const {id, titulo, capa, tempo, rendimento, tipo, nivel} = receita;
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  var transition = {duration: 0.25, ease: [0.55, 0.83, 0.65, 0.45]};

  const sxBox = {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    fontSize: "14px",
    textTransform: "capitalize",
  };
  const handleItemClick = (id) => {
    setSelected(id);
  };

  return (
    <Link to={`/receita/${id}`} style={{textDecoration: "none"}}>
      <Card
        onClick={(e) => {
          handleItemClick(id);
        }}
        sx={{minWidth: 300, flexGrow: 1, borderRadius: !rounded && 0}}
        variant="solid"
        component={motion.li}
        exit={
          id === selected
            ? {scale: 1, opacity: 1, y: 100 * id * -1 + "%"}
            : {
                scale: 1,
                opacity: 0,
                transitionEnd: {
                  display: "none",
                },
              }
        }
        transition={transition}
      >
        <CardCover>
          <motion.img transition={transition} src={capa} loading="lazy" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent>
          <Chip onClick={function () {}} variant="soft" color="primary">
            {nivel}
          </Chip>
          <motion.h1
            style={{
              fontSize: "1.8em",
              paddingTop: 35,
              margin: 0,
              color: "#fff",
            }}
            animate={{paddingTop: recipepage ? 100 : 35}}
            transition={{delay: delay ? 0.1 : 0}}
          >
            {titulo}
          </motion.h1>
          <Typography level="p" textColor="#fff">
            <Stack direction="row" spacing={1}>
              <Box ariant="plain" sx={sxBox}>
                <LabelOutlinedIcon fontSize="12px" />
                <Typography>{tipo}</Typography>
              </Box>
              <Box variant="plain" sx={sxBox}>
                {" "}
                <AccessTimeRoundedIcon fontSize="12px" />
                <Typography>{tempo}</Typography>
              </Box>
              <Box ariant="plain" sx={sxBox}>
                <LocalDiningRoundedIcon fontSize="12px" />
                <Typography>{rendimento}</Typography>
              </Box>
            </Stack>
          </Typography>
          <Typography level="p" textColor="#fff"></Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardRecipe;
