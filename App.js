const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import CarrinhoDeComprasLucas from "./screens/CarrinhoDeComprasLucas";
import Usurio from "./components/Usurio";
import StatusDoPedidoMurilo from "./screens/StatusDoPedidoMurilo";
import Pedido from "./components/Pedido";
import Oferta from "./components/Oferta";
import Inicio from "./components/Inicio";
import MenuAncora from "./screens/MenuAncora";
import Capa from "./screens/Capa";
import RelatrioDeComprasPedro from "./screens/RelatrioDeComprasPedro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Inicio />,
    <Oferta />,
    <Pedido />,
    <Usurio />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Inicio />,
    <Oferta />,
    <Pedido />,
    <Usurio />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              width: 381,
              height: 67,
              flexDirection: "row",
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="MenuAncora"
        component={MenuAncora}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="CarrinhoDeComprasLucas"
        component={CarrinhoDeComprasLucas}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="RelatrioDeComprasPedro"
        component={RelatrioDeComprasPedro}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="StatusDoPedidoMurilo"
        component={StatusDoPedidoMurilo}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "LeagueSpartan-SemiBold": require("./assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Capa"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
            <Stack.Screen
              name="Usurio"
              component={Usurio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pedido"
              component={Pedido}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Oferta"
              component={Oferta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Inicio"
              component={Inicio}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Capa"
              component={Capa}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
