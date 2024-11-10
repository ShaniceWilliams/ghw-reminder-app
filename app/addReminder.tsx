import { StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";

export default function AddReminders() {
  return (
    <View style={styles.container}>
      <Text>Add Reminders</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: "center"
  },
});