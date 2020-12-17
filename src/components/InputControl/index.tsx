import React from "react";

export default({
    input, 
    label,
    type,
    placeholder,
    id,
    meta: { touched, error, warning }
}) => (
    <div>
        <input {...input} type={type} placeholder={placeholder} id={id}/>
        {touched && error && (
            <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
        )}
    </div>
)