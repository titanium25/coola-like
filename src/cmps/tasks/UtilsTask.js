import React from 'react';
import { attachment_image, plus_sign } from '../../assets/images/icons';

export const HeadlinesTask = ({ title, icon }) => {
    return (
        <div className="headlines-task flex align-center">
            <img src={icon} alt="image crush" />
            <h3>{title}</h3>
        </div>
    )
}
export const AssignedTask = (areAssigned) => {
    return (
        <div>
            {/* {
                areAssigned.map(person => {
                    return <div>

                    </div>
                })
            } */}
            <span><img src={plus_sign} alt="circle plus" /></span>
        </div>
    )
}
export const AttachmentsTask = ({ files }) => {
    return (
        <div className="attachments-container flex align-center">
            {files.map(({ name }) => {
                return <div className="each-file-task">
                    <img src={attachment_image} alt="attachment image" />
                    <h3>{name}</h3>
                    <span>מחק</span>
                </div>
            })}
            <span><img src={plus_sign} alt="square plus" /></span>
        </div>
    )
}

export const TextArea = ({ id, name, rows, cols, text }) => {
    return (
        <div>
            <textarea
                id={id}
                name={name}
                rows={rows}
                cols={cols}
                maxlength="400"
            >{text}</textarea>
        </div>
    )
}