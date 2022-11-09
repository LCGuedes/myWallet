import styled from "styled-components/native";

const Card = ({ value, paymentOptions, currency, tag }: any) => {
  return (
    <CardBox>
      <CardHeader>
        <Description>Almoço de quinta</Description>
      </CardHeader>

      <CardBody>
        <CardRow>
          <P>Valor</P>
          <P>{value}</P>
        </CardRow>

        <CardRow>
          <P>Método de pagamento</P>
          <P>{paymentOptions}</P>
        </CardRow>

        <CardRow>
          <P>Moeda</P>
          <P>{currency}</P>
        </CardRow>

        <CardRow>
          <P>Tag</P>
          <P>{tag}</P>
        </CardRow>
      </CardBody>
    </CardBox>
  );
};

const CardBox = styled.View`
  width: 100%;
  height: auto;
  background-color: #fff;
  elevation: 4;
`;
const CardHeader = styled.View`
  elevation: 1;
  background-color: ${({ theme }) => theme.main};
  height: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const P = styled.Text`
  color: ${({ theme }) => theme.main};
`;

export const Description = styled.Text`
  color: white;
`;

const CardBody = styled.View`
  padding: 12px;
`;

const CardRow = styled.View`
  border-bottom: 1px solid black;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
  width: 100%;
`;

export default Card;
