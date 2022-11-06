import {Button, Container, Form, FormBox, Input} from './styles'
import Typography from '../../components/typography';
import DropDownList from '../../components/dropDownList';

const Wallet = () => {
  return (
    <Container>
      <Typography label='Minha carteira' />
      <Form>
        <FormBox>
          <Typography label='Valor:' marginRight='12px'/>
          <Input />
        </FormBox>

        <FormBox>
          <Typography label='Moeda:' marginRight='12px'/>
          <DropDownList list={['ouro', 'dollar','real']} />
        </FormBox>

        <FormBox>
          <Typography label='Método de pagamento:' marginRight='12px'/>
          <DropDownList list={['Dinheiro', 'Cartão de crédito','Cartão de débito']} />
        </FormBox>

        <FormBox>
          <Typography label='Tag:' marginRight='12px'/>
          <DropDownList list={['Alimentação', 'Lazer','Trabalho', 'Transporte e Saúde']} />
        </FormBox>

        <Button>
          <Typography label='Adicionar despesa' fontColor='white' />
        </Button>
      </Form>
    </Container>
  )
};

export default Wallet

// adicionar opacoty na lista

/*
- um botão com o texto Adicionar despesa;

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
