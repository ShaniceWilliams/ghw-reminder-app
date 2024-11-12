import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../theme";

export type ReminderCardProps = {
  cardTitle: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  iconBackgroundColor: string;
  numberOfReminders: number;
};

const ReminderCard: FC<ReminderCardProps> = ({
  cardTitle,
  icon,
  iconBackgroundColor,
  numberOfReminders,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <Feather name={icon} size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.number}>{numberOfReminders}</Text>
        <Text style={styles.title}>{cardTitle}</Text>
      </View>
    </View>
  );
};

export default ReminderCard;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    backgroundColor: theme.colors.white90,
    borderRadius: 10,
    flexDirection: "row",
    margin: 5,
    padding: 10,
    width: "47%"
  },
  textContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    marginRight: 10,
    width: 40,
  },
  number: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    color: theme.colors.black90,
    fontSize: 14,

  },
});