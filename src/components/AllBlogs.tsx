import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Tag, ArrowRight } from 'lucide-react';

const AllBlogs = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'Git-Github',
      title: 'Why Every Developer Should Learn Git and GitHub – A Complete Guide with Commands',
      excerpt: 'Discover why Git and GitHub are essential tools for every developer. Learn key commands, workflows, and collaboration tips in this complete guide',
      date: '2025-06-16',
      readTime: '4 min read',
      tags: ['Version Control', 'Devops', 'Git'],
      author: 'Rudraksha Kushwaha',
    },
     
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back button */}
          <Link
            to="/#blogs"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              All <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Blog Posts</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and thoughts on web development, AI, and technology trends
            </p>
          </div>

          {/* Blogs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 h-full flex flex-col">
                  {/* Blog Header */}
                  <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-48 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white text-center p-6">
                      <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
                      <div className="flex items-center justify-center space-x-4 text-blue-100">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full bg-white"
                          style={{
                            width: Math.random() * 100 + 20,
                            height: Math.random() * 100 + 20,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            x: [0, 20, 0],
                            y: [0, -20, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: Math.random() * 4 + 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                        >
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group"
                      >
                        <span>Read More</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllBlogs;