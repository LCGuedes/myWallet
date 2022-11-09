import { Button, Container, Form, FormBox, Input } from "./styles";
import Typography from "../../components/typography";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import DropDownList from "../../components/dropDownList";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/reducers/defaultReducer";

import { RootStackScreenProps } from "../../types";

let currencyOptions: any = [];

const Wallet = ({ navigation }: RootStackScreenProps<"Wallet">) => {
  const [value, setValue] = useState("");
  const [currency, setCurrency] = useState("");
  const [paymentOptions, setPaymentOptions] = useState("");
  const [tag, setTag] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrencys = async () => {
      const addCurrencyName = (json: any) => {
        for (const key in json) {
          let name = json[key]["name"].split("/")[0];

          if (!currencyOptions.includes(name)) {
            currencyOptions.push(name);
          }
        }
      };

      const response = await fetch(
        "https://economia.awesomeapi.com.br/json/all"
      )
        .then((response) => response.json())
        .then((json) => addCurrencyName(json));
    };

    getCurrencys();
  }, []);

  const addExpenses = () => {
    const data = {
      value: value,
      currency: currency,
      paymentOptions: paymentOptions,
      tag: tag,
    };

    dispatch(addExpense(data));
  };

  function seeExpenses() {
    navigation.navigate("Expenses");
  }

  return (
    <>
      <Header label="Minha carteira" />
      <Container>
        <Typography label="Minha carteira" />
        <Form>
          <FormBox>
            <Input
              placeholder="Valor:"
              value={value}
              onChange={(e) => setValue(e.nativeEvent.text)}
            />
          </FormBox>

          <FormBox>
            <DropDownList
              placeholder="Moeda:"
              list={currencyOptions}
              value={currency}
              setValue={setCurrency}
            />
          </FormBox>

          <FormBox>
            <DropDownList
              placeholder="Método de pagamento"
              list={["Dinheiro", "Cartão de crédito", "Cartão de débito"]}
              value={paymentOptions}
              setValue={setPaymentOptions}
            />
          </FormBox>

          <FormBox>
            <DropDownList
              placeholder="Tag"
              list={["Alimentação", "Lazer", "Trabalho", "Transporte e Saúde"]}
              value={tag}
              setValue={setTag}
            />
          </FormBox>

          <Button onPress={addExpenses}>
            <Typography label="Adicionar despesa" fontColor="white" />
          </Button>
        </Form>
        <Button onPress={seeExpenses}>
          <Typography label="Ver despesas" fontColor="white" />
        </Button>
      </Container>
    </>
  );
};

export default Wallet;
