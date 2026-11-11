import StudioPanelPresence from "./(components)/StudioPanelPresence";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StudioPanelPresence />
      {children}
    </>
  );
}
