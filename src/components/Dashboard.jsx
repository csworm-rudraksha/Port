import React, { useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

const Dashboard = () => {
  const [content, setContent] = useState('# Welcome to the Markdown Editor\n\nStart writing your content here...');
  const [likes, setLikes] = useState(() => {
    // Initialize likes from localStorage or default to 0
    const savedLikes = localStorage.getItem('markdownLikes');
    return savedLikes ? parseInt(savedLikes) : 0;
  });
  const [hasLiked, setHasLiked] = useState(() => {
    // Check if user has already liked
    return localStorage.getItem('hasLiked') === 'true';
  });

  // Save likes to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('markdownLikes', likes.toString());
  }, [likes]);

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(prev => prev + 1);
      setHasLiked(true);
      localStorage.setItem('hasLiked', 'true');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800 rounded-xl p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Markdown Editor</h1>
          <div data-color-mode="dark">
            <MDEditor
              value={content}
              onChange={setContent}
              height={500}
              preview="live"
              className="!bg-slate-800"
            />
          </div>
          
          {/* Like Button Section */}
          <div className="mt-6 flex items-center space-x-4">
            <button
              onClick={handleLike}
              disabled={hasLiked}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                hasLiked 
                  ? 'bg-green-500 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" 
                  clipRule="evenodd" 
                />
              </svg>
              <span>{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
            </button>
            {hasLiked && (
              <span className="text-green-400 text-sm">
                You liked this post!
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 