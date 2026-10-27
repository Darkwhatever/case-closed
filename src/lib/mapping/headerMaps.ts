import type { NavigationLabelsProps } from "@/src/interfaces/mappingInterfaces";

export const navigationLabels = ({
  setSelectedTap,
  router,
  username,
}: NavigationLabelsProps) => [
  {
    id: "discover",
    label: "Discover",
    route: "/homepage",
    action: () => setSelectedTap("discover"),
  },
  {
    id: "cases",
    label: "Cases",
    route: "/cases",
    action: () => setSelectedTap("cases"),
  },
  {
    id: "myCases",
    label: "My Cases",
    route: `/caselist/${username}`,
    action: () => setSelectedTap("myCases"),
  },
  {
    id: "studio",
    label: "Studio",
    route: "/studio",
    action: () => {
      setSelectedTap("studio");
      router.replace("/studio");
    },
  },
  {
    id: "profile",
    label: "Profile",
    route: `/profile/${username}`,
    action: () => {
      setSelectedTap("profile");
      router.replace(`/profile/${username}`);
    },
  },
];
