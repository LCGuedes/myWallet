import Typography from "../../components/typography";
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
      <Header label="Histórico de gastos" />
      <FlatList
        data={data}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Expenses;
