'use client';
import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

export default function CommentSection() {
  const [key, setKey] = useState(0); // For forcing CommentList refresh

  const handleCommentAdded = () => {
    setKey(prev => prev + 1); // Force CommentList to refresh
  };

  return (
    <section id="comments" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visitor Comments</h2>
            <p className="text-gray-600">
              Share your thoughts and feedback about my portfolio
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <CommentForm onCommentAdded={handleCommentAdded} />
            </div>
            <div>
              <CommentList key={key} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 