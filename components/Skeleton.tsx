// Main
import React from "react";
import SkeletonLoader from "react-loading-skeleton";

interface IProps {
    children?: React.ReactNode;
    rows?: number;
    condition: boolean;
    className?: string;
}

const Skeleton = ({ children, rows, condition, className }: IProps) => {
    if (condition) return <>{children}</>;
    else
        return <SkeletonLoader count={rows || 1} className={className || ""} />;
};

export default Skeleton;
