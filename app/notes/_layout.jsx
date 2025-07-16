import { Stack } from "expo-router";

const NoteLayout = () => {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  > 
    <Stack.Screen name="index" options={{ title: "Notes" }} />
  </Stack>;
};

export default NoteLayout;
