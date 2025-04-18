import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ReviewHistory() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:8001/showMovieReviews');
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div
      style={{
        width: '90%',
        margin: '40px auto',
        padding: '30px',
        backgroundColor: 'rgb(235, 233, 242)',
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1e2a78',
          marginBottom: '16px',
        }}
      >
        Review History
      </h2>

      <div style={{ overflowX: 'auto' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            backgroundColor: '#fff',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
              <th style={thStyle}>Review</th>
              <th style={thStyle}>Prediction</th>
              <th style={thStyle}>Score</th>
            </tr>
          </thead>
          <tbody>
            {reviews.length > 0 ? (
              reviews.map((rev, index) => (
                <tr key={index} style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}>
                  <td style={tdStyle}>{rev.review}</td>
                  <td style={tdStyle}>{rev.prediction}</td>
                  <td style={tdStyle}>{rev.score.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ ...tdStyle, textAlign: 'center', color: '#888', padding: '20px' }}>
                  No reviews found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Style objects
const thStyle = {
  padding: '12px 16px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#1e2a78',
  borderBottom: '2px solid #ddd',
};

const tdStyle = {
  padding: '12px 16px',
  fontSize: '14px',
  color: '#333',
  borderBottom: '1px solid #eee',
  verticalAlign: 'top',
};

const rowStyleEven = {
  backgroundColor: '#fafafa',
};

const rowStyleOdd = {
  backgroundColor: '#fff',
};
