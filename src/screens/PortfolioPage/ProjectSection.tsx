// eslint-disable-next-line no-restricted-imports
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import { Box, styled, Typography } from "@mui/material";

type Props = {
  id: number;
  clientName: string;
  description: string;
  photos1: Array<string>;
  isFirst?: boolean;
};

export const ProjectSection = ({
  photos1,
  description,
  clientName,
  isFirst = false,
  id,
}: Props) => {
  const restOfPhotos1 = photos1.filter((_, index) => index > 0);

  return (
    <SectionWrapper isFirst={isFirst}>
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
          <Description variant="body2">{description}</Description>
          <ClientName variant="h2">{clientName}</ClientName>
        </CommentInnerWrapper>
      </CommentWrapper>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isFirst",
})<{ isFirst: boolean }>(({ theme: { palette, spacing }, isFirst }) => ({
  width: "100%",
  height: "fit-content",
  minHeight: 450,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: spacing(4),
  paddingBottom: spacing(4),
  borderTopWidth: isFirst ? 0 : 1,
  borderTopStyle: "solid",
  borderTopColor: palette.text.primary,
}));

const PhotosWrapper = styled(Box)(({ theme: { spacing } }) => ({
  flex: 1,
  display: "flex",
  minHeight: 450,
  alignItems: "center",
  justifyContent: "flex-start",
  gap: spacing(4),
}));

const CommentWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLastOne" && prop !== "index",
})<{ index: number }>(({ theme: { spacing }, index }) => ({
  flex: 1,
  minHeight: `calc(450px - ${index === 1 ? spacing(4) : "0px"})`,
  paddingLeft: spacing(4),
  paddingRight: spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const CommentInnerWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isLastOne" && prop !== "index",
})<{ isLastOne?: boolean; index: number }>(
  ({ theme: { palette, spacing }, isLastOne, index }) => ({
    flex: 1,
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
  alignSelf: "flex-end",
})) as typeof Typography;

const Image = styled("img")(({ theme: { breakpoints } }) => ({
  width: 750,
  [breakpoints.down(1600)]: {
    width: 650,
  },
}));
