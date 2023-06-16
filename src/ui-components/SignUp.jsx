/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="260px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SignUp")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="260px"
        height="32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Enter"
        {...getOverrideProps(overrides, "Sign Up")}
      ></Text>
      <Icon
        width="480px"
        height="60px"
        viewBox={{ minX: 0, minY: 0, width: 480, height: 60 }}
        paths={[
          {
            d: "M12 1L468 1L468 -1L12 -1L12 1ZM479 12L479 48L481 48L481 12L479 12ZM468 59L12 59L12 61L468 61L468 59ZM1 48L1 12L-1 12L-1 48L1 48ZM12 59C5.92486 59 1 54.0751 1 48L-1 48C-1 55.1797 4.82029 61 12 61L12 59ZM479 48C479 54.0751 474.075 59 468 59L468 61C475.18 61 481 55.1797 481 48L479 48ZM468 1C474.075 1 479 5.92487 479 12L481 12C481 4.8203 475.18 -1 468 -1L468 1ZM12 -1C4.8203 -1 -1 4.8203 -1 12L1 12C1 5.92487 5.92487 1 12 1L12 -1Z",
            stroke: "rgba(13,12,77,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 12C0 5.37258 5.37258 0 12 0L468 0C474.627 0 480 5.37258 480 12L480 48C480 54.6274 474.627 60 468 60L12 60C5.37257 60 0 54.6274 0 48L0 12Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 30px - 1px)"
        left="calc(50% - 240px - 100px)"
        {...getOverrideProps(overrides, "Signup Icon")}
      ></Icon>
    </View>
  );
}
