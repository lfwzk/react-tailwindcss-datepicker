import { dateAdd, endDayOfMonth, firstDayOfMonth, previousMonthBy } from "../libs/date";
import { ShortcutsItem } from "../types";

const CURRENT_DATE = new Date();

const DEFAULT_SHORTCUTS: {
    [key in string]: ShortcutsItem | ShortcutsItem[];
} = {
    today: {
        text: "Hoy",
        period: {
            start: CURRENT_DATE,
            end: CURRENT_DATE
        }
    },
    yesterday: {
        text: "Ayer",
        period: {
            start: dateAdd(CURRENT_DATE, -1, "day"),
            end: dateAdd(CURRENT_DATE, -1, "day")
        }
    },
    past: [
        {
            daysNumber: 7,
            text: "Ultimos 7 días",
            period: {
                start: dateAdd(CURRENT_DATE, -7, "day"),
                end: CURRENT_DATE
            }
        },
        {
            daysNumber: 30,
            text: "Ultimos 30 días",
            period: {
                start: dateAdd(CURRENT_DATE, -30, "day"),
                end: CURRENT_DATE
            }
        }
    ],
    currentMonth: {
        text: "Este mes",
        period: {
            start: firstDayOfMonth(CURRENT_DATE),
            end: endDayOfMonth(CURRENT_DATE)
        }
    },
    pastMonth: {
        text: "Mes pasado",
        period: {
            start: firstDayOfMonth(previousMonthBy(CURRENT_DATE)),
            end: endDayOfMonth(previousMonthBy(CURRENT_DATE))
        }
    }
};

export default DEFAULT_SHORTCUTS;
