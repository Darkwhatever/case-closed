export type TapId = "discover" | "cases" | "caselist" | "studio" | "profile";

export type NavigationLabelsProps = {
  setSelectedTap: (value: TapId) => void;
  router: {
    replace: (href: string) => void;
  };
  username: string;
};
