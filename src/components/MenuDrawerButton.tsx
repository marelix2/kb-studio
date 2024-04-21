import { Box } from "@mui/material";

import { closeMenu, menuBurger } from "@/assets";

type Props = {
  open: boolean;
  onClick: (value: boolean) => void;
};

type ButtonProps = {
  onClick: () => void;
};

const MenuButton = ({ onClick }: ButtonProps) => (
  <Box sx={{ mr: 2 }}>
    <img
      src={menuBurger}
      alt="menu icon"
      width="28"
      height="21"
      onClick={onClick}
    />
  </Box>
);

const CloseButton = ({ onClick }: ButtonProps) => (
  <Box sx={{ mr: 2 }}>
    <img
      src={closeMenu}
      alt=" menu burger icon"
      width="24"
      height="24"
      onClick={onClick}
    />
  </Box>
);

export const MenuDrawerButton = ({ open, onClick }: Props) => {
  return open ? (
    <CloseButton onClick={() => onClick(false)} />
  ) : (
    <MenuButton onClick={() => onClick(true)} />
  );
};
