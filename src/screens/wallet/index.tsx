import {Container} from './styles'
import Typography from '../../components/typography';

const Wallet = () => {
  return (
    <Container>
      <Typography label='Minha carteira' fontColor='#01599a' />
    </Container>
  )
};

export default Wallet

/*
valor - receber o valor gasto na compra que quer registrar
descrição
moeda - droplist com os nomes das moedas retornadas pela api
metodo de pagamento - uma dropdown list com as opções: Dinheiro,
Cartão de crédito e Cartão de débito;

tag - O campo Tag deverá exibir uma dropdown list
com as opções: Alimentação, Lazer, Trabalho,
Transporte e Saúde;

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
