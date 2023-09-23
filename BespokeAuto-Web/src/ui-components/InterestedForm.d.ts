/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InterestedFormInputValues = {
    name?: string;
    email?: string;
    country?: string;
    notes?: string;
};
export declare type InterestedFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterestedFormOverridesProps = {
    InterestedFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterestedFormProps = React.PropsWithChildren<{
    overrides?: InterestedFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: InterestedFormInputValues) => InterestedFormInputValues;
    onSuccess?: (fields: InterestedFormInputValues) => void;
    onError?: (fields: InterestedFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterestedFormInputValues) => InterestedFormInputValues;
    onValidate?: InterestedFormValidationValues;
} & React.CSSProperties>;
export default function InterestedForm(props: InterestedFormProps): React.ReactElement;
