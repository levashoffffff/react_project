import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {
    /* let stateWithSetState = useState(false); */
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] );
    /* let editMode = stateWithSetState[0];
    let setEditMode = stateWithSetState[1]; */
    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{props.status || "------"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;