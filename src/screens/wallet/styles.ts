import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  width: 100%;
`;

export const FormBox = styled.View`
  width: 100%;
  justify-content: center;
  margin-bottom: 12px;
  align-items: center;
`;
export const Input = styled.TextInput`
  width: 60%;
  height: 36px;
  border-radius: 12px;
  border: 1px solid #01599a;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.main};
  width: 240px;
  height: 48px;
  border-radius: 20px;
  margin: 0 auto;
`;
