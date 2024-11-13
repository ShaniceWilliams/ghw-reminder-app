import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import { useRouter } from "expo-router";
import { useState } from "react";

export type Priority = "low" | "medium" | "high";

export default function AddReminder() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [priority, setPriority] = useState<Priority>("low");

  const handleSave = () => {
    if (!title) {
      console.error("Please add reminder title!");
    } else {
      console.log({ title, priority });
      router.back();
    }
  };
  const handleClose = () => {
    console.log("Closed.");
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>New Reminder</Text>
      <TextInput
        placeholder="Add your reminder here"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.radioGroup}>
        <Text style={styles.radioLabel}>Priority</Text>
        {["low", "medium", "high"].map((level) => (
          <TouchableOpacity
            key={level}
            style={[
              styles.radioOption,
              level === "low"
                ? styles.buttonGreen
                : level === "medium"
                  ? styles.buttonYellow
                  : styles.buttonRed,
              priority === level && styles.buttonSelectedPriority,
            ]}
            onPress={() => setPriority(level as Priority)}
          >
            <Text style={styles.radioText}>{level.charAt(0).toUpperCase() + level.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Text style={styles.buttonText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  buttonGreen: { backgroundColor: theme.colors.green100 },
  buttonRed: { backgroundColor: theme.colors.yellow100 },
  buttonYellow: { backgroundColor: theme.colors.red100 },
  buttonSelectedPriority: { borderColor: theme.colors.black90, borderWidth: 2 },
  buttonText: {
    color: theme.colors.white,
    textTransform: "uppercase",
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: theme.colors.red100,
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textTransform: "uppercase",
    width: "50%",
  },
  radioGroup: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    width: "100%",
  },
  radioLabel: {
    color: theme.colors.black90,
    fontSize: 16,
    marginRight: 10,
  },
  radioOption: {
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  radioText: {
    color: theme.colors.white,
    fontSize: 16,
  },
  saveButton: {
    alignItems: "center",
    backgroundColor: theme.colors.green100,
    borderRadius: 20,
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textTransform: "uppercase",
    width: "50%",
  },
  titleInput: {
    backgroundColor: theme.colors.white90,
    borderColor: theme.colors.black90,
    borderWidth: 1,
    borderRadius: 20,
    marginVertical: 10,
    padding: 20,
    width: "100%",
  },
});
