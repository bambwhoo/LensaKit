import { useState } from 'react';
import { Search, MapPin, Home as HomeIcon, Building2, Users, Award, TrendingUp, Shield, ChevronDown, Heart, X, Menu, Mail, Phone, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Home() {
  const [, ] = useState('rent');

  return (
    <div className="w-full min-h-screen bg-white m-0 p-0">
      
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-teal-800 to-teal-600 text-white overflow-hidden w-full">
        <div className="w-h-screen px-6 sm:px-8 lg:px-12 xl:px-16 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-[1920px] mx-auto">
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

      {/* Profil, Pengalaman & Kelebihan */}
      <section className="py-20 bg-teal-800 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              Profile
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              
              {/* Profil */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">
                  Company profile
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li><strong>Name:</strong> Lensakita</li>
                  <li><strong>Since:</strong> 2022</li>
                  <li><strong>Sector:</strong> Photography & Videography</li>
                </ul>
              </div>

              {/* Pengalaman */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">
                  Experience
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Over <strong>150 photoshootsn</strong></li>
                  <li>Wedding & Pre-wedding</li>
                  <li>Graduation, Product, Event</li>
                  <li>Individual & Corporate Clients</li>
                </ul>
              </div>

              {/* Kelebihan */}
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-4 text-teal-700">
                  Our Advantages
                </h3>
                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                  <li>Professional photographers</li>
                  <li>High-quality photo editing</li>
                  <li>Flexible photo concepts</li>
                  <li>Affordable package prices</li>
                  <li>Online booking system</li>
                </ul>
              </div>

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
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&h=1200&fit=crop"
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
            src="https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&h=600&fit=crop"
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

      {/* View More Button */}
      <div className="text-center mt-12">
        <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition">
          View All Gallery
        </button>
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
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Latest News & Tips</h2>
              <p className="text-gray-600 text-lg">Stay updated with our latest photography tips and news</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
                  category: "Tips",
                  title: "10 Tips Foto Pre-Wedding yang Memukau",
                  date: "January 25, 2026",
                  excerpt: "Pelajari tips dan trik untuk mendapatkan foto pre-wedding yang romantis dan berkesan..."
                },
                {
                  image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
                  category: "Event",
                  title: "Open Booking Paket Wedding 2026",
                  date: "February 5, 2026",
                  excerpt: "Dapatkan promo spesial untuk paket fotografi pernikahan tahun 2026..."
                },
                {
                  image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
                  category: "Guide",
                  title: "Panduan Fotografi Produk untuk UMKM",
                  date: "January 20, 2026",
                  excerpt: "Tips praktis memotret produk agar terlihat menarik dan profesional..."
                }
              ].map((article, index) => (
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

      {/* Newsletter CTA */}
      <section className="bg-gray-900 text-white py-16 w-full">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-[1920px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">Ready to Capture Your Moments?</h2>
                <p className="text-gray-300 text-lg">Get started with us today and create lasting memories</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email..." 
                  className="px-6 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-teal-500 w-full sm:w-80"
                />
                <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition w-full sm:w-auto whitespace-nowrap">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12 w-full">
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