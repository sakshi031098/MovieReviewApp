import { useState } from 'react';
import api from '../api';

export default function ReviewForm({ onNewReview }) {
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;

    try {
      const response = await api.post('/addMovieReviews', { review: reviewText });
      onNewReview(response.data);
      setReviewText('');
      window.location.reload(); // optional: remove if you're already updating state from parent
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div
      style={{
        height: '60vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          padding: '30px',
          backgroundColor: 'rgb(235, 233, 242)',
          borderRadius: '16px'
        }}
      >
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1e2a78',
            marginBottom: '8px',
          }}
        >
          Movie review
        </h2>

        <form onSubmit={handleSubmit}>
          <textarea
            rows="6"
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            style={{
              width: '100%',
              padding: '14px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              resize: 'none',
              fontSize: '16px',
              fontFamily: 'inherit',
              color: '#1e2a78',             // Fixed: readable dark text
              backgroundColor: '#fff',      // Fixed: white background
              marginBottom: '16px',
              outline: 'none',
            }}
          />

          <button
            type="submit"
            style={{
              padding: '12px 20px',
              backgroundColor: '#3b82f6',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#2563eb')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#3b82f6')}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
}
