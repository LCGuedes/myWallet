import { useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons';

interface dropDownTypes {
  list: Array<string>;
};

interface listTypes {
  list: Array<string>;
};

const DropDownList = ({list}: dropDownTypes) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <InputBox>
        <InputField />
        <Button onPress={() => setIsOpen(!isOpen)}>
          <Ionicons name="arrow-down" size={18} color="#01599a" />
        </Button>
      </InputBox>

        {isOpen ? (<List list={list} />): null}
    </Container>
  );
};

function List({list}: listTypes) {

  return (
      <ListBox>
          {list.map(item => (
              <ListItem key={item}>{item}</ListItem>
          ))}
      </ListBox>
  );
};


export const Container = styled.View``;

export const InputBox = styled.View`
  flex-direction: row;
`;

export const InputField = styled.TextInput`
  border: 1px solid #01599a;
  border-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 200px;
  height: 36px;
`;

export const Button = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border: 1px solid #01599a;
  border-radius: 12px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const ListBox = styled.View`
  width: 236px;
  border: 1px solid #01599a;
  border-radius: 12px;
  margin-top: 4px;
  padding: 12px;
`;

export const ListItem = styled.Text`
  color: #01599a;
  margin-bottom: 4px;
`


export default DropDownList;
