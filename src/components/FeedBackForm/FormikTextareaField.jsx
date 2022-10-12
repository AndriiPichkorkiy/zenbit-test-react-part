import { useField } from "formik";
import React from "react";
import { TextAreaStyled } from "./FeedBackForm-styled";


export const FormikTextareaField = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <TextAreaStyled {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};