import * as React from "react";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import {Box, Chip} from "@mui/joy";
import {useState} from "react";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import {useEffect} from "react";

const SelectComp = ({...props}) => {
  const [selectList, setSelectList] = useState([]);

  return (
    <>
      <Select
        {...props}
        variant="solid"
        multiple
        startDecorator={<FilterListRoundedIcon sx={{color: "white"}} />}
        defaultValue={selectList}
        renderValue={(selected) => (
          <Box sx={{display: "flex", gap: "0.25rem"}}>
            {selected.map((selectedOption, i) => (
              <Chip key={i} variant="soft" color="primary">
                {selectedOption.label}
              </Chip>
            ))}
          </Box>
        )}
        slotProps={{
          listbox: {
            sx: {
              width: "100%",
              minWidth: "10em",
            },
          },
        }}
      >
        <Option value="salgado">salgado</Option>
        <Option value="doce">doce</Option>
        <Option value="almoço">almoço</Option>
        <Option value="sobremesa">sobremesa</Option>
      </Select>
      {selectList.map((selectedOption, i) => (
        <div key={i} variant="soft" color="primary">
          {selectedOption.label}
        </div>
      ))}
    </>
  );
};

export default SelectComp;
