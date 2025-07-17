import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Scissors,
  Sparkles,
  Palette,
  ChevronRight,
  Calendar,
  Play,
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Scissors,
      name: "Precision Hair Cuts",
      description:
        "Expert styling for every occasion, tailored to your unique features",
      price: "Starting at $65",
      image:
        "https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg",
      popular: true,
    },
    {
      icon: Sparkles,
      name: "Hair Color & Highlights",
      description: "Luxury color treatments with premium European products",
      price: "Starting at $125",
      image:
        "https://images.pexels.com/photos/11621973/pexels-photo-11621973.jpeg",
      popular: true,
    },
    {
      icon: Palette,
      name: "Luxury Manicure",
      description: "Premium nail care with the latest techniques and styles",
      price: "Starting at $45",
      image:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
      popular: false,
    },
    {
      icon: Sparkles,
      name: "Hair Extensions",
      description: "Natural-looking length and volume with premium extensions",
      price: "Starting at $200",
      image:
        "https://images.pexels.com/photos/33034340/pexels-photo-33034340.jpeg",
      popular: false,
    },
    {
      icon: Scissors,
      name: "Keratin Treatments",
      description: "Smoothing treatments for frizz-free, manageable hair",
      price: "Starting at $150",
      image:
        "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg",
      popular: false,
    },
    {
      icon: Palette,
      name: "Bridal Services",
      description: "Complete bridal packages for your special day",
      price: "Starting at $300",
      image:
        "https://images.pexels.com/photos/6899542/pexels-photo-6899542.jpeg",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Martinez",
      rating: 5,
      text: "Absolutely phenomenal service. The attention to detail is unmatched. I've never felt more confident with my hair.",
      service: "Hair Color & Cut",
      image:
        "https://images.pexels.com/photos/11621973/pexels-photo-11621973.jpeg",
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "The most professional salon in Brooklyn. Every visit is an experience in luxury and excellence.",
      service: "Luxury Manicure",
      image:
        "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg",
    },
    {
      name: "Jessica Chen",
      rating: 5,
      text: "Five years of perfect service. The team understands exactly what I want every single time.",
      service: "Precision Cut",
      image:
        "https://images.pexels.com/photos/7142792/pexels-photo-7142792.jpeg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-black/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-black p-2.5 rounded-full">
                <Scissors className="h-7 w-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-black">
                  HAIRPORTS
                </h1>
                <p className="text-sm text-gray-600 tracking-wide">
                  BROOKLYN SALON
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-black">
                <Phone className="h-4 w-4" />
                <span className="font-medium tracking-wide">
                  (347) 533-8899
                </span>
              </div>
              <div className="flex items-center space-x-2 text-black">
                <Clock className="h-4 w-4" />
                <span className="tracking-wide">Open Today 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg"
            alt="Professional salon service"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <Badge className="mb-8 bg-white text-black border-white text-base px-4 py-2">
              ★ Brooklyn's Premier Salon Since 2015
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
              WHERE STYLE
              <br />
              <span className="text-gray-300">MEETS ARTISTRY</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
              Experience unparalleled luxury and precision at Brooklyn's most
              exclusive salon. Our master stylists create looks that define
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/Sx8dfArqgk8L7Mt77",
                    "_blank",
                  )
                }
              >
                <Calendar className="mr-3 h-5 w-5" />
                BOOK APPOINTMENT
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold tracking-wide transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/93Px12ENrjQN5oKU6",
                    "_blank",
                  )
                }
              >
                <MapPin className="mr-3 h-5 w-5" />
                VISIT US
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white bg-transparent text-white hover:bg-white hover:text-black px-10 py-6 text-lg font-semibold tracking-wide transition-all duration-300"
                onClick={() => window.open("tel:+13475338899")}
              >
                <Phone className="mr-3 h-5 w-5" />
                CALL US
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronRight className="h-6 w-6 rotate-90" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              SIGNATURE SERVICES
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each service is a masterpiece of technique and artistry, delivered
              by our team of internationally trained professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                  {service.popular && (
                    <Badge className="absolute top-4 left-4 bg-white text-black border-0 text-sm px-3 py-1">
                      MOST POPULAR
                    </Badge>
                  )}
                </div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-6 w-6 text-black mr-3" />
                    <h4 className="text-xl font-bold text-black tracking-wide">
                      {service.name}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-black tracking-wide">
                      {service.price}
                    </span>
                    <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-black transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6899542/pexels-photo-6899542.jpeg"
                alt="Salon interior"
                className="w-full h-96 object-cover grayscale rounded-lg"
              />
              <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full p-6">
                  <Play className="h-8 w-8" />
                </Button>
              </div>
            </div>
            <div className="text-white">
              <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                THE HAIRPORTS
                <br />
                <span className="text-gray-400">EXPERIENCE</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Step into our world-class facility where every detail has been
                meticulously designed for your comfort and our artistry. From
                consultation to completion, every moment is crafted to exceed
                expectations.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">500+</h4>
                  <p className="text-gray-400">Satisfied Clients</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">8+</h4>
                  <p className="text-gray-400">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">15+</h4>
                  <p className="text-gray-400">Master Stylists</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">4.9★</h4>
                  <p className="text-gray-400">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              CLIENT TESTIMONIALS
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-black text-black" />
              ))}
              <span className="text-black ml-4 text-xl font-semibold tracking-wide">
                4.9/5 from 200+ reviews
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover grayscale"
                    />
                    <div>
                      <p className="font-bold text-black tracking-wide">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {testimonial.service}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 tracking-tight">
                VISIT OUR
                <br />
                <span className="text-gray-600">BROOKLYN STUDIO</span>
              </h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-black p-4 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2 text-lg tracking-wide">
                      LOCATION
                    </h4>
                    <p className="text-gray-600 text-lg">
                      1683 E 15th St, Brooklyn, NY 11229
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-black hover:text-gray-600 font-semibold tracking-wide text-base"
                      onClick={() =>
                        window.open(
                          "https://maps.app.goo.gl/93Px12ENrjQN5oKU6",
                          "_blank",
                        )
                      }
                    >
                      GET DIRECTIONS →
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-black p-4 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2 text-lg tracking-wide">
                      CONTACT
                    </h4>
                    <p className="text-gray-600 text-lg">(347) 533-8899</p>
                    <p className="text-sm text-gray-500">
                      Call for appointments and consultations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-black p-4 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2 text-lg tracking-wide">
                      HOURS
                    </h4>
                    <div className="text-gray-600 space-y-1 text-lg">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="bg-black p-12 text-white text-center">
                  <h4 className="text-3xl font-bold mb-6 tracking-tight">
                    BOOK YOUR TRANSFORMATION
                  </h4>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Experience the artistry and luxury that has made Hairports
                    Brooklyn's most sought-after salon.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-100 font-bold px-10 py-4 text-lg tracking-wide transition-all duration-300 transform hover:scale-105"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/Sx8dfArqgk8L7Mt77",
                        "_blank",
                      )
                    }
                  >
                    <Calendar className="mr-3 h-5 w-5" />
                    BOOK APPOINTMENT
                  </Button>
                </div>
                <div className="p-8 bg-gray-50">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-black text-black"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 font-semibold tracking-wide">
                      Trusted by 500+ satisfied clients in Brooklyn
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white p-3 rounded-full">
                  <Scissors className="h-7 w-7 text-black" />
                </div>
                <div>
                  <h5 className="text-2xl font-bold tracking-tight">
                    HAIRPORTS
                  </h5>
                  <p className="text-gray-400 text-sm tracking-wide">
                    BROOKLYN SALON
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Brooklyn's premier destination for luxury hair and beauty
                services. Where artistry meets excellence in every cut, color,
                and style.
              </p>
            </div>
            <div>
              <h6 className="font-bold mb-6 text-lg tracking-wide">CONTACT</h6>
              <div className="space-y-3 text-gray-300">
                <p>1683 E 15th St</p>
                <p>Brooklyn, NY 11229</p>
                <p>(347) 533-8899</p>
              </div>
            </div>
            <div>
              <h6 className="font-bold mb-6 text-lg tracking-wide">
                QUICK LINKS
              </h6>
              <div className="space-y-3">
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white justify-start text-base"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/Sx8dfArqgk8L7Mt77",
                      "_blank",
                    )
                  }
                >
                  Book Appointment
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white justify-start text-base"
                  onClick={() =>
                    window.open(
                      "https://maps.app.goo.gl/93Px12ENrjQN5oKU6",
                      "_blank",
                    )
                  }
                >
                  Directions
                </Button>
                <Button
                  variant="link"
                  className="p-0 h-auto text-gray-300 hover:text-white justify-start text-base"
                  onClick={() => window.open("tel:+13475338899")}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-500 tracking-wide">
              © 2024 HAIRPORTS SALON. ALL RIGHTS RESERVED. | LUXURY BEAUTY
              SERVICES IN BROOKLYN, NY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
