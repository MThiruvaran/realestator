import React, { useContext } from "react";
import Image from "next/image";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const leftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Flex
      p={"5"}
      justifyContent={"center"}
      alignItems={"center"}
      marginRight={"1"}
    >
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const rightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      marginRight={"1"}
      padding={"5"}
    >
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        cursor={"pointer"}
      />
    </Flex>
  );
};

const ImageScrollbar = ({ data }) => {
  return (
    <ScrollMenu
      LeftArrow={leftArrow}
      RightArrow={rightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map((image) => (
        <Box
          key={image.id}
          width={"910px"}
          itemID={image.id}
          overflow={"hidden"}
          p="1"
        >
          <Image
            placeholder="blur"
            blurDataURL={image.url}
            src={image.url}
            width={"1000"}
            height={"500"}
            alt="Property"
            sizes="(max-width:500px) 100px, (max-width:1024px) 400px"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;
