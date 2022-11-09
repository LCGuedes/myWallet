import { Container, Form, FormBox, Input } from "./styles";
import Header from "../../components/header";
import Button from "../../components/button";
import { useEffect, useState } from "react";
import DropDownList from "../../components/dropDownList";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/reducers/defaultReducer";

let currencyOptions: any = [];

const AddExpenses = () => {
  const [inputDescription, setInputDescription] = useState("");
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
      description: inputDescription,
      value: value,
      currency: currency,
      paymentOptions: paymentOptions,
      tag: tag,
    };

    dispatch(addExpense(data));
  };

  return (
    <>
      <Header label="Adicionar despesa" />
      <Container>
        <Form>
          <FormBox>
            <Input
              placeholder="Descrição:"
              value={inputDescription}
              onChange={(e) => setInputDescription(e.nativeEvent.text)}
            />
          </FormBox>

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

          <Button onPress={addExpenses} description="Adicionar despesa" />
        </Form>
      </Container>
    </>
  );
};

export default AddExpenses;
