'use client';
import { useState, useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function RatingWidget() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRating = async () => {
      try {
        const response = await fetch('/api/ratings');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setAverageRating(data.average || 0);
        setRatingCount(data.count || 0);
      } catch (error) {
        console.error("Failed to fetch ratings:", error);
        setAverageRating(0);
        setRatingCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRating();
  }, []);

  const handleSubmit = async () => {
    if (rating === 0) return;
    
    try {
      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value: rating }),
      });
      
      if (response.ok) {
        const data = await response.json();
        setAverageRating(data.average);
        setRatingCount(data.count);
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="fixed bottom-4 right-4 p-3 bg-white shadow rounded-lg">
        Loading ratings...
      </div>
    );
  }

  return (
    <motion.div 
      className="fixed bottom-4 right-4 p-4 bg-white shadow-lg rounded-lg w-64"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {submitted ? (
        <div className="text-center">
          <p className="mb-2 text-gray-700">Thank you for your rating!</p>
          <div className="flex justify-center items-center gap-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                i < Math.round(averageRating) ? 
                  <FaStar key={i} className="w-5 h-5" /> : 
                  <FaRegStar key={i} className="w-5 h-5" />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {averageRating.toFixed(1)} ({ratingCount} votes)
            </span>
          </div>
        </div>
      ) : (
        <>
          <p className="mb-2 text-center text-gray-700">Rate my portfolio</p>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => {
              const ratingValue = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  className="p-1 focus:outline-none"
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                  onClick={() => setRating(ratingValue)}
                >
                  {ratingValue <= (hover || rating) ? (
                    <FaStar className="w-6 h-6 text-yellow-400" />
                  ) : (
                    <FaRegStar className="w-6 h-6 text-yellow-400" />
                  )}
                </button>
              );
            })}
          </div>
          <button 
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={rating === 0}
          >
            Submit Rating
          </button>
        </>
      )}
    </motion.div>
  );
}