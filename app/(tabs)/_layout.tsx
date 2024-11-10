import { Tabs, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../theme";
import { StyleSheet } from "react-native";

export default function TabsLayout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.blue100,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Reminders",
          tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} />,
          headerRight: () => (
            <Feather
              name="plus-circle"
              size={24}
              color={theme.colors.green100}
              style={style.addReminders}
              onPress={() => router.push("addReminder")}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="completed"
        options={{
          title: "Completed Reminders",
          tabBarIcon: ({ color }) => <Feather name="check-circle" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}

const style = StyleSheet.create({
  addReminders: {
    marginRight: 20,
  },
});
