export const navigationLabels = (setSelectedTap: any) => [
  {
    id: "discover",
    label: "Discover",
    action: () => setSelectedTap("discover"),
  },
  { id: "cases", label: "Cases", action: () => setSelectedTap("cases") },
  {
    id: "myCases",
    label: "My Cases",
    action: () => setSelectedTap("myCases"),
  },
  { id: "create", label: "Create", action: () => setSelectedTap("create") },
  { id: "profile", label: "Profile", action: () => setSelectedTap("profile") },
];
