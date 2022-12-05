

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth:220, }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{fontWeight:'bolder',fontSize:"10px !important"}}>{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
        //   label="Age"
        defaultValue="Static Elastic Modulus"
          onChange={handleChange}
          sx={{background:'#E4E6E9',color:'black',fontSize:'12px !important',height:'40px' }}
        >
          <MenuItem value={10} sx={{fontSize:"12px !important"}}>{props.item1}</MenuItem>
          <MenuItem value={20} sx={{fontSize:"12px !important"}}>{props.item2}</MenuItem>
          <MenuItem value={30} sx={{fontSize:"12px !important"}}>{props.item3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
