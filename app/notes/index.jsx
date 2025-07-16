import { useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const Notes = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: "First note" },
    { id: 2, content: "Second note" },
    { id: 3, content: "Third note" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.item}>{item.content}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No notes available</Text>}
      ></FlatList>
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide" 
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.noteInput}
            placeholder="Add a new note"
            value={newNote}
            onChangeText={setNewNote}
          />
          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "80%" }}>
          <TouchableOpacity
            style={styles.addModelButton}
            onPress={() => {
              setNotes([...notes, { id: notes.length + 1, content: newNote }]);
              setNewNote("");
              setModalVisible(false);
            }}
          >
            <Text style={styles.addModelButtonText}>Add Note</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeModelButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeModelButtonText}>Close</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  noteItem: {
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  item: {
    fontSize: 12,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    backgroundColor: "#f4511e",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  noteInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
  addModelButton: {
    backgroundColor: "#f4511e",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addModelButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  closeModelButton: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  closeModelButtonText: {
    color: "#000",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000aa",
  },
});

export default Notes;
