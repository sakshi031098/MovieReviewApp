import { useState, useEffect } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewHistory from './components/ReviewHistory';
import api from './api';

function App() {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const response = await api.get('/showMovieReviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const addReview = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <ReviewForm onNewReview={addReview} />
      <ReviewHistory reviews={reviews} />
    </div>
  );
}

export default App;
