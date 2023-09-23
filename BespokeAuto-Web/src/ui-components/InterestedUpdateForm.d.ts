/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Interested } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type InterestedUpdateFormInputValues = {
    name?: string;
    email?: string;
    country?: string;
    notes?: string;
};
export declare type InterestedUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterestedUpdateFormOverridesProps = {
    InterestedUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterestedUpdateFormProps = React.PropsWithChildren<{
    overrides?: InterestedUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    interested?: Interested;
    onSubmit?: (fields: InterestedUpdateFormInputValues) => InterestedUpdateFormInputValues;
    onSuccess?: (fields: InterestedUpdateFormInputValues) => void;
    onError?: (fields: InterestedUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterestedUpdateFormInputValues) => InterestedUpdateFormInputValues;
    onValidate?: InterestedUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InterestedUpdateForm(props: InterestedUpdateFormProps): React.ReactElement;
