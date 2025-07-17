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
} from "lucide-react";

export default function Index() {
  const services = [
    {
      icon: Scissors,
      name: "Hair Styling",
      description:
        "Professional cuts, styling, and treatments for all hair types",
      price: "Starting at $45",
      popular: true,
    },
    {
      icon: Sparkles,
      name: "Hair Color",
      description: "Full color, highlights, balayage, and color correction",
      price: "Starting at $85",
      popular: true,
    },
    {
      icon: Palette,
      name: "Manicure & Pedicure",
      description: "Classic and gel manicures, luxury pedicures",
      price: "Starting at $35",
      popular: false,
    },
    {
      icon: Sparkles,
      name: "Hair Extensions",
      description: "Professional extension application and styling",
      price: "Starting at $150",
      popular: false,
    },
    {
      icon: Scissors,
      name: "Keratin Treatments",
      description: "Smoothing and strengthening treatments",
      price: "Starting at $120",
      popular: false,
    },
    {
      icon: Palette,
      name: "Facial Treatments",
      description: "Rejuvenating and relaxing facial services",
      price: "Starting at $75",
      popular: false,
    },
  ];

  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing service! My hair has never looked better. The stylists are true artists.",
      service: "Hair Color & Cut",
    },
    {
      name: "Maria L.",
      rating: 5,
      text: "Best salon in Brooklyn! Professional, clean, and the results are always perfect.",
      service: "Manicure",
    },
    {
      name: "Jessica R.",
      rating: 5,
      text: "I've been coming here for years. Consistent quality and great atmosphere.",
      service: "Hair Styling",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-salon-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-salon-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-salon-600 to-salon-500 p-2 rounded-lg">
                <Scissors className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-salon-800">Hairports</h1>
                <p className="text-sm text-salon-600">Salon & Beauty</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-salon-700">
                <Phone className="h-4 w-4" />
                <span className="font-medium">(347) 533-8899</span>
              </div>
              <div className="flex items-center space-x-2 text-salon-700">
                <Clock className="h-4 w-4" />
                <span>Open Today 9AM-7PM</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-salon-600/10 to-gold-400/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-100 text-gold-800 border-gold-300">
              ⭐ #1 Rated Salon in Brooklyn
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-salon-800 mb-6 leading-tight">
              Transform Your Look at
              <span className="bg-gradient-to-r from-salon-600 to-salon-500 bg-clip-text text-transparent">
                {" "}
                Hairports
              </span>
            </h2>
            <p className="text-xl text-salon-600 mb-8 max-w-2xl mx-auto">
              Experience premium hair and beauty services in the heart of
              Brooklyn. Our expert stylists bring your vision to life with
              precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-salon-600 to-salon-500 hover:from-salon-700 hover:to-salon-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/Sx8dfArqgk8L7Mt77",
                    "_blank",
                  )
                }
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-salon-300 text-salon-700 hover:bg-salon-50 px-8 py-6 text-lg font-semibold rounded-xl"
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/93Px12ENrjQN5oKU6",
                    "_blank",
                  )
                }
              >
                <MapPin className="mr-2 h-5 w-5" />
                View Location
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-salon-800 mb-4">
              Our Premium Services
            </h3>
            <p className="text-xl text-salon-600 max-w-2xl mx-auto">
              From cutting-edge hair styling to luxurious spa treatments, we
              offer everything you need to look and feel your best.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-salon-100 hover:border-salon-300"
              >
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-gold-500 text-white">
                    Popular
                  </Badge>
                )}
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-salon-100 to-gold-100 p-3 rounded-lg w-fit mb-4">
                    <service.icon className="h-6 w-6 text-salon-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-salon-800 mb-2">
                    {service.name}
                  </h4>
                  <p className="text-salon-600 mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-salon-700">
                      {service.price}
                    </span>
                    <ChevronRight className="h-5 w-5 text-salon-400 group-hover:text-salon-600 transition-colors" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-to-r from-salon-50 to-gold-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-salon-800 mb-4">
              What Our Clients Say
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-gold-400 text-gold-400" />
              ))}
              <span className="text-salon-600 ml-2 text-lg font-semibold">
                4.9/5 from 200+ reviews
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="bg-white border-salon-100 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold-400 text-gold-400"
                      />
                    ))}
                  </div>
                  <p className="text-salon-700 mb-4 italic">"{review.text}"</p>
                  <div>
                    <p className="font-semibold text-salon-800">
                      {review.name}
                    </p>
                    <p className="text-sm text-salon-600">{review.service}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-salon-800 mb-6">
                Visit Our Brooklyn Location
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-salon-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-salon-800 mb-1">
                      Address
                    </h4>
                    <p className="text-salon-600">
                      1683 E 15th St, Brooklyn, NY 11229
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-salon-600 hover:text-salon-800"
                      onClick={() =>
                        window.open(
                          "https://maps.app.goo.gl/93Px12ENrjQN5oKU6",
                          "_blank",
                        )
                      }
                    >
                      Get Directions →
                    </Button>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-salon-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-salon-800 mb-1">Phone</h4>
                    <p className="text-salon-600">(347) 533-8899</p>
                    <p className="text-sm text-salon-500">
                      Call for appointments and consultations
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-salon-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-salon-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-salon-800 mb-1">Hours</h4>
                    <div className="text-salon-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="overflow-hidden border-salon-200">
                <div className="bg-gradient-to-r from-salon-600 to-salon-500 p-8 text-white text-center">
                  <h4 className="text-2xl font-bold mb-4">
                    Ready to Transform?
                  </h4>
                  <p className="text-salon-100 mb-6">
                    Book your appointment today and experience the Hairports
                    difference.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-salon-600 hover:bg-salon-50 font-semibold px-8 py-3 rounded-xl"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/Sx8dfArqgk8L7Mt77",
                        "_blank",
                      )
                    }
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                </div>
                <div className="p-6 bg-salon-50">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-gold-400 text-gold-400"
                        />
                      ))}
                    </div>
                    <p className="text-salon-600 text-sm">
                      Trusted by 500+ satisfied clients
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-salon-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-r from-salon-500 to-salon-400 p-2 rounded-lg">
                  <Scissors className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">Hairports</h5>
                  <p className="text-salon-300 text-sm">Salon & Beauty</p>
                </div>
              </div>
              <p className="text-salon-300">
                Brooklyn's premier destination for professional hair and beauty
                services.
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Contact Info</h6>
              <div className="space-y-2 text-salon-300">
                <p>1683 E 15th St, Brooklyn, NY 11229</p>
                <p>(347) 533-8899</p>
                <p>Monday - Sunday: 9AM - 7PM</p>
              </div>
            </div>
            <div>
              <h6 className="font-semibold mb-4">Quick Links</h6>
              <div className="space-y-2 text-salon-300">
                <Button
                  variant="link"
                  className="p-0 h-auto text-salon-300 hover:text-white justify-start"
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
                  className="p-0 h-auto text-salon-300 hover:text-white justify-start"
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
                  className="p-0 h-auto text-salon-300 hover:text-white justify-start"
                  onClick={() => window.open("tel:+13475338899")}
                >
                  Call Us
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-salon-700 mt-8 pt-8 text-center">
            <p className="text-salon-400">
              © 2024 Hairports Salon. All rights reserved. | Professional
              beauty services in Brooklyn, NY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
