import { PhotoProvider, PhotoView } from "react-photo-view";
import { Box, styled } from "@mui/material";

import { Header } from "./Header";

import {
  project_1_1,
  project_1_1_1,
  project_1_1_2,
  project_1_1_3,
  project_1_1_4,
  project_1_1_5,
  project_1_1_6,
  project_1_1_7,
  project_1_2,
  project_1_3,
  project_2_1,
  project_2_2,
  project_2_2_1,
  project_2_2_2,
  project_2_2_3,
  project_2_3,
  project_2_4,
  project_2_5,
  project_2_6,
  project_3_1,
  project_3_2,
  project_3_2_1,
  project_3_2_2,
  project_3_2_3,
  project_3_2_4,
  project_3_2_5,
  project_3_3,
} from "@/assets";
import { PageHeader } from "@/components";

const photos = [
  project_1_1,
  project_1_2,
  project_1_3,
  project_3_1,
  project_3_2,
  project_3_3,
  project_2_1,
  project_2_2,
  project_2_3,
  project_2_4,
  project_2_5,
  project_2_6,
  project_3_2_1,
  project_3_2_2,
  project_3_2_3,
  project_3_2_4,
  project_3_2_5,
  project_2_2_1,
  project_2_2_2,
  project_2_2_3,
  project_1_1_1,
  project_1_1_2,
  project_1_1_3,
  project_1_1_4,
  project_1_1_5,
  project_1_1_6,
  project_1_1_7,
];

export const GalleryPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <InnerWrapper>
          <PageHeader title={"projekty"} />
          <ImagesWrapper>
            {photos.map((photo) => (
              <PhotoProvider>
                <PhotoView src={photo}>
                  <Image src={photo} alt="k&b studio example photo" />
                </PhotoView>
              </PhotoProvider>
            ))}
          </ImagesWrapper>
        </InnerWrapper>
      </MainContainer>
    </>
  );
};

const MainContainer = styled(Box)(({ theme: { spacing, palette } }) => ({
  maxWidth: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: spacing(4),
  backgroundColor: palette.background.paper,
}));

const InnerWrapper = styled(Box)(({ theme: { spacing } }) => ({
  maxWidth: "1920px",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: spacing(4),
}));

const ImagesWrapper = styled(Box)(({ theme: { spacing, breakpoints } }) => ({
  width: "100%",
  display: "grid",
  columnGap: spacing(4),
  rowGap: spacing(2),
  gridTemplateColumns: "1fr 1fr",
  margin: "24px auto",
  justifyItems: "center",
  alignContent: "center",
  [breakpoints.down(1360)]: {
    gridTemplateColumns: "1fr",
  },
}));

const Image = styled("img")(({ theme: { breakpoints } }) => ({
  width: 750,
  [breakpoints.down(1600)]: {
    width: 650,
  },

  [breakpoints.down(700)]: {
    width: 400,
  },
  [breakpoints.down("sm")]: {
    width: 320,
  },
}));
