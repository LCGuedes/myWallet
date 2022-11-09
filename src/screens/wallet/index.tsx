import { useRef } from "react";
import Header from "../../components/header";
import { Button, SheetButton, P } from "./styles";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import Dot from "../../../assets/icons/three-dots.svg";
import { RootStackScreenProps } from "../../types";

const Wallet = ({ navigation }: RootStackScreenProps<"Wallet">) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const openModal = () => {
    bottomSheetRef.current?.expand();
  };

  return (
    <>
      <Header label="Minha Carteira" />
      <Button onPress={openModal}>
        <Dot width={24} height={24} fill={"white"} />
      </Button>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={[1, "40%"]}
        enablePanDownToClose={true}
      >
        <BottomSheetView style={{ padding: 12 }}>
          <SheetButton onPress={() => navigation.navigate("addExpenses")}>
            <P>Adicionar despesa</P>
          </SheetButton>

          <SheetButton onPress={() => navigation.navigate("Expenses")}>
            <P>histórico de despesas</P>
          </SheetButton>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Wallet);
