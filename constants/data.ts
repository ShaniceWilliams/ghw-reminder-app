import { theme } from "../theme";

export const REMINDER_CARD_DATA = [
    {
        cardTitle: "Today",
        icon: "calendar" as "calendar",
        iconBackgroundColor: theme.colors.blue100,
        numberOfReminders: 2
    },
    {
        cardTitle: "Low Priority",
        icon: "alert-circle" as "alert-circle",
        iconBackgroundColor: theme.colors.green100,
        numberOfReminders: 3
    },
    {
        cardTitle: "Medium Priority",
        icon: "alert-triangle" as "alert-triangle",
        iconBackgroundColor: theme.colors.yellow100,
        numberOfReminders: 0
    },
    {
        cardTitle: "High Priority",
        icon: "alert-octagon" as "alert-octagon",
        iconBackgroundColor: theme.colors.red100,
        numberOfReminders: 1
    },
]