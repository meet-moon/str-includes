interface IActivity {
    title: string;
    details: string;
    time: string;
    user: string;
    status?: boolean;
    completed?: boolean;
    next?: boolean;
    weather?: boolean;
    statustype?: "overdue" | "not assigned" | "overdue-alert";
    confiltButtonShow?: boolean;
    length?: number | undefined;
    handleDivClick?: React.MouseEventHandler<HTMLDivElement>;
}
/**
 *
 * @param title is a Activity title
 * @param details is a Activity description
 * @param time is a Activity time
 * @param user is a Activity done by user
 * @param status is a Activity status done by user
 * @param statustype type of Activity status
 * @param completed Activity typed completed
 * @param next Activity should be next
 * @param weather Activity weather only
 * @param handleDivClick is a click event of the Activity
 */
export declare const Activity: ({ title, details, time, user, status, statustype, completed, next, weather, confiltButtonShow, length, }: IActivity) => import("react/jsx-runtime").JSX.Element;
export {};
