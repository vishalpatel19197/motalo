import { Stack } from "expo-router";

const RootLayout = () => {
  return <Stack 
    screenOptions={{
      headerShown: false,
      headerStyle:{
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  > 
    <Stack.Screen name="index" options={{ title: "Home" }}  />
  </Stack>;
}

export default RootLayout; 
