const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {" "}
      {/* Use flex-col and min-h-screen */}
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HackFest 2025</h1>
          <p className="text-lg md:text-xl mb-8">
            Join us for an epic 24-hour hackathon on April 25th, 2025!
          </p>
          <a
            href="/register"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-full shadow hover:shadow-lg transition duration-300"
          >
            Register Now
          </a>
        </div>
      </header>
      {/* Event Details Section */}
      <main className="flex-grow py-12 px-4 md:px-8">
        {" "}
        {/* Add flex-grow to main */}
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About HackFest</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            HackFest is a 24-hour hackathon where developers, designers, and
            innovators come together to build amazing projects. Whether you're a
            beginner or a seasoned pro, this is your chance to showcase your
            skills and learn something new!
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {/* Feature Cards */}
            <div className="p-4 bg-white shadow rounded-lg w-64">
              <h3 className="text-xl font-semibold mb-2">Prizes</h3>
              <p className="text-gray-700">Win cash prizes and tech gadgets!</p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg w-64">
              <h3 className="text-xl font-semibold mb-2">Mentors</h3>
              <p className="text-gray-700">
                Get guidance from industry experts.
              </p>
            </div>
            <div className="p-4 bg-white shadow rounded-lg w-64">
              <h3 className="text-xl font-semibold mb-2">Tracks</h3>
              <p className="text-gray-700">
                Choose from AI, Blockchain, Web3, and more!
              </p>
            </div>
          </div>
        </div>
      </main>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm">
            Questions? Email us at{" "}
            <a href="mailto:info@hackfest.com" className="underline">
              info@hackfest.com
            </a>
          </p>
          <p className="mt-2 text-xs">
            &copy; {new Date().getFullYear()} HackFest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
