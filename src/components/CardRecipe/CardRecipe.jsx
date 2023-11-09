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

const CardRecipe = ({receita}) => {
  const {id, titulo, capa, tempo, rendimento, tipo, nivel} = receita;
  const [selected, setSelected] = useState();
  const navigate = useNavigate();

  var transition = {duration: 1};

  const sxBox = {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    fontSize: "14px",
    textTransform: "capitalize",
  };
  const handleGoToPage = (id) => {
    // setSelected(id);
    // navigate(`/receita/${id}`);
  };

  return (
    <Link to={`/receita/${id}`}>
      <Card
        //   onClick={(e) => {
        //     handleGoToPage(id);
        //   }}
        //   component="li"
        sx={{minWidth: 300, flexGrow: 1}}
        variant="solid"
        // whileHover={{scale: 1.5}}
        component={motion.li}
        // exit={{scale: 1.5}}
        // transition={transition}
      >
        <CardCover>
          <motion.img src={capa} loading="lazy" />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent>
          <Chip onClick={function () {}} variant="soft" color="primary">
            {nivel}
          </Chip>
          <Typography level="h2" textColor="#fff" mt={{xs: 4, sm: 18}}>
            {titulo}
          </Typography>
          <Typography level="p" textColor="#fff">
            <Stack direction="row" spacing={1}>
              <Box ariant="plain" sx={sxBox}>
                <LabelOutlinedIcon fontSize="12px" />
                {tipo}
              </Box>
              <Box variant="plain" sx={sxBox}>
                {" "}
                <AccessTimeRoundedIcon fontSize="12px" />
                {tempo}
              </Box>
              <Box ariant="plain" sx={sxBox}>
                <LocalDiningRoundedIcon fontSize="12px" />
                {rendimento}
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
