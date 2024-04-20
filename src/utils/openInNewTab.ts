export const openInNewTab = ({ url }: { url: string }) => {
  if (typeof window !== "undefined") {
    window?.open(url, "_blank")?.focus();
  }
};
