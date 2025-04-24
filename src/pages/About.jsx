const About = () => {
  return (
    <section className="container py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Who We Are
          </h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            At <span className="font-semibold text-primary">FruitFresh</span>, we're on a mission to bring nature's best to your table.
            With a commitment to quality, sustainability, and health, we deliver premium fruits and
            organic produce—fresh from farm to fork.
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">🌱 Our Mission</h2>
              <p className="text-gray-600">
                We believe everyone deserves access to clean, nourishing food. That’s why we partner
                with local growers and practice sustainable sourcing to ensure everything you order is
                as fresh and ethical as it is delicious.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">💡 What Sets Us Apart</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Locally sourced and certified organic produce</li>
                <li>Eco-conscious packaging & carbon-neutral delivery</li>
                <li>Same-day delivery in select areas</li>
                <li>Trusted by thousands of health-conscious customers</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://www.tasteofhome.com/wp-content/uploads/2024/05/TOHA24_The-Fruit-Company_Katie-Bandurski_01_KSedit.jpg?w=700"
            alt="Fresh fruit delivery"
            className="rounded-lg shadow-md object-cover h-52 w-full hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://allianceforscience.org/wp-content/uploads/oldsite/Basil%20-%20Keating%20Blog%20Photo.jpg"
            alt="Organic farming"
            className="rounded-lg shadow-md object-cover h-52 w-full hover:scale-105 transition-transform duration-300"
          />
          <img
            src="https://thinkhealth.priorityhealth.com/wp-content/uploads/2020/05/Veggies-1170x480.jpg"
            alt="Healthy produce"
            className="col-span-2 rounded-lg shadow-md object-cover h-64 w-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
