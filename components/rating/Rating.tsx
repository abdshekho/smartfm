// Main
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import RatingItem from "react-rating";

const Rating = ({
    rate = 0,
    stars,
    className,
}: {
    rate: number;
    stars?: boolean;
    className?: string;
}) => {
    return (
        <div className="flex items-center">
            <RatingItem
                emptySymbol={
                    <StarIcon
                        className={className || "h-3.5 w-3.5"}
                        fill="gray"
                    />
                }
                fullSymbol={
                    <StarIcon
                        className={className || "h-3.5 w-3.5"}
                        fill="orange"
                    />
                }
                initialRating={rate}
                fractions={2}
                stop={5}
                readonly
            />
            {!stars ? (
                <p className="font-mono text-gray-400 text-xs">({rate})</p>
            ) : (
                ""
            )}
        </div>
    );
};

export default Rating;
