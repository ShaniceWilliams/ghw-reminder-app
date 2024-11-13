// app/_layout.tsx

import { Stack, router, useRouter } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import { StyleSheet } from "react-native";
import { theme } from "../theme";


export default function RootLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerShadowVisible: true,
        }}
      />
      <Stack.Screen
        name="addReminder"
        options={{
          title: "Add New Reminder",
          presentation: "modal",
          headerLeft: () => (
          <Feather name="chevron-left" size={24} color="black" style={styles.back} onPress={() => router.back()}/>
          )
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
    back: {
        marginRight: 10
    }
})