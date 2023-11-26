import { StyleSheet, View, Text, Image} from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

const FormContainer1 = () => {
  return (
    <View style={styles.menuSuperior}>
      <View style={styles.menuSuperiorChild} />
      <Image
        style={styles.logoIcon}
        contentFit="cover"
        source={require("../assets/logo@3x.png")}
      />
      <Image
        style={[styles.lupaIcon, styles.oQueVocPosition]}
        contentFit="cover"
        source={require("../assets/lupa@3x.png")}
      />
      <Text style={[styles.oQueVoc, styles.oQueVocPosition]}>
        O que você está buscando?
      </Text>
      <View style={styles.shoppingcart}>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector@3x.png")}
        />
      </View>
      <Image
        style={styles.favoritarIcon}
        contentFit="cover"
        source={require("../assets/favoritar@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  oQueVocPosition: {
    top: 73,
    position: "absolute",
  },
  menuSuperiorChild: {
    marginTop: 6.5,
    marginLeft: -174.5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorGray_200,
    borderStyle: "solid",
    borderColor: Color.colorTurquoise_200,
    borderWidth: 1,
    width: 348,
    height: 36,
    position: "absolute",
  },
  logoIcon: {
    top: 15,
    left: 17,
    width: 182,
    height: 50,
    position: "absolute",
  },
  lupaIcon: {
    left: 338,
    width: 17,
    height: 21,
  },
  oQueVoc: {
    left: 10,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.laoMuangDon,
    color: Color.colorLightgray_100,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 193,
    height: 20,
  },
  vectorIcon: {
    width: 30,
    height: 28,
  },
  shoppingcart: {
    top: 21,
    left: 325,
    width: 50,
    height: 43,
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    position: "absolute",
    overflow: "hidden",
  },
  favoritarIcon: {
    top: 24,
    left: 280,
    width: 32,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  menuSuperior: {
    borderRadius: Border.br_11xs,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 379,
    height: 117,
    overflow: "hidden",
  },
});

export default FormContainer1;
