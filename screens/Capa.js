import { StyleSheet, View, Image } from "react-native";
import { Color } from "../GlobalStyles";

const Capa = () => {
  return (
    <View style={styles.capa}>
      <Image
        style={styles.entregaDeliveryModernoVerme}
        contentFit="cover"
        source={require("../assets/entrega-delivery-moderno-vermelho-amarelo-instagram-story-3-1@3x.png")}
      />
      <View style={styles.entregaDeliveryModernoVerme1} />
    </View>
  );
};

const styles = StyleSheet.create({
  entregaDeliveryModernoVerme: {
    width: 381,
    zIndex: 0,
    height: 800,
  },
  entregaDeliveryModernoVerme1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 360,
    zIndex: 1,
    height: 800,
  },
  capa: {
    backgroundColor: Color.backgroundImput,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Capa;
