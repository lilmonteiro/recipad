import {Typography} from "@mui/joy";
import {motion, animate} from "framer-motion";
import { useEffect } from "react";

const PrepareMode = ({content}) => {

    useEffect(()=>{
        console.log(content)
    })

  return (
    <Typography
      level={"body-sm"}
      component={motion.li}
      style={{margin: 0}}
      pb={1}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity:0}}
      transition={{duration: .5}}
    >
      <Typography level={"body-md"} component={motion.h2}>
        {content.titulo}
      </Typography>
      {content.titulo ? <br /> : null}
      {content.conteudo.map((item, i) => {
        return (
          <Typography key={i}>
            {item}
            <br />
          </Typography>
        );
      })}
    </Typography>
  );
};

export default PrepareMode;
