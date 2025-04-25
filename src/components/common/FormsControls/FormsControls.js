import React from "react";
import styles from "./FormsControls.module.css";

const FormsControl = ({ input, meta, child, ...props }) => {
    //Если элемент формы был нажат или есть ошибка
    const hasErrror = meta.touched && meta.error;
    return (
        <div className={styles["form-control"] + " " + (hasErrror ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasErrror && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}><textarea {...input} {...restProps} /></FormsControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormsControl {...props}><input {...input} {...restProps} /></FormsControl>
}

/*ПО ОТДЕЛЬНОСТИ*/

//Textarea
/* export const Textarea = ({ input, meta, ...props }) => {
    const hasErrror = meta.touched && meta.error;
    return (
        <div className={styles["form-control"] + " " + (hasErrror ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasErrror && <span>{meta.error}</span>}
        </div>
    )
} */

//Input
/* export const Input = ({ input, meta, ...props }) => {
    const hasErrror = meta.touched && meta.error;
    return (
        <div className={styles["form-control"] + " " + (hasErrror ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasErrror && <span>{meta.error}</span>}
        </div>
    )
} */
