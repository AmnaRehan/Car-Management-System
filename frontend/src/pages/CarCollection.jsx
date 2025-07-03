import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Text, Spinner } from "@chakra-ui/react";

const CarCollection = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/cars")
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} p={4}>
      {cars.map((car) => (
        <Box key={car.id} p={4} border="1px solid #ccc" borderRadius="lg">
          <Text fontWeight="bold">{car.name}</Text>
          <Text>{car.model}</Text>
          <Text>{car.price}</Text>
        </Box>
      ))}
    </Grid>
  );
};

export default CarCollection;
