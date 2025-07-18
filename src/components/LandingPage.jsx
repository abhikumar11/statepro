import React from 'react';

const LandingPage = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505318985551-5793f4a707bd?q=80&w=1074&auto=format&fit=crop')",
      }}
    >
      <div className="flex items-center justify-center">
        <div className="text-white text-center px-6">
          <h1 className="text-4xl font-handwriting mb-2">
            alexa peterson
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            COMING APRIL 2023
          </h2>
          <p className="mb-6 text-lg">
            My Travel Blog is almost ready. Be one of the first to experience it
            by entering your email below. I’ll notify you as soon as it’s live.
            Let’s do this!
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <input
              type="text"
              placeholder="Name"
              className="px-4 py-2 rounded w-64 text-black bg-white"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded w-64 text-black bg-white"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded"
            >
              SIGN ME UP!
            </button>
          </form>
          <div className="flex justify-center space-x-6 text-xl">
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-yellow-400">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
          <p className="text-sm text-gray-300 mt-8">
            &copy; 2023 Alexa Peterson. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
