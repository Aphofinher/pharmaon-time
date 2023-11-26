import {StyleSheet, Text, View, Image} from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Inicio = ({ style }) => {
  return (
    <View style={[styles.inicio, style]}>
      <Image
        style={styles.casaIcone}
        contentFit="cover"
        source={require("../assets/casa-icone@3x.png")}
      />
      <Text style={styles.incio}>Início</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  casaIcone: {
    top: 0,
    left: 0,
    height: 40,
    position: "absolute",
    width: 77,
  },
  incio: {
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
  inicio: {
    height: 50,
    width: 77,
  },
});

export default Inicio;
