import styled from "styled-components";
import Input from "@mui/joy/Input";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import SelectComp from "../SelectComp/SelectComp";
import {useState} from "react";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: start;

  * {
    transition: all 0.5s ease;
  }
`;

const Filters = () => {
  const [inputSize, setInputSize] = useState(5);
  const [selectSize, setSelectSize] = useState(1);

  const expandInput = (set) => {
    set(5);
  };

  const contractInput = (set) => {
    set(1);
  };

  return (
    <Container>
      <SelectComp
        sx={{flex: selectSize}}
        onFocus={(e) => {
          expandInput(setSelectSize);
          contractInput(setInputSize);
        }}
      />{" "}
      <Input
        startDecorator={
          <SearchRoundedIcon
            onClick={(e) => {
              expandInput(setInputSize);
            }}
            sx={{color: "#fff"}}
          />
        }
        color="neutral"
        size="md"
        variant="solid"
        onFocus={(e) => {
          expandInput(setInputSize);
          contractInput(setSelectSize);
        }}
        sx={{flex: inputSize}}
        onBlur={(e) => {}}
      />{" "}
    </Container>
  );
};

export default Filters;
