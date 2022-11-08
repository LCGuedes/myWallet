import styled from 'styled-components/native';
import Typography from '../../../components/typography';

const Card = () => {
  return (
      <CardBox>
        <CardHeader>
          <Description>Almoço de quinta</Description>
        </CardHeader>

        <CardBody>
          <CardRow>
            <Description>Valor</Description>
            <Description>5.000</Description>
          </CardRow>

          <CardRow>
            <Description>Método de pagamento</Description>
            <Description>Cartão de crédito</Description>
          </CardRow>

          <CardRow>
            <Description>Moeda</Description>
            <Description>Real</Description>
          </CardRow>

          <CardRow>
            <Description>Tag</Description>
            <Description>Lazer</Description>
          </CardRow>
        </CardBody>
      </CardBox>
  )
};

const CardBox = styled.View`
  width: 100%;
  elevation: 4 !important;
  background-color: whitesmoke;
`
const CardHeader = styled.View`
  elevation: 4;
  background-color: #01599a;
  height: 36px;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export const Description = styled.Text`

`

const CardBody = styled.View`
  padding: 12px;
`;

const CardRow = styled.View`
  border-bottom: 1px solid black;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
`

export default Card;
