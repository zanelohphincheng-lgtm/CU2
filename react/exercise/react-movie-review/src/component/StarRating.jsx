const StarRating = ({ rating = 0, interactive = false, onRatingChange }) => {
  return (
    <div className="d-flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`bi bi-star-fill star-icon ${star <= rating ? 'filled' : ''}`}
          style={{ cursor: interactive ? 'pointer' : 'default' }}
          onClick={() => interactive && onRatingChange && onRatingChange(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;