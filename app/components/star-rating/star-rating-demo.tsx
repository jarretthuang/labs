import { STAR_RATING } from "~/models/components";
import Star from "~/components/star-rating/star";
import { useState } from "react";

export const meta = () => STAR_RATING.meta;
export const handle = STAR_RATING.routeHandle;

const TOTAL_NUM_OF_STARS = 5;
export default function StarRatingDemo() {
  const [rating, setRating] = useState(3);
  const [draftRating, setDraftRating] = useState(rating);

  const renderStars = () => {
    const result = [];
    for (let i = 0; i < TOTAL_NUM_OF_STARS; i++) {
      result.push(
        <Star
          key={i}
          solid={i < draftRating}
          onMouseEnter={() => setDraftRating(i + 1)}
          onClick={() => {
            setRating(i + 1);
            setDraftRating(i + 1);
          }}
        />,
      );
    }
    return result;
  };

  return (
    <div>
      <div className="flex items-center gap-1 p-2">
        <span>The current rating is</span>
        <span className="bg-gray-100 px-3 py-1 rounded-lg">
          {rating} / {TOTAL_NUM_OF_STARS}
        </span>
        <span>.</span>
      </div>
      <div className="flex" onMouseLeave={() => setDraftRating(rating)}>
        {renderStars()}
      </div>
    </div>
  );
}
