import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { BasketProvider } from "./store/BasketContext";

// GET /foods
// Headers: { UserID: "aidai"  }

// GET /basket
// Headers: { UserID: "aidai"  }
// POST /foods/:foodId/addToBasket

// BODY: { amount: number }
// Headers: { UserID: "aidai"  }

// DELETE /basketItem/:id/delete
// Headers: { UserID: "aidai"  }
// PUT /basketItem/:id/update

// BODY: { amount: number }
// Headers: { UserID: "aidai"  }

function App() {
  const [isBasketVisible, setBasketVisible] = useState(false);

  const showBasketHandler = () => {
    setBasketVisible((prevState) => !prevState);
  };

  return (
    <BasketProvider>
      <div className="App">
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          {isBasketVisible && <Basket onClose={showBasketHandler} />}
        </Content>
      </div>
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
