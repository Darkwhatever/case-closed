import type { NavigationLabelsProps } from "@/src/interfaces/mappingInterfaces";

const sortState = { columnType: "date", orderBy: "desc" };

export const navigationLabels = ({
  setSelectedTap,
  router,
  username,
  params,
}: NavigationLabelsProps) => [
  {
    id: "discover",
    label: "Discover",
    route: "/homepage",
    action: () => {
      setSelectedTap("discover");
      router.push("/homepage");
    },
  },
  {
    id: "cases",
    label: "Cases",
    route: "/cases",
    action: () => {
      setSelectedTap("cases");
      router.push("/cases?sort=rating&orderBy=desc");
    },
  },
  {
    id: "caselist",
    label: "My Cases",
    route: `/caselist/${username}`,
    action: () => {
      setSelectedTap("caselist");
      router.push(`/caselist/${username}`);
    },
  },
  {
    id: "studio",
    label: "Studio",
    route: "/studio",
    action: () => {
      params.set("sort", JSON.stringify(sortState));
      setSelectedTap("studio");
      router.push(`/studio?${params.toString()}`);
    },
  },
  {
    id: "profile",
    label: "Profile",
    route: `/profile/${username}`,
    action: () => {
      setSelectedTap("profile");
      router.push(`/profile/${username}`);
    },
  },
];
