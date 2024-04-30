// eslint-disable-next-line no-restricted-imports
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  id: number;
  clientName: string;
  description: string;
  photos: Array<string>;
  isLastOne?: boolean;
};

export const ProjectSection = ({
  photos,
  description,
  clientName,
  isLastOne,
  id,
}: Props) => {
  const restOfPhotos = photos.filter((_, index) => index > 1);

  return (
    <SectionWrapper>
      <PhotosWrapper>
        <PhotoProvider>
          <PhotoView src={photos[0]}>
            <Image src={photos[0]} alt="" />
          </PhotoView>
          <PhotoView src={photos[1]}>
            <Image src={photos[1]} alt="" />
          </PhotoView>
          {restOfPhotos &&
            restOfPhotos.map((photo, index) => (
              <PhotoView key={index} src={photo}></PhotoView>
            ))}
        </PhotoProvider>
      </PhotosWrapper>
      <CommentWrapper index={id} isLastOne={isLastOne}>
        <CommentInnerWrapper isLastOne={isLastOne} index={id}>
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
  backgroundColor: palette.light.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const PhotosWrapper = styled(Box)(({ theme: { palette, spacing } }) => ({
  flex: 3,
  display: "flex",
  minHeight: 450,
  alignItems: "center",
  justifyContent: "center",
  gap: spacing(4),
  backgroundColor: palette.light.main,
}));

const CommentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLastOne" && prop !== "index",
})<{ isLastOne?: boolean; index: number }>(
  ({ theme: { palette, spacing }, index, isLastOne }) => ({
    flex: 1,
    minHeight: `calc(450px - ${index === 1 ? spacing(4) : "0px"})`,
    backgroundColor: palette.primary.light,
    paddingTop: index === 1 ? spacing(4) : 0,
    paddingBottom: isLastOne ? spacing(4) : 0,
    paddingLeft: spacing(4),
    paddingRight: spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })
);

const CommentInnerWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLastOne" && prop !== "index",
})<{ isLastOne?: boolean; index: number }>(
  ({ theme: { palette, spacing }, isLastOne, index }) => ({
    flex: 1,
    backgroundColor: palette.primary.light,
    borderWidth: 2,
    borderTopWidth: index === 1 ? 2 : 0,
    borderBottomWidth: isLastOne ? 2 : 0,
    borderColor: palette.common.white,
    borderStyle: "solid",
    padding: spacing(4),
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
  paddingBottom: spacing(4),
})) as typeof Typography;

const ClientName = styled(Typography)(({ theme: { palette } }) => ({
  cursor: "default",
  color: palette.text.primary,
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
