import { Typography, Paper, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { getBooksByCategory } from "../api";
import BookYellow from "../assets/images/Bookyellow.png";

import { useNavigate } from "react-router-dom";
export default function Section() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("Combined Print and E-Book Fiction");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  useEffect(async () => {
    setLoading(true);
    setError(false);

    const obj = await getBooksByCategory(category);
    if (obj.success) setData(obj.data.results);
    else setError(true);

    setLoading(false);
  }, [category]);

  const navigate = useNavigate();

  console.log(data);
  return (
    <div className="container" sx={{ textAlign: "center" }}>
      <Typography
        component="h1"
        variant="h3"
        sx={{
          textAlign: "center",
          fontFamily: "Rozha One, sans-serif",
          paddingY: "110px",
        }}
      >
        Categories
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((item, index) => {
            return (
              <Grid
                key={index}
                item
                xs={6}
                sm={4}
                md={3}
                sx={{ height: "auto", marginBottom: "30px" }}
                onClick={() => navigate("/BookPage")}
              >
                <Item
                  sx={{
                    cursor: "pointer",
                    boxShadow: 1,
                    padding: "20px",
                    minHeight: "150px",
                    background: "white",
                    borderRadius: "5px",
                    height: "100%",
                  }}
                >
                  <img src={BookYellow} />
                  <Typography
                    sx={{
                      fontSize: { xs: "20px", sm: "20px" },
                      marginTop: "30px",
                      fontFamily: "Rozha One, sans-serif",
                    }}
                  >
                    {item.display_name}
                  </Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
