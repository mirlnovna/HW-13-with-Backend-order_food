import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { fetchAPI } from "../../lib/fetchApi";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getMeals = async () => {
    try {
      setIsLoading(true);
      const response = await fetchAPI("foods");

      setMeals(response.data);

      setIsLoading(false);
    } catch (error) {
      setError("Не удалось загрузить блюда");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>Loading</p>}
      <StyledUl>
        {meals.map((item) => (
          <MealItem key={item._id} item={item} />
        ))}
      </StyledUl>
    </Card>
  );
};

export default Meals;

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  width: 64.9375rem;
  margin: 160px auto;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 20px 40px;
`;
