import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../theme";
import { REMINDER_CARD_DATA } from "../../constants/data";
import ReminderCard from "../../components/reminderCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headlineText}>Reminder App</Text>
      <View style={styles.cardContainer}>
        {REMINDER_CARD_DATA.map((cardData) => (
          <ReminderCard key={cardData.cardTitle} {...cardData} />
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.white95,
    flex: 1,
    justifyContent: "center",
  },
  headlineText: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10
  }
});

