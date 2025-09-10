import React from 'react';

const InstagramPost: React.FC<{ imageUrl: string; isVideo?: boolean }> = ({ imageUrl, isVideo }) => (
  <div className="relative group aspect-square overflow-hidden">
    <a href="https://www.instagram.com/brasilportugalsc" target="_blank" rel="noopener noreferrer">
      <img src={imageUrl} alt="Instagram Post" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
        {isVideo && (
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-gray-800 bg-opacity-50 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-full p-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
          </div>
        )}
      </div>
    </a>
  </div>
);

const posts = [
  { imageUrl: 'https://i.imgur.com/uR00E5a.png' },
  { imageUrl: 'https://i.imgur.com/5J3mD6b.png' },
  { imageUrl: 'https://i.imgur.com/Bf1gN4g.png' },
  { imageUrl: 'https://i.imgur.com/v8tTjFp.png' },
  { imageUrl: 'https://i.imgur.com/5u9z8p3.png', isVideo: true },
];

const InstagramFeedSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Follow us on Instagram <a href="https://www.instagram.com/brasilportugalsc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@brasilportugalsc</a>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
          {posts.map((post, index) => (
            <InstagramPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeedSection;