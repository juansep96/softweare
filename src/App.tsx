import React, { useState } from 'react';
import { Code2, Rocket, Users, Zap, ChevronRight, Github, Linkedin, Menu, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Swal from 'sweetalert2';
import 'swiper/css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    phone: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message, phone } = formData;

    if (name && email && message) {
      try {
        const data = {
          name,
          mail: email,
          message,
          phone
        };

        const response = await fetch('./api/mail/enviarCorreo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: JSON.stringify(data) })
        });

        if (response.ok) {
          await Swal.fire({
            title: "Gracias!",
            text: "Su mensaje fue enviado con éxito.",
            icon: "success",
            timer: 2000,
            showConfirmButton: true
          });
          
          setFormData({
            name: '',
            email: '',
            company: '',
            message: '',
            phone: ''
          });
        } else {
          await Swal.fire({
            title: "Error!",
            text: "Su mensaje no ha podido ser enviado.",
            icon: "error",
            timer: 2000,
            showConfirmButton: true
          });
        }
      } catch (error) {
        await Swal.fire({
          title: "Error!",
          text: "Su mensaje no ha podido ser enviado.",
          icon: "error",
          timer: 2000,
          showConfirmButton: true
        });
      }
    } else {
      await Swal.fire({
        title: "Error",
        text: "Debe completar todos los campos.",
        icon: "warning",
        timer: 2000,
        showConfirmButton: true
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const clientLogos = [
    { logo: "https://softweare.com.ar/img/portfolio/metro.png", name: "Fundacion Metropolitana", url: "https://metropolitana.org.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/mitica.png", name: "Mitica Showroom", url: "https://miticashowroom.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/emmeline.png", name: "Emmeline Nails", url: "https://emmeline.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/cepad.png", name: "CEPAD", url: "https://cepad.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/energy.png", name: "Energy Trust", url: "https://energytrust.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/bsg.png", name: "BSG Laboratorios", url: "#" },
    { logo: "https://softweare.com.ar/img/portfolio/delta.png", name: "Delta Capacitaciones", url: "https://deltacapacitaciones.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/mmh.png", name: "Municipalidad de Monte Hermoso", url: "https://montehermoso.gov.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/cm.png", name: "CM Indumentaria", url: "https://cmindumentaria.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/pb.png", name: "Ponte Bella", url: "https://pontebellabahia.com" },
    { logo: "https://softweare.com.ar/img/portfolio/bomberos.png", name: "Bomberos Voluntarios de Monte Hermoso", url: "#" },
    { logo: "https://softweare.com.ar/img/portfolio/opp.png", name: "Observatorio de Politicas Publicas", url: "https://metropolitana.org.ar/observatorio" },
    { logo: "https://softweare.com.ar/img/portfolio/mc.png", name: "Minghetti Crociati Abogados", url: "https://estudiojuridicomc.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/sayhueque.png", name: "Sayhueque", url: "https://sayhuequebb.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/sd.png", name: "Secretaria de Desarrollo Social de Monte Hermoso", url: "https://montehermoso.gov.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/turismo.png", name: "Secretaria de Turismo de Monte Hermoso", url: "https://montehermoso.gov.ar/turismo" },
    { logo: "https://softweare.com.ar/img/portfolio/wpu.png", name: "WePayU", url: "https://wepayu.pe" },
    { logo: "https://softweare.com.ar/img/portfolio/aiesec.png", name: "AIESEC", url: "https://aiesec.pe" },
    { logo: "https://softweare.com.ar/img/portfolio/ph.png", name: "Ponte Hot", url: "https://pontehot.com" },
    { logo: "https://softweare.com.ar/img/portfolio/pupitos.png", name: "Pupitos Baby", url: "https://pupitosbaby.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/ania.png", name: "Ania Kundt", url: "#" },
    { logo: "https://softweare.com.ar/img/portfolio/lo%20que%20quiero.png", name: "Lo Que Quiero", url: "https://loqquiero.com.ar" },
    { logo: "https://softweare.com.ar/img/portfolio/pocaspulgas.png", name: "Pocas Pulgas", url: "https://pocaspulgas.shop" },
    { logo: "https://softweare.com.ar/img/portfolio/todovapers.png", name: "Todo Vapers", url: "https://todovapersbb.com" },
    { logo: "https://softweare.com.ar/img/portfolio/divas.png", name: "Divas Clothes", url: "#" },
    { logo: "https://softweare.com.ar/img/portfolio/brangus.png", name: "Brangus", url: "#" },
    { logo: "https://softweare.com.ar/img/portfolio/margarita.png", name: "Margarita", url: "https://margaritastorear.com" }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <header className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Softweare</span>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-300 hover:text-white transition">Servicios</a>
              <a href="#clients" className="text-gray-300 hover:text-white transition">Clientes</a>
              <a href="#about" className="text-gray-300 hover:text-white transition">Nosotros</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition">Contacto</a>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#services" className="text-gray-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Servicios</a>
                <a href="#clients" className="text-gray-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Clientes</a>
                <a href="#about" className="text-gray-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformamos Ideas en<br />
            <span className="text-blue-500">Software Excepcional</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento de tu negocio
          </p>
          <a href="#contact" className="inline-flex items-center px-6 md:px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
            Comenzar Proyecto
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <Rocket className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Desarrollo Web</h3>
              <p className="text-gray-300">Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <Zap className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Soluciones Cloud</h3>
              <p className="text-gray-300">Implementamos y optimizamos infraestructuras en la nube para máximo rendimiento.</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl">
              <Users className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Consultoría IT</h3>
              <p className="text-gray-300">Asesoramiento experto para optimizar tus procesos tecnológicos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestros Clientes</h2>
          <div className="max-w-5xl mx-auto">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className="py-8"
            >
              {clientLogos.map((client, index) => (
                <SwiperSlide key={index}>
                  <a href={client.url} target="_blank" rel="noopener noreferrer">
                    <div className="relative flex items-center justify-center h-24 bg-white/5 rounded-lg p-4 group">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                      />
                    
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Equipo de trabajo" 
                className="rounded-xl shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-white mb-6">Quiénes Somos</h2>
              <p className="text-gray-300 mb-6">
                Somos un equipo apasionado de desarrolladores y consultores tecnológicos con más de 10 años de experiencia
                creando soluciones digitales innovadoras para empresas de todos los tamaños.
              </p>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                  Más de 100 proyectos exitosos
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                  Equipo altamente especializado
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                  Metodologías ágiles
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-6">¿Listo para comenzar?</h2>
            <p className="text-gray-300 text-center mb-12">
              Contáctanos para discutir tu próximo proyecto y descubrir cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            
            <form onSubmit={handleSubmit} className="bg-slate-800/50 p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                >
                  Enviar Mensaje
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code2 className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">Softweare</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Softweare. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/5492915662430"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      </a>
    </div>
  );
}

export default App;