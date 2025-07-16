import ImageSource from "@/assets/images/post-it.png";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={ImageSource} style={styles.image} />
      <Text style={styles.title}>MOTALO</Text>
      <Text style={styles.subTitle}>Explore the app and enjoy your stay!</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/notes")}>
        <Text style={styles.buttonText}>
          Go to Details
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 15,
    color: "#666",
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: "#f4511e",
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
export default HomeScreen;
