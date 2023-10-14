// Main
import Rating from "../../rating/Rating";

const ProductRating = () => {
    const RateItem = ({ number, rate }: { number: number; rate: number }) => {
        const percint = rate / number;
        const lineWidth = percint / 10;

        return (
            <div className="flex items-center">
                <span className="text-gray-500 font-bold font-mono">
                    {number} stars
                </span>
                <div className="relative w-52 mx-4 h-1 bg-gray-300">
                    <div
                        style={{ width: `${lineWidth}%` }}
                        className="absolute left-0 h-full bg-yellow-500"
                    />
                </div>
                <span className="text-gray-500 font-bold font-mono">
                    {rate}
                </span>
            </div>
        );
    };
    return (
        <div className="flex flex-col items-center md:flex-row">
            <div className="border rounded-full mb-8 md:mb-0 md:mr-6 h-44 w-44 flex flex-col items-center justify-center p-6">
                <h1 className="text-4xl font-bold mb-2 text-secondary">
                    4.635
                </h1>

                <Rating stars rate={4.635} className="h-6 w-6" />
            </div>

            <div className="flex flex-col justify-center">
                <RateItem number={5} rate={1200} />
                <RateItem number={4} rate={460} />
                <RateItem number={3} rate={621} />
                <RateItem number={2} rate={245} />
                <RateItem number={1} rate={52} />
            </div>
        </div>
    );
};

export default ProductRating;
