import { StyleSheet, View, Text, ScrollView, Image} from "react-native";
import FormContainer1 from "../components/FormContainer1";
import FilteredCardForm from "../components/FilteredCardForm";
import FormContainer from "../components/FormContainer";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";


const CarrinhoDeComprasLucas = () => {
  return (
    <View style={styles.carrinhoDeComprasLucas}>
      <FormContainer1 />
      <View style={styles.navegao}>
        <View style={[styles.maisVendidos, styles.maisVendidosPosition]}>
          <View style={[styles.mais5, styles.desqLayout]}>
            <View style={[styles.desq1, styles.desqLayout]}>
              <View style={styles.moldura} />
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
              <Text style={[styles.listerineCoolMint, styles.listerineTypo]}>
                Listerine Cool Mint
              </Text>
              <View style={[styles.retImgParent, styles.retLayout1]}>
                <View style={[styles.retImg, styles.retPosition]} />
                <Image
                  style={styles.listerineIcon}
                  resizeMode="cover"
                  source={require("../assets/listerine@3x.png")}
                />
              </View>
              <View style={styles.retDesconto} />
              <Text style={[styles.text, styles.ml5Typo]}>-15%</Text>
              <View style={[styles.comprar, styles.comprarLayout]}>
                <View style={[styles.botaoComprar, styles.comprarLayout]} />
                <Text style={[styles.comprar1, styles.comprar1Position]}>
                  COMPRAR
                </Text>
              </View>
            </View>
            <Image
              style={[styles.favoritarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/favoritar1@3x.png")}
            />
          </View>
          <View style={[styles.mais4, styles.maisPosition]}>
            <View style={[styles.desq1, styles.desqLayout]}>
              <View style={styles.moldura} />
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
              <Text style={[styles.listerineCoolMint, styles.listerineTypo]}>
                Listerine Cool Mint
              </Text>
              <View style={[styles.retImgParent, styles.retLayout1]}>
                <View style={[styles.retImg, styles.retPosition]} />
                <Image
                  style={styles.listerineIcon}
                  resizeMode="cover"
                  source={require("../assets/listerine@3x.png")}
                />
              </View>
              <View style={styles.retDesconto} />
              <Text style={[styles.text, styles.ml5Typo]}>-15%</Text>
              <View style={[styles.comprar, styles.comprarLayout]}>
                <View style={[styles.botaoComprar, styles.comprarLayout]} />
                <Text style={[styles.comprar1, styles.comprar1Position]}>
                  COMPRAR
                </Text>
              </View>
            </View>
            <Image
              style={[styles.favoritarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/favoritar1@3x.png")}
            />
          </View>
          <View style={[styles.mais3, styles.maisPosition]}>
            <View style={[styles.desq1, styles.desqLayout]}>
              <View style={styles.moldura} />
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
              <Text style={[styles.listerineCoolMint, styles.listerineTypo]}>
                Listerine Cool Mint
              </Text>
              <View style={[styles.retImgParent, styles.retLayout1]}>
                <View style={[styles.retImg, styles.retPosition]} />
                <Image
                  style={styles.listerineIcon}
                  resizeMode="cover"
                  source={require("../assets/listerine@3x.png")}
                />
              </View>
              <View style={styles.retDesconto} />
              <Text style={[styles.text, styles.ml5Typo]}>-15%</Text>
              <View style={[styles.comprar, styles.comprarLayout]}>
                <View style={[styles.botaoComprar, styles.comprarLayout]} />
                <Text style={[styles.comprar1, styles.comprar1Position]}>
                  COMPRAR
                </Text>
              </View>
            </View>
            <Image
              style={[styles.favoritarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/favoritar1@3x.png")}
            />
          </View>
          <View style={[styles.mais2, styles.maisPosition]}>
            <View style={[styles.desq1, styles.desqLayout]}>
              <View style={styles.moldura} />
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
              <Text style={[styles.listerineCoolMint, styles.listerineTypo]}>
                Listerine Cool Mint
              </Text>
              <View style={[styles.retImgParent, styles.retLayout1]}>
                <View style={[styles.retImg, styles.retPosition]} />
                <Image
                  style={styles.listerineIcon}
                  resizeMode="cover"
                  source={require("../assets/listerine1@3x.png")}
                />
              </View>
              <View style={styles.retDesconto} />
              <Text style={[styles.text, styles.ml5Typo]}>-15%</Text>
              <View style={[styles.comprar, styles.comprarLayout]}>
                <View style={[styles.botaoComprar, styles.comprarLayout]} />
                <Text style={[styles.comprar1, styles.comprar1Position]}>
                  COMPRAR
                </Text>
              </View>
            </View>
            <Image
              style={[styles.favoritarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/favoritar1@3x.png")}
            />
          </View>
          <View style={[styles.mais1, styles.maisPosition]}>
            <View style={[styles.desq1, styles.desqLayout]}>
              <View style={styles.moldura} />
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
              <Text style={[styles.listerineCoolMint, styles.listerineTypo]}>
                Listerine Cool Mint
              </Text>
              <View style={[styles.retImgParent, styles.retLayout1]}>
                <View style={[styles.retImg, styles.retPosition]} />
                <Image
                  style={styles.listerineIcon}
                  resizeMode="cover"
                  source={require("../assets/listerine1@3x.png")}
                />
              </View>
              <View style={styles.retDesconto} />
              <Text style={[styles.text, styles.ml5Typo]}>-15%</Text>
              <View style={[styles.comprar, styles.comprarLayout]}>
                <View style={[styles.botaoComprar, styles.comprarLayout]} />
                <Text style={[styles.comprar1, styles.comprar1Position]}>
                  COMPRAR
                </Text>
              </View>
            </View>
            <Image
              style={[styles.favoritarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/favoritar1@3x.png")}
            />
          </View>
        </View>
        <ScrollView
          style={styles.destaquesDaSemana}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.destaquesDaSemanaContent}
        >
          <View style={[styles.desq15, styles.desqLayout]}>
            <View style={[styles.desq1, styles.desqLayout]}>
              <View style={styles.moldura} />
              <Text style={[styles.porR1869, styles.deR2199Layout]}>
                <Text style={styles.porR1869TxtContainer}>
                  <Text style={styles.por}>{`Por:
`}</Text>
                  <Text style={styles.r1869}>R$18,69</Text>
                </Text>
              </Text>
              <Text style={[styles.deR2199, styles.mlTypo]}>{`De:
R$21,99`}</Text>
              <Text style={[styles.ml, styles.mlTypo]}>Oral B</Text>
              <Text style={[styles.listerineCoolMint, styles.listerineTypo]}>
                Escova Eletrica
              </Text>
              <View style={styles.retDesconto} />
              <Text style={[styles.text, styles.ml5Typo]}>-15%</Text>
              <View style={[styles.comprar, styles.comprarLayout]}>
                <View style={[styles.botaoComprar, styles.comprarLayout]} />
                <Text style={[styles.comprar1, styles.comprar1Position]}>
                  COMPRAR
                </Text>
              </View>
            </View>
            <Image
              style={[styles.favoritarIcon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/favoritar1@3x.png")}
            />
          </View>
          <FilteredCardForm />
          <FilteredCardForm propZIndex={2} />
          <FilteredCardForm propZIndex={3} />
          <FilteredCardForm propZIndex={4} />
          <FilteredCardForm propZIndex={5} />
          <FilteredCardForm propZIndex={6} />
          <FilteredCardForm propZIndex={7} />
          <FilteredCardForm propZIndex={8} />
          <FilteredCardForm propZIndex={9} />
          <Image
            style={[styles.escovaEletrica1, styles.maisVendidosPosition]}
            resizeMode="cover"
            source={require("../assets/escova-eletrica-1@3x.png")}
          />
        </ScrollView>
        <FormContainer />
        <Text style={styles.meuCarrinho}>Meu carrinho</Text>
        <Text style={[styles.maisVendidos1, styles.maisVendidos1Typo]}>
          Mais Vendidos
        </Text>
        <View style={styles.navegaoChild} />
        <View style={[styles.retImgParent2, styles.retLayout]}>
          <View style={[styles.retImg5, styles.retLayout]} />
          <Image
            style={styles.listerineIcon5}
            resizeMode="cover"
            source={require("../assets/listerine2@3x.png")}
          />
        </View>
        <View style={[styles.navegaoItem, styles.navegaoLayout]} />
        <Text style={[styles.listerineCoolMint5, styles.listerineTypo]}>
          Listerine Cool Mint
        </Text>
        <Text style={[styles.r2499, styles.r2499Typo]}>R$ 24,99</Text>
        <Text style={[styles.ml5, styles.mLayout]}>500 ml</Text>
        <Image
          style={styles.menosIcon}
          resizeMode="cover"
          source={require("../assets/menos@3x.png")}
        />
        <Image
          style={styles.maisIcon}
          resizeMode="cover"
          source={require("../assets/mais@3x.png")}
        />
        <View style={styles.navegaoInner} />
        <Text style={styles.text6}>01</Text>
        <View style={[styles.retImgWrapper, styles.retLayout]}>
          <View style={[styles.retImg5, styles.retLayout]} />
        </View>
        <View style={[styles.rectangleView, styles.navegaoChildBorder]} />
        <Text style={[styles.cremeDentalSorriso, styles.pasta1IconPosition]}>
          Creme Dental Sorriso
        </Text>
        <Text style={[styles.r1399, styles.r799Layout]}>R$ 13,99</Text>
        <Text style={[styles.g, styles.gTypo]}>70g</Text>
        <Image
          style={[styles.menosIcon1, styles.menosIconPosition]}
          resizeMode="cover"
          source={require("../assets/menos@3x.png")}
        />
        <Image
          style={[styles.maisIcon1, styles.maisIconPosition]}
          resizeMode="cover"
          source={require("../assets/mais@3x.png")}
        />
        <View style={[styles.navegaoChild1, styles.navegaoChildLayout1]} />
        <Text style={[styles.text7, styles.textTypo]}>03</Text>
        <View style={[styles.navegaoChild2, styles.navegaoChild2Position]} />
        <Text style={[styles.escovaDeDente, styles.listerineTypo]}>
          Escova de Dente
        </Text>
        <Text style={[styles.r1149, styles.r1149Typo]}>R$ 11,49</Text>
        <Text style={[styles.colgate, styles.incioLayout]}>Colgate</Text>
        <Image
          style={[styles.menosIcon2, styles.menosIconPosition]}
          resizeMode="cover"
          source={require("../assets/menos@3x.png")}
        />
        <Image
          style={[styles.maisIcon2, styles.text8Position]}
          resizeMode="cover"
          source={require("../assets/mais@3x.png")}
        />
        <View style={[styles.navegaoChild3, styles.navegaoChildLayout1]} />
        <Text style={[styles.text8, styles.text8Position]}>01</Text>
        <View style={[styles.retImgFrame, styles.retLayout]}>
          <View style={[styles.retImg5, styles.retLayout]} />
        </View>
        <View style={[styles.navegaoChild4, styles.navegaoChildBorder]} />
        <View style={[styles.navegaoChild5, styles.navegaoChildLayout]} />
        <View style={[styles.navegaoChild6, styles.navegaoChildLayout]} />
        <Text style={[styles.total, styles.totalTypo]}>Total:</Text>
        <Text style={[styles.r9443, styles.totalTypo]}>R$ 94,43</Text>
        <Text style={[styles.fioDental, styles.r2499Typo]}>Fio Dental</Text>
        <Text style={[styles.finalizarCarrinho, styles.totalTypo]}>
          Finalizar Carrinho
        </Text>
        <Text style={[styles.r799, styles.mTypo]}>R$ 7,99</Text>
        <Text style={[styles.m, styles.mTypo]}>100 m</Text>
        <Image
          style={[styles.menosIcon3, styles.menosIconPosition]}
          resizeMode="cover"
          source={require("../assets/menos@3x.png")}
        />
        <Image
          style={[styles.maisIcon3, styles.text9Position]}
          resizeMode="cover"
          source={require("../assets/mais@3x.png")}
        />
        <View style={[styles.navegaoChild7, styles.navegaoChildLayout1]} />
        <Text style={[styles.text9, styles.text9Position]}>02</Text>
        <Image
          style={[styles.pasta1Icon, styles.pasta1IconPosition]}
          resizeMode="cover"
          source={require("../assets/pasta-1@3x.png")}
        />
        <Image
          style={[styles.escovaDeDente1, styles.navegaoChild2Position]}
          resizeMode="cover"
          source={require("../assets/escova-de-dente-1@3x.png")}
        />
        <Image
          style={[styles.fio1Icon, styles.comprar1Position]}
          resizeMode="cover"
          source={require("../assets/fio-1@3x.png")}
        />
        <Text style={[styles.itensQuePossam, styles.maisVendidos1Typo]}>
          Itens que possam te interessar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  destaquesDaSemanaContent: {
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  maisVendidosPosition: {
    left: 21,
    position: "absolute",
  },
  desqLayout: {
    height: 320,
    width: 124,
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
  listerineTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  retLayout1: {
    height: 94,
    width: 111,
    position: "absolute",
  },
  retPosition: {
    backgroundColor: Color.backgroundImput,
    left: 0,
    top: 0,
  },
  ml5Typo: {
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  comprarLayout: {
    height: 23,
    width: 112,
    position: "absolute",
  },
  comprar1Position: {
    left: 29,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  maisPosition: {
    top: 10,
    height: 320,
    width: 124,
    position: "absolute",
  },
  maisVendidos1Typo: {
    height: 31,
    fontSize: FontSize.size_mid,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorDarkorchid,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  retLayout: {
    height: 57,
    width: 68,
    position: "absolute",
  },
  navegaoLayout: {
    height: 60,
    position: "absolute",
  },
  r2499Typo: {
    width: 70,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  mLayout: {
    width: 48,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  navegaoChildBorder: {
    left: 83,
    width: 277,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    borderWidth: 1,
    borderStyle: "solid",
  },
  pasta1IconPosition: {
    top: 121,
    position: "absolute",
  },
  r799Layout: {
    left: 163,
    width: 70,
    height: 20,
    color: Color.colorBlack,
  },
  gTypo: {
    top: 146,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  menosIconPosition: {
    left: 250,
    height: 6,
    width: 20,
    position: "absolute",
  },
  maisIconPosition: {
    left: 333,
    width: 20,
  },
  navegaoChildLayout1: {
    left: 288,
    height: 30,
    width: 30,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    left: 294,
    width: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  navegaoChild2Position: {
    top: 181,
    height: 60,
    position: "absolute",
  },
  r1149Typo: {
    top: 211,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  incioLayout: {
    width: 53,
    position: "absolute",
  },
  text8Position: {
    top: 201,
    height: 20,
    position: "absolute",
  },
  navegaoChildLayout: {
    width: 170,
    top: 331,
    height: 30,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  totalTypo: {
    top: 336,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  mTypo: {
    top: 276,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text9Position: {
    top: 266,
    height: 20,
    position: "absolute",
  },
     moldura: {
    backgroundColor: Color.colorGray_100,
    borderColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_11xs,
    left: 0,
    top: 0,
    height: 320,
    width: 124,
    position: "absolute",
  },
  por: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.latoBold,
    fontWeight: "600",
  },
  r1869: {
    fontWeight: "800",
    fontFamily: FontFamily.latoBlack,
    fontSize: FontSize.size_base,
  },
  porR1869TxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  porR1869: {
    top: 238,
    width: 78,
    position: "absolute",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
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
    width: 71,
    height: 16,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.latoRegular,
  },
  listerineCoolMint: {
    top: 140,
    width: 103,
    height: 35,
    left: 10,
    position: "absolute",
  },
  retImg: {
    height: 94,
    width: 111,
    position: "absolute",
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
    left: 0,
    top: 0,
    width: 124,
    position: "absolute",
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
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.interSemiBold,
    color: Color.backgroundImput,
    width: 58,
    height: 13,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  comprar: {
    top: 293,
    left: 6,
  },
  desq1: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  favoritarIcon: {
    top: 26,
    left: 93,
    width: 22,
    height: 22,
  },
  mais5: {
    top: 11,
    left: 558,
    position: "absolute",
  },
  mais4: {
    left: 419,
  },
  mais3: {
    left: 280,
  },
  mais2: {
    left: 141,
  },
  mais1: {
    left: 2,
  },
  maisVendidos: {
    top: 1183,
    width: 344,
    height: 342,
  },
  desq15: {
    zIndex: 0,
  },
  escovaEletrica1: {
    width: 98,
    height: 76,
    zIndex: 10,
    top: 52,
  },
  destaquesDaSemana: {
    top: 427,
    height: 756,
    flexWrap: "wrap",
    maxHeight: 756,
    left: 17,
    position: "absolute",
    width: "100%",
  },
  meuCarrinho: {
    width: 110,
    height: 26,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorDarkorchid,
    fontFamily: FontFamily.leagueSpartanSemiBold,
    top: 10,
    fontSize: FontSize.size_base,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    left: 0,
    position: "absolute",
  },
  maisVendidos1: {
    top: 1144,
    left: -8,
    width: 162,
  },
  navegaoChild: {
    top: 44,
    width: 360,
    height: 324,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    left: 6,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  retImg5: {
    backgroundColor: Color.backgroundImput,
    left: 0,
    top: 0,
  },
  listerineIcon5: {
    top: 4,
    left: 7,
    width: 45,
    height: 51,
    position: "absolute",
  },
  retImgParent2: {
    left: 14,
    top: 52,
  },
  navegaoItem: {
    top: 51,
    left: 84,
    width: 277,
    height: 60,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    borderWidth: 1,
    borderStyle: "solid",
  },
  listerineCoolMint5: {
    top: 56,
    width: 127,
    left: 92,
    height: 20,
    position: "absolute",
  },
  r2499: {
    left: 164,
    top: 81,
  },
  ml5: {
    top: 81,
    left: 92,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
    fontFamily: FontFamily.latoRegular,
  },
  menosIcon: {
    top: 78,
    left: 251,
    height: 6,
    width: 20,
    position: "absolute",
  },
  maisIcon: {
    left: 334,
    top: 71,
    width: 20,
    height: 20,
    position: "absolute",
  },
  navegaoInner: {
    top: 66,
    left: 289,
    height: 30,
    width: 30,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  text6: {
    left: 295,
    width: 19,
    top: 71,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  retImgWrapper: {
    top: 117,
    left: 13,
  },
  rectangleView: {
    top: 116,
    height: 60,
    position: "absolute",
  },
  cremeDentalSorriso: {
    width: 142,
    left: 92,
    height: 20,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  r1399: {
    top: 146,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  g: {
    width: 28,
    left: 92,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  menosIcon1: {
    top: 143,
  },
  maisIcon1: {
    top: 136,
    height: 20,
    position: "absolute",
  },
  navegaoChild1: {
    top: 131,
  },
  text7: {
    top: 136,
    height: 20,
    position: "absolute",
  },
  navegaoChild2: {
    left: 83,
    width: 277,
    borderColor: Color.colorTurquoise_100,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.backgroundImput,
    borderWidth: 1,
    borderStyle: "solid",
  },
  escovaDeDente: {
    top: 186,
    width: 114,
    left: 92,
    height: 20,
    position: "absolute",
  },
  r1149: {
    left: 163,
    width: 70,
    height: 20,
    color: Color.colorBlack,
    position: "absolute",
  },
  colgate: {
    top: 211,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    left: 92,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  menosIcon2: {
    top: 208,
  },
  maisIcon2: {
    left: 333,
    width: 20,
  },
  navegaoChild3: {
    top: 196,
  },
  text8: {
    left: 294,
    width: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  retImgFrame: {
    top: 247,
    left: 13,
  },
  navegaoChild4: {
    top: 246,
    height: 60,
    position: "absolute",
  },
  navegaoChild5: {
    left: 190,
    borderColor: "#46fd06",
  },
  navegaoChild6: {
    borderColor: Color.colorTurquoise_100,
    left: 13,
  },
  total: {
    left: 23,
    width: 38,
  },
  r9443: {
    left: 114,
    width: 62,
  },
  fioDental: {
    top: 251,
    left: 98,
  },
  finalizarCarrinho: {
    left: 221,
    width: 119,
  },
  r799: {
    left: 163,
    width: 70,
    height: 20,
    color: Color.colorBlack,
  },
  m: {
    left: 98,
    width: 48,
    height: 22,
    color: Color.colorDarkgray_200,
  },
  menosIcon3: {
    top: 273,
  },
  maisIcon3: {
    left: 333,
    width: 20,
  },
  navegaoChild7: {
    top: 261,
  },
  text9: {
    left: 294,
    width: 19,
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.latoRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
  },
  pasta1Icon: {
    left: 12,
    width: 69,
    height: 50,
  },
  escovaDeDente1: {
    width: 60,
    left: 17,
  },
  fio1Icon: {
    top: 256,
    width: 34,
    height: 40,
  },
  itensQuePossam: {
    top: 382,
    width: 222,
    left: 6,
  },
  navegao: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 615,
    width: 381,
  },
  carrinhoDeComprasLucas: {
    flex: 1,
    width: "100%",
    backgroundColor: Color.colorWhitesmoke_200,
  },
});

export default CarrinhoDeComprasLucas;