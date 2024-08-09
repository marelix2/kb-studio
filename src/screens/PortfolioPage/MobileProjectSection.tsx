// eslint-disable-next-line no-restricted-imports
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  id: number;
  clientName: string;
  description: string;
  photos1: Array<string>;
};

export const MobileProjectSection = ({
  photos1,
  description,
  clientName,
  id,
}: Props) => {
  const restOfPhotos1 = photos1.filter((_, index) => index > 0);

  return (
    <SectionWrapper>
      <PhotosWrapper>
        <PhotoProvider>
          <PhotoView src={photos1[0]}>
            <Image src={photos1[0]} alt="" />
          </PhotoView>
          {restOfPhotos1 &&
            restOfPhotos1.map((photo, index) => (
              <PhotoView key={index} src={photo}></PhotoView>
            ))}
        </PhotoProvider>
      </PhotosWrapper>
      <CommentWrapper index={id}>
        <CommentInnerWrapper index={id}>
          <Description variant="body1">{description}</Description>
          <ClientName variant="h2">{clientName}</ClientName>
        </CommentInnerWrapper>
      </CommentWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(Box)(({ theme: { palette } }) => ({
  width: "100%",
  height: "fit-content",
  minHeight: 450,
  backgroundColor: palette.primary.light,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const PhotosWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing(2),
  backgroundColor: palette.light.main,
}));

const CommentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLastOne" && prop !== "index",
})<{ isLastOne?: boolean; index: number }>(
  ({ theme: { palette, spacing } }) => ({
    flex: 1,
    zIndex: 1,
    marginRight: `-${spacing(4)}`,
    backgroundColor: palette.light.main,
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })
);

const CommentInnerWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLastOne" && prop !== "index",
})<{ isLastOne?: boolean; index: number }>(
  ({ theme: { palette, spacing } }) => ({
    flex: 1,
    backgroundColor: palette.light.main,
    borderWidth: 2,
    padding: spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })
);

const Description = styled(Typography)(({ theme: { palette, spacing } }) => ({
  cursor: "default",
  color: palette.text.primary,
  textAlign: "center",
  paddingBottom: spacing(2),
})) as typeof Typography;

const ClientName = styled(Typography)(({ theme: { palette } }) => ({
  cursor: "default",
  color: palette.text.primary,
  alignSelf: "flex-end",
})) as typeof Typography;

const Image = styled("img")(({ theme: { breakpoints } }) => ({
  width: 600,
  [breakpoints.down(1600)]: {
    width: 450,
  },

  [breakpoints.down(1441)]: {
    width: 400,
  },
}));
