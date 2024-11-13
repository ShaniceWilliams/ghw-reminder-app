import { Link, Tabs, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../../theme";
import { Pressable, StyleSheet } from "react-native";
import React from "react";

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
            <Link href="/addReminder" asChild>
              <Pressable hitSlop={20}>
                <Feather
                  name="plus-circle"
                  size={24}
                  color={theme.colors.green100}
                  style={style.addReminders}
                />
              </Pressable>
            </Link>
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
