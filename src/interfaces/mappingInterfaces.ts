export type TapId = "discover" | "cases" | "myCases" | "studio" | "profile";

export type NavigationLabelsProps = {
  setSelectedTap: (value: TapId) => void;
  router: {
    replace: (href: string) => void;
  };
  username: string;
};
