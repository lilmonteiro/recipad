import {Typography} from "@mui/joy";
import {motion, animate} from "framer-motion";
import {useEffect} from "react";

const PrepareMode = ({content}) => {

//   useEffect(() => {
//     console.log(content);
//   });

  return (
    <Typography
      level={"body-md"}
      component={motion.div}
      style={{margin: 0}}
      pb={1}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      <Typography level={"body-md"} component={motion.h2}>
        {content.titulo}
      </Typography>

      <ol
        style={{margin: 0, paddingLeft: 20, boxSizing: "border-box"}}
      >
        {content.titulo ? <br /> : null}
        {content.conteudo.map((item, i) => {
          return (
            <li key={i} style={{marginBottom: 10}}>
              {item}
              <br />
            </li>
          );
        })}
      </ol>
    </Typography>
  );
};

export default PrepareMode;
