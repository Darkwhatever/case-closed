export type TapId = "discover" | "cases" | "caselist" | "studio" | "profile";

export type NavigationLabelsProps = {
  setSelectedTap: (value: TapId) => void;
  router: {
    push: (href: string) => void;
  };
  username: string;
  params: URLSearchParams;
};
