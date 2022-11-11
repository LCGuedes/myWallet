import Header from "../../components/header";
import Card from "./components/card";
import { Container, Box } from "./styles";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { rootState } from "../../redux/store";

interface itemType {
  currency: string;
  description: string;
  paymentOptions: string;
  tag: string;
  value: string;
}

interface Item {
  item: itemType;
}

const Expenses = () => {
  const expenses = useSelector(
    (state: rootState) => state.defaultReducer.expenses
  );

  const renderCard = ({ item }: Item) => {
    return (
      <Box>
        <Card
          description={item.description}
          value={item.value}
          paymentOptions={item.paymentOptions}
          currency={item.currency}
          tag={item.tag}
        />
      </Box>
    );
  };

  return (
    <Container>
      <Header label="Histórico de despesa" />
      <FlatList
        data={expenses}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Expenses;
