import { SetStateAction } from "react";

const MAX_PRICE = 5000000;

export default function PriceSlider({
  value,
  onChange,
}: {
  value: number;
  onChange: React.Dispatch<SetStateAction<number>>;
}) {
  const percent = (value / MAX_PRICE) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-sm font-semibold uppercase">
        <label htmlFor="max-price">Max Price ($)</label>
        <span className="text-xs font-semibold text-bright-green">
          ${value.toLocaleString()}
        </span>
      </div>

      <div className="relative mt-3 h-2 w-full rounded-full bg-gray-200">
        {/* filled track */}
        <div
          className="absolute h-2 rounded-full bg-bright-green"
          style={{ width: `${percent}%` }}
        />
        <input
          id="max-price"
          type="range"
          min={0}
          max={MAX_PRICE}
          step={50}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 h-2 w-full cursor-pointer appearance-none bg-transparent
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:h-4
                     [&::-webkit-slider-thumb]:w-4
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-bright-green
                     [&::-webkit-slider-thumb]:shadow
                     [&::-moz-range-thumb]:h-4
                     [&::-moz-range-thumb]:w-4
                     [&::-moz-range-thumb]:rounded-full
                     [&::-moz-range-thumb]:border-0
                     [&::-moz-range-thumb]:bg-bright-green"
        />
      </div>
    </div>
  );
}
