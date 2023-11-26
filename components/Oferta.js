import {StyleSheet, Text, View, Image} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Oferta = ({ style }) => {
  return (
    <View style={[styles.oferta, style]}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1@3x.png")}
      />
      <Text style={styles.carrinho}>Carrinho</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    height: "57.5%",
    width: "55.38%",
    top: "0%",
    right: "26.15%",
    bottom: "42.5%",
    left: "18.46%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  carrinho: {
    top: 29,
    left: 0,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.laoMuangDon,
    color: Color.colorDimgray_200,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 11,
    position: "absolute",
    width: 65,
  },
  oferta: {
    height: 40,
    width: 65,
  },
});

export default Oferta;
