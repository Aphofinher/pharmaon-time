import {StyleSheet, Text, View, Image} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Usurio = ({ style }) => {
  return (
    <View style={[styles.usurio, style]}>
      <Image
        style={styles.usuarioIcon}
        contentFit="cover"
        source={require("../assets/usuario@3x.png")}
      />
      <Text style={styles.usurio1}>Status Pedido</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  usuarioIcon: {
    top: 0,
    left: 6,
    width: 77,
    height: 40,
    position: "absolute",
  },
  usurio1: {
    top: 40,
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
    width: 90,
  },
  usurio: {
    height: 51,
    width: 90,
  },
});

export default Usurio;
