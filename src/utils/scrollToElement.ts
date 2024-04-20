export const scrollToElement = ({
  id,
  block = "nearest",
  inline = "nearest",
}: {
  id: string;
} & Pick<ScrollIntoViewOptions, "block" | "inline">) => {
  const targetElm = window.document.querySelector(id); // reference to scroll target

  if (targetElm) {
    targetElm?.scrollIntoView({
      behavior: "smooth",
      block,
      inline,
    });
  }
};
