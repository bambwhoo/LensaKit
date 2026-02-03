import { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, Building2, Users, Award, TrendingUp, Shield, ChevronDown, Heart, X, Menu, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from "react-router-dom";

export default function Home() {
  const [, ] = useState('rent');

  return (
    <div className="w-full min-h-screen bg-white m-0 p-0">
      
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-teal-800 to-teal-600 text-white overflow-hidden w-full">
        <div className="min-h-screen px-6 sm:px-8 lg:px-12 xl:px-16 pt-12 pb-20 lg:pt-16 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-1 items-center max-w-[1920px] mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-teal-700/50 px-4 py-2 rounded-full">
                <Award size={20} />
              </div>
              
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                With<br />
                <span className="text-teal-200">LensaKit</span>
              </h1>
              
              <p className="font-bold text-lg lg:text-xl text-teal-50 max-w-md">
                Capturing Moments, Telling Stories
              </p>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1549969363-fc20d0360248?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Modern Building" 
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute top-10 -right-10 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id='about' className="py-20 bg-white w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-teal-600">LensaKit</span>
            </h2>
            <p className="text-gray-600 mb-5 max-w-3xl">
              Lensakit is a photography services company founded in 2022. Starting from a love of the visual world and the art of photography, we have grown into a creative team focused on professional photography for various needs.
            </p>
            <p className="text-gray-600 mb-12 max-w-4xl">
              We offer photography for weddings, graduations, products, events, and corporate documentation. With the support of modern equipment and experienced photographers, we are committed to delivering the best results and client satisfaction.
            </p>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-5xl font-bold mb-2">150+</h3>
                <p className="text-teal-100">Projects Completed</p>
              </div>

              <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-5xl font-bold mb-2">8+</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-5xl font-bold text-gray-900 mb-2">30+</h3>
                <p className="text-gray-600">Photography Awards</p>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8 shadow-lg">
                <h3 className="text-5xl font-bold text-gray-900 mb-2">1K+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>

            {/* Visi & Misi */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Vision & Mission</h3>

                {/* Vision */}
                <div className="mb-8">
                  <h4 className="text-lg lg:text-xl font-semibold mb-3 text-teal-300">Vision</h4>
                  <p className="text-gray-300 text-base lg:text-lg">
                    To be a trusted photography service that is able to present high-quality and emotionally valuable visual works.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <h4 className="text-lg lg:text-xl font-semibold mb-3 text-teal-300">Mission</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-base lg:text-lg">
                    <li>Capture the moment with a creative concept</li>
                    <li>Providing professional and timely service</li>
                    <li>Prioritize client satisfaction</li>
                    <li>Keeping up with developments in photography technology</li>
                  </ul>
                </div>
              </div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Jasa */}
      <section id="services" className="py-20 bg-white w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="text-teal-600">Photography Services</span>
              </h2>
              <p className="text-gray-600 max-w-3xl text-lg">
                Discover our comprehensive photography services tailored to capture your special moments
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 lg:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop" 
                  alt="Wedding Photography" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Wedding Photography</h3>
                  <p className="text-sm text-gray-200 mb-3">Capture your special day beautifully</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 lg:h-96">
                <img 
                  src="https://images.unsplash.com/photo-1623461487986-9400110de28e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Graduation Photography" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Graduation Photography</h3>
                  <p className="text-sm text-gray-200 mb-3">Celebrate your achievement</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer h-80 lg:h-96">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Product Photography" 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Product Photography</h3>
                  <p className="text-sm text-gray-200 mb-3">Showcase your products perfectly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Gallery */}
<section id="gallery" className="py-20 bg-gray-50 w-full">
  <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
    <div className="max-w-[1920px] mx-auto">
      
      <div className="mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Gallery
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our best photography works
        </p>
      </div>

      {/* Clean Grid Layout with varied rectangular sizes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
        
        {/* Row 1 */}
        <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1513262834354-6b2bca9b5b8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Elegant Wedding"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl lg:text-3xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Elegant Wedding
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://plus.unsplash.com/premium_photo-1713296255442-e9338f42aad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZHVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Graduation Day"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Graduation Day
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop"
            alt="Product Showcase"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Product Showcase
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
            alt="Corporate Event"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Corporate Event
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww"
            alt="Nature Photography"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Nature Photography
            </h3>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-2 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-72">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fashion Photography"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl lg:text-2xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Fashion Photography
            </h3>
          </div>
        </div>

        <div className="col-span-2 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-72">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=600&fit=crop"
            alt="Romantic Wedding"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-xl lg:text-2xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Romantic Wedding
            </h3>
          </div>
        </div>

        {/* Row 3 */}
        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://images.unsplash.com/photo-1765871902179-04336fa1b0ef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pre-Wedding"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Pre-Wedding
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1638&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product Photography"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Product Photography
            </h3>
          </div>
        </div>

        <div className="col-span-2 row-span-2 group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1633734973050-d6499a977c17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Graduation Moment"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-2xl lg:text-3xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Graduation Moment
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Studio Product"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Studio Product
            </h3>
          </div>
        </div>

        <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer h-56 lg:h-64">
          <img
            src="https://plus.unsplash.com/premium_photo-1663089174939-5870e2e8d62e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
            alt="Event Photography"
            className="w-full h-full object-cover transition-all duration-500 
                       group-hover:scale-110 group-hover:blur-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 
                          group-hover:opacity-100 transition duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-lg lg:text-xl font-semibold tracking-wide
                           opacity-0 translate-y-4
                           group-hover:opacity-100 group-hover:translate-y-0
                           transition-all duration-500">
              Event Photography
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials / Clients */}
      <section className="py-20 bg-white w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Our <span className="text-teal-600">Clients Say</span>
              </h2>
              <p className="text-gray-600 max-w-3xl text-lg">
                Discover what our satisfied clients have to say about their experience with us. We take pride in providing 
                exceptional service and creating lasting relationships.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rina Susanti",
                  role: "Bride",
                  text: "Hasil foto pernikahan kami luar biasa! Tim LensaKit sangat profesional dan membuat kami merasa nyaman sepanjang sesi foto. Highly recommended!",
                  image: "https://i.pravatar.cc/150?img=1"
                },
                {
                  name: "Budi Santoso",
                  role: "Business Owner",
                  text: "Foto produk yang dihasilkan sangat berkualitas dan membantu meningkatkan penjualan online kami. Pelayanan cepat dan hasil memuaskan!",
                  image: "https://i.pravatar.cc/150?img=3"
                },
                {
                  name: "Siti Nurhaliza",
                  role: "Graduate",
                  text: "Foto wisuda saya jadi sangat berkesan! Tim sangat kreatif dalam mengambil angle dan hasilnya melebihi ekspektasi. Terima kasih LensaKit!",
                  image: "https://i.pravatar.cc/150?img=5"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex mt-4 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artikel / Event */}
      <section id='article' className="py-20 bg-gray-50 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest Newss</h2>
              <p className="text-gray-600 text-lg">Stay updated with our latest photography news</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
                  category: "Tips",
                  title: "10 Tips Foto Pre-Wedding yang Memukau",
                  date: "January 25, 2026",
                  excerpt: "Pelajari tips dan trik untuk mendapatkan foto pre-wedding yang romantis dan berkesan...",
                },
                {
                  image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  category: "Event",
                  title: "Open Booking Paket Wedding 2026",
                  date: "February 5, 2026",
                  excerpt: "Dapatkan promo spesial untuk paket fotografi pernikahan tahun 2026..."
                },
                {
                  image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                  category: "Guide",
                  title: "Panduan Fotografi Produk untuk UMKM",
                  date: "January 20, 2026",
                  excerpt: "Tips praktis memotret produk agar terlihat menarik dan profesional..."
                }
              ]
              .map((article, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition group">
                  <div className="relative overflow-hidden h-48 lg:h-56">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{article.date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <button className="text-teal-600 font-semibold hover:text-teal-700 transition">
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us - WhatsApp Booking */}
<section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 w-full">
  <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
    <div className="max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Contact <span className="text-teal-600">Us</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Isi formulir di bawah ini dan kami akan menghubungkan Anda langsung ke WhatsApp untuk melanjutkan pemesanan
        </p>
      </div>

      {/* Booking Form Card */}
      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
        
        <div className="flex items-center justify-center mb-8">
          <div className="bg-teal-100 p-4 rounded-full">
            <Phone size={40} className="text-teal-600" />
          </div>
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 text-center">
          Formulir Pemesanan Layanan
        </h3>
        <p className="text-gray-600 mb-8 text-center">
          Langsung terhubung ke WhatsApp setelah submit
        </p>

        <form className="space-y-6" onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          
          const name = formData.get('name');
          const phone = formData.get('phone');
          const email = formData.get('email');
          const service = formData.get('service');
          const date = formData.get('date');
          const location = formData.get('location');
          const message = formData.get('message');
          
          const whatsappMessage = `Halo LensaKit, saya ingin memesan layanan fotografi:

📝 *INFORMASI PEMESANAN*

*Nama:* ${name}
*No. HP:* ${phone}
*Email:* ${email}

📸 *DETAIL LAYANAN*

*Jenis Layanan:* ${service}
*Tanggal Acara:* ${date}
*Lokasi:* ${location}

💬 *Pesan Tambahan:*
${message || 'Tidak ada'}

Mohon informasi lebih lanjut mengenai paket dan harga. Terima kasih!`;
          
          const encodedMessage = encodeURIComponent(whatsappMessage);
          const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`;
          
          window.open(whatsappURL, '_blank');
        }}>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nama */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              />
            </div>

            {/* No HP */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                No. WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="08123456789"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="johndoe@email.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Jenis Layanan */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                Jenis Layanan <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition bg-white"
              >
                <option value="">Pilih Layanan</option>
                <option value="Wedding Photography">Wedding Photography</option>
                <option value="Pre-Wedding">Pre-Wedding</option>
                <option value="Graduation">Graduation</option>
                <option value="Product Photography">Product Photography</option>
                <option value="Event Photography">Event Photography</option>
                <option value="Portrait Session">Portrait Session</option>
                <option value="Corporate Photography">Corporate Photography</option>
                <option value="Family Photography">Family Photography</option>
                <option value="Birthday Party">Birthday Party</option>
                <option value="Other">Lainnya</option>
              </select>
            </div>

            {/* Tanggal */}
            <div>
              <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                Tanggal Acara <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
              />
            </div>
          </div>

          {/* Lokasi */}
          <div>
            <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
              Lokasi Acara <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="Contoh: Jakarta Selatan, Tangerang, Bogor"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
            />
          </div>

          {/* Pesan */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Pesan Tambahan (Opsional)
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Ceritakan lebih detail tentang kebutuhan fotografi Anda, jumlah tamu, tema acara, dll..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Info Box */}
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 flex items-start space-x-3">
            <div className="flex-shrink-0">
              <svg className="w-6 h-6 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm text-teal-800">
                Setelah klik tombol di bawah, Anda akan diarahkan ke WhatsApp dengan pesan yang sudah terisi otomatis. Tinggal klik kirim!
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-600 to-teal-400 text-white py-4 rounded-xl font-bold text-lg hover:from-teal-600 hover:to-teal-700 transition shadow-lg flex items-center justify-center space-x-3 group"
          >
            <Phone size={24} className="group-hover:rotate-12 transition-transform" />
            <span>Kirim via WhatsApp</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-sm text-gray-500 text-center">
            Dengan mengirim formulir ini, Anda setuju dengan kebijakan privasi kami
          </p>
        </form>
      </div>

      {/* Quick Contact Info */}
      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">Atau hubungi kami langsung:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/6289505837367"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition"
          >
            <Phone size={20} />
            <span>+62 895-0583-7367</span>
          </a>
          
          <a
            href="mailto:info@lensakit.com"
            className="inline-flex items-center space-x-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            <Mail size={20} />
            <span>info@lensakit.com</span>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">LensaKit</h3>
                <p className="text-gray-400 text-sm">
                  Your trusted partner in capturing precious moments. We turn your special occasions into timeless memories.
                </p>
              </div>

              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#home" className="hover:text-white transition">Home</a></li>
                  <li><a href="#services" className="hover:text-white transition">Services</a></li>
                  <li><a href="#properties" className="hover:text-white transition">Portfolio</a></li>
                  <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Contact Us</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    +62 812-3456-7890
                  </li>
                  <li className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    info@lensakit.com
                  </li>
                  <li className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    Depok, West Java, Indonesia
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2026 LensaKit. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}