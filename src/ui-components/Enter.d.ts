/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EnterOverridesProps = {
    Enter?: PrimitiveOverrideProps<ViewProps>;
    "Enter Icon"?: PrimitiveOverrideProps<IconProps>;
    Enter1420?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EnterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EnterOverridesProps | undefined | null;
}>;
export default function Enter(props: EnterProps): React.ReactElement;
