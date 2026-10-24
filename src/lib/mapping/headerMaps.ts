export const navigationLabels = (setSelectedTap: any) => [
  { id: "home", label: "Discover", action: () => setSelectedTap("home") },
  { id: "cases", label: "Cases", action: () => setSelectedTap("cases") },
  {
    id: "myCases",
    label: "My Cases",
    action: () => setSelectedTap("myCases"),
  },
  { id: "create", label: "Create", action: () => setSelectedTap("create") },
  { id: "profile", label: "Profile", action: () => setSelectedTap("profile") },
];
