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
              <span className="text-2xl font-bold text-gray-800">Shital Makeover</span>
              
