import Header from "../../components/header";
import Card from "./components/card";
import { Container, Box } from "./styles";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

const Expenses = () => {
  const data = useSelector((state) => state.default.expenses);

  const renderCard = ({ item }: any) => {
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
        data={data}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Expenses;
