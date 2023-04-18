import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Background Image" className="w-full h-full object-cover" />
        <div className="absolute mt-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to St Pauls Church</h1>
          <p className="text-lg mb-8  text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris ipsum.</p>
          <form>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative rounded-full overflow-hidden">
              <input type="email" id="email" name="email" className="w-full py-3 pl-8 pr-3 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple focus:ring-opacity-50" placeholder="Enter your email" required />
              <button type="submit" className="absolute inset-y-0 right-0 px-4 py-2 bg-purple text-white font-semibold rounded-full hover:bg-opacity-80">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Get Connected</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg px-6 py-8">
              <h3 className="text-xl font-semibold mb-4">Join our community</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris ipsum.</p>
              <button className="bg-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-80">Get Connected</button>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-6 py-8">
              <h3 className="text-xl font-semibold mb-4">Attend a service</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris ipsum.</p>
              <button className="bg-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-80">Find a Service</button>
            </div>
            <div className="bg-white rounded-lg shadow-lg px-6 py-8">
              <h3 className="text-xl font-semibold mb-4">Support our mission</h3>
              <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mauris ipsum.</p>
              <button className="bg-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-80">Donate Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
