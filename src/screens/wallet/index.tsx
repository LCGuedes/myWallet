import {Button, Container, Form, FormBox, Input} from './styles'
import Typography from '../../components/typography';
import { useEffect, useState, useRef } from 'react';
import DropDownList from '../../components/dropDownList';
import {useDispatch} from 'react-redux';
import {addExpense} from '../../redux/reducers/defaultReducer';

let currencyOptions:any = []

const Wallet = () => {

  const [value, setValue] = useState('');
  const [currency, setCurrency] = useState('');
  const [paymentOptions, setPaymentOptions] = useState('');
  const [tag, setTag] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrencys = async () => {
      const addCurrencyName = (json: any) => {
        for(const key in json) {
          let name = json[key]['name'].split('/')[0]

          if(!currencyOptions.includes(name)) {
            currencyOptions.push(name)
          }
        }
      }

      const response = await fetch('https://economia.awesomeapi.com.br/json/all')
        .then(response => response.json())
        .then(json => addCurrencyName(json))
    }

    getCurrencys()
  }, [])



  const addExpense = () => {
    const data = {
      value: value,
      currency: currency,
      paymentOptions: paymentOptions,
      tag: tag
    }

    //dispatch(addExpense(data))
    console.log(data)
  }

  return (
    <Container>
      <Typography label='Minha carteira' />
      <Form>
        <FormBox>
          <Input placeholder='Valor:' value={value} onChange={e => setValue(e.nativeEvent.text)} />
        </FormBox>

        <FormBox>
          <DropDownList
            placeholder='Moeda:'
            list={currencyOptions}
            value={currency}
            setValue={setCurrency}
          />
        </FormBox>

        <FormBox>
          <DropDownList
            placeholder='Método de pagamento'
            list={['Dinheiro', 'Cartão de crédito','Cartão de débito']}
            value={paymentOptions}
            setValue={setPaymentOptions}
          />
        </FormBox>

        <FormBox>
          <DropDownList
            placeholder='Tag'
            list={['Alimentação', 'Lazer','Trabalho', 'Transporte e Saúde']}
            value={tag}
            setValue={setTag}
          />
        </FormBox>

        <Button onPress={addExpense}>
          <Typography label='Adicionar despesa' fontColor='white' />
        </Button>
      </Form>
    </Container>
  )
};

export default Wallet

/*

- Ao adicionar a despesa, ela deverá aparecer em
uma tabela logo abaixo do formulário contendo
todas as informações inseridas;
●
- Ao final da tabela, deverá ser exibido, em Reais
(BRL), o montante total das despesas registradas;/

●
https://docs.awesomeapi.com.br/api-de-moedas
https://economia.awesomeapi.com.br/json/all

*/
