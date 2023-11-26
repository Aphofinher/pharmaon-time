import {StyleSheet, Text, View, Image} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Pedido = ({ style }) => {
  return (
    <View style={[styles.pedido, style]}>
      <Image
        style={styles.sacolaIcone}
        contentFit="cover"
        source={require("../assets/sacola-icone@3x.png")}
      />
      <Text style={styles.pedidos}>Pedidos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sacolaIcone: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    width: 78,
  },
  pedidos: {
    top: 40,
    left: 13,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.laoMuangDon,
    color: Color.colorDimgray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 53,
    height: 11,
    position: "absolute",
  },
  pedido: {
    height: 51,
    width: 78,
  },
});

export default Pedido;
