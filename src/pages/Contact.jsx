const Contact = () => {
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Contact Form */}
        <div>
          <h1 className="text-4xl font-bold mb-4 text-primary">Contact Us</h1>
          <p className="text-gray-600 mb-6">We’d love to hear from you! Fill out the form below and we’ll get back to you shortly.</p>

          <form className="space-y-4"
            action="https://formspree.io/f/mjkwvzql"
            method="post"
            >
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Message</label>
              <textarea
                rows="5"
                placeholder="How can we help you?"
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-red-600 transition duration-300">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image or Info Block */}
        <div className="w-full h-full">
          <img
            src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg?t=st=1745490158~exp=1745493758~hmac=8b1589d19602256e36fd47e558434cfa3683ad5b9c51720f44abc7bce205fad2&w=740"
            alt="Contact illustration"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
