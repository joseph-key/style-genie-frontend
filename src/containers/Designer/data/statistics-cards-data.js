import {
  BanknotesIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: BanknotesIcon,
    title: "Today's Money",
    value: "₹10,000",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: UserIcon,
    title: "Today's Users",
    value: "20",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Sales",
    value: "₹30,000",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;