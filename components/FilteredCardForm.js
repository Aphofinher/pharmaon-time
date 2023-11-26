import { StyleSheet, View, Text, Image} from "react-native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FilteredCardForm = ({ propZIndex }) => {
  const desq2Style = useMemo(() => {
    return {
      ...getStyleValue("zIndex", propZIndex),
    };
  }, [propZIndex]);

  return (
    <View style={[styles.desq2, styles.desqLayout, desq2Style]}>
      <View style={[styles.desq1, styles.retPosition]}>
        <View style={[styles.moldura, styles.molduraPosition]} />
        <Text style={[styles.porR1869, styles.deR2199Layout]}>
          <Text style={styles.porR1869TxtContainer}>
            <Text style={styles.por}>{`Por:
`}</Text>
            <Text style={styles.r1869}>R$18,69</Text>
          </Text>
        </Text>
        <Text style={[styles.deR2199, styles.mlTypo]}>{`De:
R$21,99`}</Text>
        <Text style={[styles.ml, styles.mlTypo]}>500ml</Text>
        <Text style={[styles.listerineCoolMint, styles.textTypo]}>
          Listerine Cool Mint
        </Text>
        <View style={[styles.retImgParent, styles.retLayout]}>
          <View style={[styles.retImg, styles.retLayout]} />
          <Image
            style={styles.listerineIcon}
            contentFit="cover"
            source={require("../assets/listerine1@3x.png")}
          />
        </View>
        <View style={[styles.retDesconto, styles.retPosition]} />
        <Text style={[styles.text, styles.textTypo]}>-15%</Text>
        <View style={[styles.comprar, styles.comprarLayout]}>
          <View style={[styles.botaoComprar, styles.comprarLayout]} />
          <Text style={[styles.comprar1, styles.porR1869FlexBox]}>COMPRAR</Text>
        </View>
      </View>
      <Image
        style={styles.favoritarIcon}
        contentFit="cover"
        source={require("../assets/favoritar1@3x.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  desqLayout: {
    height: 320,
    width: 124,
  },
  retPosition: {
    left: 0,
    top: 0,
  },
  molduraPosition: {
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
  },
  deR2199Layout: {
    height: 36,
    left: 13,
  },
  mlTypo: {
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  retLayout: {
    height: 94,
    width: 111,
    position: "absolute",
  },
  comprarLayout: {
    height: 23,
    width: 112,
    position: "absolute",
  },
  porR1869FlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  moldura: {
    backgroundColor: Color.colorGray_100,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    position: "absolute",
    height: 320,
    width: 124,
  },
  por: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  r1869: {
    fontSize: FontSize.size_base,
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
  },
  porR1869TxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  porR1869: {
    top: 238,
    width: 78,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
    color: Color.colorTurquoise_100,
  },
  deR2199: {
    top: 210,
    color: Color.colorDarkgray_100,
    width: 55,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
    height: 36,
    left: 13,
  },
  ml: {
    top: 178,
    left: 11,
    color: Color.colorDarkgray_200,
    width: 71,
    height: 16,
    fontFamily: FontFamily.latoRegular,
  },
  listerineCoolMint: {
    top: 140,
    left: 10,
    color: Color.colorBlack,
    width: 103,
    height: 35,
    fontFamily: FontFamily.latoRegular,
  },
  retImg: {
    backgroundColor: Color.backgroundImput,
    left: 0,
    top: 0,
  },
  listerineIcon: {
    top: 6,
    left: 19,
    width: 73,
    height: 84,
    position: "absolute",
  },
  retImgParent: {
    top: 42,
    left: 6,
  },
  retDesconto: {
    backgroundColor: Color.colorWhitesmoke_300,
    height: 20,
    position: "absolute",
    width: 124,
    left: 0,
    top: 0,
  },
  text: {
    top: 1,
    left: 43,
    fontWeight: "700",
    width: 44,
    height: 17,
    fontFamily: FontFamily.latoBold,
    color: Color.colorTurquoise_100,
  },
  botaoComprar: {
    backgroundColor: Color.colorTurquoise_100,
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
  },
  comprar1: {
    top: 5,
    left: 29,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundImput,
    width: 58,
    height: 13,
    fontWeight: "600",
  },
  comprar: {
    top: 293,
    left: 6,
  },
  desq1: {
    position: "absolute",
    height: 320,
    width: 124,
  },
  favoritarIcon: {
    top: 26,
    left: 93,
    width: 22,
    height: 22,
    overflow: "hidden",
    position: "absolute",
  },
  desq2: {
    zIndex: 1,
    marginLeft: 15,
  },
});

export default FilteredCardForm;
