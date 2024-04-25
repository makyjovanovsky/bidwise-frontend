import React, { useState } from 'react';
import { Container, Box, Slider, Select, MenuItem, FormControl, InputLabel, Divider, Button, Grid } from '@mui/material';

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 100]); // Initial price range
  const [category, setCategory] = React.useState('');

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    // You can add logic here to handle filtering based on the new price range
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const clearFilters = () => {
    setPriceRange([0, 100]);
    setCategory('');
    // You can add additional logic here if needed
  };

  return (
    <Container sx={{ bgcolor: '#214434', height: '100vh', borderRadius: '7px', padding: '20px', marginLeft: '10px', color: 'white' }}>
      <Box mb={2}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: 'white !important' }}>Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Select Category"
            onChange={handleCategoryChange}
            sx={{
              '& .MuiSelect-select.MuiSelect-select': {
                '&:focus': {
                  borderColor: 'white',
                },
                '&:hover': {
                  borderColor: 'white',
                },
              },
              '& .MuiSelect-icon': {
                color: 'white',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white !important',
              },
              '& .MuiInputLabel-root': {
                color: 'white !important',
              },
              color: 'white',
            }}
          >
            <MenuItem value={10}>Category 1</MenuItem>
            <MenuItem value={20}>Category 2</MenuItem>
            <MenuItem value={30}>Category 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Divider sx={{ backgroundColor: 'white', my: 4 }} />
      <Box mt={2}>
        <InputLabel sx={{ marginBottom: '10px', color: 'white' }}>Price Filter</InputLabel>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={0}
          max={100}
          sx={{ color: '#4caf50' }}
        />
      </Box>
      <Divider sx={{ backgroundColor: 'white', my: 4 }} />
      <Grid container justifyContent="center" sx={{ mt: 2 }}>
        <Button variant="contained" onClick={clearFilters} sx={{ bgcolor: '#4caf50', color: 'white' }}>Clear Filters</Button>
      </Grid>
    </Container>
  );
};

export default ProductFilters;
