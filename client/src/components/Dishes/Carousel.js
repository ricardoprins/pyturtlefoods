import React, { useState } from "react";

// Icons
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// Material UI
import {
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0);

  // const length = items.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(items) || items.length <= 0) {
    return null;
  }

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {/* --- Dishes List */}
          <Grid item xs={3}>
            <Item>
              <nav aria-label="secondary mailbox folders">
                <List>
                  {items.map((slide, index) => {
                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            setCurrent(index);
                          }}
                        >
                          <ListItemText primary={slide.title} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </nav>
            </Item>
          </Grid>
          {/* --- Carousel Content */}
          <Grid item xs={9}>
            <Item>
              {/* <FaArrowAltCircleLeft onClick={prevSlide} />
              <FaArrowAltCircleRight onClick={nextSlide} /> */}
              {items.map((slide, index) => {
                return (
                  <Box key={index}>
                    {index === current && (
                      <Typography>{slide.title}</Typography>
                    )}
                  </Box>
                );
              })}
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Carousel;
