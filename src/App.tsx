import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Instagram, Facebook, Menu, X, Palette, Scissors, Sparkles } from 'lucide-react';

interface BookingForm {
  name: string;
  phone: string;
  address: string;
  service: string;
  date: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState<BookingForm>({
    name: '',
    phone: '',
    address: '',
    service: '',
    date: ''
  });

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Bridal Makeup",
      description: "Complete bridal transformation with premium products"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Party Makeup",
      description: "Glamorous looks for special occasions"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Styling",
      description: "Professional hair styling and treatments"
    }
  ];

  const portfolio = [
    "/IMG-20250823-WA0008.jpg",
    "/IMG-20250823-WA0003.jpg",
    "/IMG-20250823-WA0005.jpg"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.address || !bookingForm.service || !bookingForm.date) {
      alert('Please fill in all fields');
      return;
    }

    const message = `Hi Shital! I would like to book an appointment.

*Name:* ${bookingForm.name}
*Phone:* ${bookingForm.phone}
*Address:* ${bookingForm.address}
*Service:* ${bookingForm.service}
*Preferred Date:* ${bookingForm.date}

Please confirm my appointment. Thank you!`;

    const whatsappUrl = `https://wa.me/919604997544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setBookingForm({
      name: '',
      phone: '',
      address: '',
      service: '',
      date: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-pink-500 mr-2" />
              <span className="text-2xl font-bold text-gray-800">Shital Makeover</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-800 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#about" className="text-gray-800 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#services" className="text-gray-800 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-800 hover:text-pink-500 px-3 py-2 text-sm font-medium transition-colors">Portfolio</a>
                <a href="#booking" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">Book Now</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-pink-500"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-800 hover:text-pink-500">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-800 hover:text-pink-500">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-800 hover:text-pink-500">Services</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-800 hover:text-pink-500">Portfolio</a>
              <a href="#booking" className="block px-3 py-2 bg-pink-500 text-white rounded-lg mx-3">Book Now</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Transform Your
                <span className="text-pink-500 block">Beauty</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional makeup and hair styling services for your special moments. 
                Creating stunning looks that make you feel confident and beautiful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#booking" className="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors text-center font-semibold">
                  Book Appointment
                </a>
                <a href="#portfolio" className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-lg hover:bg-pink-500 hover:text-white transition-colors text-center font-semibold">
                  View Portfolio
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-12 text-center">
                <Sparkles className="w-24 h-24 text-pink-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Professional Beauty Services</h3>
                <p className="text-gray-600">Creating stunning transformations for your special moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Shital</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With years of experience in the beauty industry, I specialize in creating 
              stunning makeup looks and hairstyles that enhance your natural beauty.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/IMG-20250823-WA0002 copy.jpg" 
                alt="Shital - Professional Makeup Artist"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Your Beauty Expert</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I believe that every person is unique and deserves a personalized approach to beauty. 
                My passion lies in understanding your vision and bringing it to life with precision and artistry.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">5+ Years of Professional Experience</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">500+ Happy Clients</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Certified Professional Makeup Artist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">My Services</h2>
            <p className="text-xl text-gray-600">
              Professional makeup and hair styling for every occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-pink-500 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">
              Some of my recent work showcasing different styles and occasions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={image} 
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Appointment</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your look? Fill out the form below and I'll get back to you on WhatsApp
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleBooking} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={bookingForm.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Enter your address"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={bookingForm.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Party Makeup">Party Makeup</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Bridal Package">Bridal Package (Makeup + Hair)</option>
                    <option value="Other">Other (Please specify in WhatsApp)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-500 text-white py-4 px-8 rounded-lg hover:bg-pink-600 transition-colors font-semibold text-lg"
              >
                Book Appointment via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-gray-300">+91 9604997544</p>
            </div>
            
            <div className="text-center">
              <Clock className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-300">Mon - Sun: 9:00 AM - 8:00 PM</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-8 h-8 text-pink-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Available for home visits</p>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-gray-700">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400">© 2024 Shital Makeover. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;