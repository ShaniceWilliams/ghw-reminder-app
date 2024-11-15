import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { theme } from "../theme";

export type ReminderCardProps = {
  id: string;
  cardTitle: string;
  icon: React.ComponentProps<typeof Feather>["name"];
  iconBackgroundColor: string;
  numberOfReminders: number;
  onPress?: () => void;
};

const ReminderCard: FC<ReminderCardProps> = ({
  id,
  cardTitle,
  icon,
  iconBackgroundColor,
  numberOfReminders,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer} key={id}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <Feather name={icon} size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.number}>{numberOfReminders}</Text>
        <Text style={styles.title}>{cardTitle}</Text>
      </View>
    </TouchableOpacity>
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
    paddingRight: 10,
  },
  iconContainer: {
    alignItems: "center",
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    marginRight: 5,
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
