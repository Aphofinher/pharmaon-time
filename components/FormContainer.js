import { StyleSheet, View, Text, Image } from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const FormContainer = () => {
  return (
    <View style={[styles.propaganda1, styles.propagandaLayout]}>
      <View style={[styles.propaganda11, styles.propaganda11Position]} />
      <View style={[styles.botaoEntrarcadastrarParent, styles.botaoLayout]}>
        <Image
          style={[styles.botaoEntrarcadastrarIcon, styles.botaoLayout]}
          contentFit="cover"
          source={require("../assets/botao-entrarcadastrar@3x.png")}
        />
        <Text
          style={[styles.entrarOuCadastrar, styles.suasComprasValemFlexBox]}
        >
          ENTRAR OU CADASTRAR!
        </Text>
      </View>
      <View style={styles.suasComprasValemPontosPharParent}>
        <Text
          style={[styles.suasComprasValem, styles.suasComprasValemFlexBox]}
        >{`SUAS COMPRAS VALEM PONTOS
PHARMAON!`}</Text>
        <Text
          style={[styles.cadastreSeEJunte, styles.suasComprasValemFlexBox]}
        >{`Cadastre-se e junte pontos

Use para pagar compras!

Troque por produtos do catálogo`}</Text>
        <Image
          style={[styles.postDoInstagramFrauda91, styles.postPosition]}
          contentFit="cover"
          source={require("../assets/post-do-instagram-frauda-9-1@3x.png")}
        />
        <Image
          style={[styles.postDoInstagramFrauda81, styles.postPosition]}
          contentFit="cover"
          source={require("../assets/post-do-instagram-frauda-8-1@3x.png")}
        />
        <Image
          style={styles.postDoInstagramFrauda10}
          contentFit="cover"
          source={require("../assets/post-do-instagram-frauda-10-1@3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  propagandaLayout: {
    height: 278,
    width: 336,
    position: "absolute",
  },
  propaganda11Position: {
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
  },
  botaoLayout: {
    height: 40,
    width: 299,
    position: "absolute",
  },
  suasComprasValemFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  postPosition: {
    height: 49,
    left: 0,
    position: "absolute",
  },
  propaganda11: {
    backgroundColor: Color.backgroundImput,
    height: 278,
    width: 336,
    position: "absolute",
  },
  botaoEntrarcadastrarIcon: {
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
  },
  entrarOuCadastrar: {
    top: 10,
    left: 62,
    color: Color.backgroundImput,
    width: 199,
    height: 20,
    fontFamily: FontFamily.latoBlack,
    fontWeight: "800",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  botaoEntrarcadastrarParent: {
    top: 220,
    left: 16,
  },
  suasComprasValem: {
    left: 7,
    color: Color.colorTurquoise_100,
    width: 310,
    height: 41,
    fontFamily: FontFamily.latoBlack,
    fontWeight: "800",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_mini,
    top: 0,
  },
  cadastreSeEJunte: {
    top: 57,
    left: 42,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    color: Color.colorDarkslategray,
    width: 275,
    height: 118,
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.size_mini,
  },
  postDoInstagramFrauda91: {
    top: 55,
    width: 42,
  },
  postDoInstagramFrauda81: {
    top: 92,
    width: 44,
  },
  postDoInstagramFrauda10: {
    top: 127,
    left: 1,
    height: 51,
    width: 42,
    position: "absolute",
  },
  suasComprasValemPontosPharParent: {
    top: 17,
    left: 11,
    width: 317,
    height: 178,
    position: "absolute",
  },
  propaganda1: {
    top: 1549,
    left: 25,
  },
});

export default FormContainer;
