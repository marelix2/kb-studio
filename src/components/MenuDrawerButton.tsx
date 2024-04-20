import { Box } from "@mui/material";

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
      src="src/assets/menu_burger.svg"
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
      src="src/assets/close_menu.svg"
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
