/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmailOverridesProps = {
    Email?: PrimitiveOverrideProps<ViewProps>;
    "User ID"?: PrimitiveOverrideProps<IconProps>;
    Email138?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type EmailProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: EmailOverridesProps | undefined | null;
}>;
export default function Email(props: EmailProps): React.ReactElement;
