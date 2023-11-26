import { StatusBar, StyleSheet, Text, View, Image} from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const RelatrioDeComprasPedro = () => {
  return (
    <View style={styles.relatrioDeComprasPedro}>
      <StatusBar barStyle="default" />
      <Text style={styles.histricoDeCompras}>Histórico de compras</Text>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={[styles.statusDaCompra, styles.statusLayout]}>
          Status da compra : Pedido entregue
        </Text>
        <Text style={[styles.valorTotalDa, styles.valorLayout]}>
          Valor Total da compra: R$ 163,91
        </Text>
        <Text style={[styles.avInterlagos530, styles.drogariaTypo]}>
          Av. Interlagos, 530 - Vila romano
        </Text>
        <Text style={[styles.taxaDeEntrega, styles.taxaTypo]}>
          Taxa de entrega: R$ 5,00
        </Text>
        <Text style={[styles.drogaria, styles.drogariaLayout]}>Drogaria +</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.statusDaCompra1, styles.statusLayout]}>
          Status da compra : Pedido entregue
        </Text>
        <Text style={[styles.valorTotalDa1, styles.valorLayout]}>
          Valor Total da compra: R$ 38,69
        </Text>
        <Text style={[styles.ruaRomeiros96, styles.drogaria1Typo]}>
          Rua Romeiros, 96 - Panambianco
        </Text>
        <Text style={[styles.taxaDeEntrega1, styles.valorLayout]}>
          Taxa de entrega: R$ 8,00
        </Text>
        <Text style={[styles.drogaria1, styles.drogaria1Typo]}>Drogaria +</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={[styles.statusDaCompra2, styles.statusLayout]}>
          Status da compra : Pedido entregue
        </Text>
        <Text style={[styles.valorTotalDa2, styles.valorLayout]}>
          Valor Total da compra: R$ 83,23
        </Text>
        <Text style={[styles.av9De, styles.drogariaTypo]}>
          Av. 9 de julho 1923 - Vila clemente
        </Text>
        <Text style={[styles.taxaDeEntrega2, styles.taxaTypo]}>
          Taxa de entrega: R$ 3,00
        </Text>
        <Text style={[styles.drogaria2, styles.drogariaLayout]}>
          Drogaria +
        </Text>
        <Image
          style={[styles.image27Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-27@3x.png")}
        />
        <View
          style={[
            styles.healthiconsvespaMotorcycleO,
            styles.healthiconsvespaLayout,
          ]}
        >
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2@3x.png")}
          />
          <Image
            style={[styles.image28Icon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/image-28@3x.png")}
          />
        </View>
        <Image
          style={[
            styles.lucidebadgeDollarSignIcon,
            styles.lucidebadgeIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/lucidebadgedollarsign@3x.png")}
        />
        <Image
          style={[styles.ggsearchLoadingIcon, styles.ggsearchIconLayout]}
          contentFit="cover"
          source={require("../assets/ggsearchloading@3x.png")}
        />
        <Image
          style={[styles.mdistoreMarkerOutlineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mdistoremarkeroutline@3x.png")}
        />
        <Image
          style={[
            styles.healthiconsvespaMotorcycleO1,
            styles.lucidebadgeDollarSignIcon1Position,
          ]}
          contentFit="cover"
          source={require("../assets/healthiconsvespamotorcycleoutline@3x.png")}
        />
        <Image
          style={[
            styles.lucidebadgeDollarSignIcon1,
            styles.lucidebadgeDollarSignIcon1Position,
          ]}
          contentFit="cover"
          source={require("../assets/lucidebadgedollarsign1@3x.png")}
        />
        <Image
          style={[styles.ggsearchLoadingIcon1, styles.ggsearchIconLayout]}
          contentFit="cover"
          source={require("../assets/ggsearchloading1@3x.png")}
        />
        <Image
          style={[styles.mdistoreMarkerOutlineIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/mdistoremarkeroutline@3x.png")}
        />
        <Image
          style={[
            styles.healthiconsvespaMotorcycleO2,
            styles.healthiconsvespaLayout,
          ]}
          contentFit="cover"
          source={require("../assets/healthiconsvespamotorcycleoutline@3x.png")}
        />
        <Image
          style={[
            styles.lucidebadgeDollarSignIcon2,
            styles.lucidebadgeIconLayout,
          ]}
          contentFit="cover"
          source={require("../assets/lucidebadgedollarsign1@3x.png")}
        />
        <Image
          style={[styles.ggsearchLoadingIcon2, styles.ggsearchIconLayout]}
          contentFit="cover"
          source={require("../assets/ggsearchloading1@3x.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 170,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorTurquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.backgroundImput,
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  statusLayout: {
    height: 22,
    color: Color.colorDarkgray_200,
  },
  valorLayout: {
    width: 228,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  drogariaTypo: {
    left: 62,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  taxaTypo: {
    left: 55,
    width: 228,
    height: 22,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  drogariaLayout: {
    height: 20,
    width: 70,
    color: Color.colorBlack,
  },
  drogaria1Typo: {
    left: 61,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  iconLayout: {
    height: 49,
    width: 50,
    position: "absolute",
  },
  healthiconsvespaLayout: {
    height: 31,
    width: 37,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lucidebadgeIconLayout: {
    height: 30,
    width: 33,
  },
  ggsearchIconLayout: {
    height: 33,
    width: 33,
    position: "absolute",
    overflow: "hidden",
  },
  lucidebadgeDollarSignIcon1Position: {
    left: 15,
    position: "absolute",
    overflow: "hidden",
  }, 
  histricoDeCompras: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    color: Color.colorDarkorchid,
    width: 203,
    height: 36,
    marginTop: 24,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  groupChild: {
    left: 1,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorTurquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.backgroundImput,
    borderRadius: Border.br_7xs,
    top: 0,
  },
  statusDaCompra: {
    top: 129,
    width: 254,
    height: 22,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    left: 53,
  },
  valorTotalDa: {
    top: 94,
    left: 54,
    width: 228,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  avInterlagos530: {
    top: 28,
    width: 228,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  taxaDeEntrega: {
    top: 60,
  },
  drogaria: {
    top: 7,
    left: 62,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  groupItem: {
    top: 183,
    left: 0,
  },
  statusDaCompra1: {
    top: 312,
    left: 52,
    width: 254,
    height: 22,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  valorTotalDa1: {
    top: 277,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    width: 228,
    left: 53,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  ruaRomeiros96: {
    top: 211,
    width: 228,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  taxaDeEntrega1: {
    top: 243,
    left: 54,
    width: 228,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  drogaria1: {
    top: 190,
    height: 20,
    width: 70,
    color: Color.colorBlack,
  },
  groupInner: {
    top: 363,
    left: 1,
    width: 360,
    borderWidth: 1,
    borderColor: Color.colorTurquoise_100,
    borderStyle: "solid",
    backgroundColor: Color.backgroundImput,
    borderRadius: Border.br_7xs,
  },
  statusDaCompra2: {
    top: 492,
    width: 254,
    height: 22,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    left: 53,
  },
  valorTotalDa2: {
    top: 457,
    left: 54,
    width: 228,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  av9De: {
    top: 391,
    width: 238,
    height: 22,
    color: Color.colorDarkgray_200,
    left: 62,
  },
  taxaDeEntrega2: {
    top: 423,
  },
  drogaria2: {
    top: 370,
    left: 62,
    textAlign: "left",
    fontFamily: FontFamily.latoRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
    display: "flex",
    alignItems: "center",
  },
  image27Icon: {
    top: 6,
    left: 12,
    height: 49,
    width: 50,
  },
  vectorIcon: {
    height: "58.39%",
    width: "83.24%",
    top: "20.97%",
    right: "8.38%",
    bottom: "20.65%",
    left: "8.38%",
  },
  image28Icon: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  healthiconsvespaMotorcycleO: {
    top: 54,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  lucidebadgeDollarSignIcon: {
    top: 88,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  ggsearchLoadingIcon: {
    top: 125,
    left: 17,
    height: 33,
  },
  mdistoreMarkerOutlineIcon: {
    top: 189,
    left: 11,
    overflow: "hidden",
  },
  healthiconsvespaMotorcycleO1: {
    top: 237,
    height: 31,
    width: 37,
  },
  lucidebadgeDollarSignIcon1: {
    top: 271,
    height: 30,
    width: 33,
  },
  ggsearchLoadingIcon1: {
    top: 308,
    left: 16,
  },
  mdistoreMarkerOutlineIcon1: {
    top: 369,
    left: 12,
    height: 49,
    width: 50,
    overflow: "hidden",
  },
  healthiconsvespaMotorcycleO2: {
    top: 417,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  lucidebadgeDollarSignIcon2: {
    top: 451,
    left: 16,
    position: "absolute",
    overflow: "hidden",
  },
  ggsearchLoadingIcon2: {
    top: 488,
    left: 17,
    height: 33,
  },
  rectangleParent: {
    width: 361,
    height: 533,
    marginTop: 24,
  },
  relatrioDeComprasPedro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default RelatrioDeComprasPedro;
