import React from "react";
interface IActivity {
    title: string;
    details: string;
    time: string;
    user: string;
    handleDivClick?: React.MouseEventHandler<HTMLDivElement>;
    handleOptionClick?: React.MouseEventHandler<HTMLDivElement>;
}
/**
 *
 * @param title is a Activity title
 * @param details is a Activity description
 * @param time is a Activity time
 * @param user is a Activity done by user
 * @param handleDivClick is a click event of the Activity
 * @param handleOptionClick is a click event of option button inside of the Activity
 */
declare const Activity: ({ title, details, time, user, handleDivClick, handleOptionClick, }: IActivity) => React.JSX.Element;
export default Activity;
