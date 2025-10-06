import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, Scissors, Hammer, TreePine, Sprout, CheckCircle2, Award, Users, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-landscaping.jpg";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import serviceTrimming from "@/assets/service-trimming.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";

const Home = () => {
  const services = [
    {
      icon: Leaf,
      title: "Villa Landscaping",
      description: "Complete landscaping solutions tailored for luxury Dubai villas",
      image: serviceLandscaping,
      link: "/services/villa-landscaping",
    },
    {
      icon: TreePine,
      title: "Garden Design",
      description: "Custom garden designs that complement Dubai's unique aesthetic",
      image: serviceGarden,
      link: "/services/garden-design",
    },
    {
      icon: Sprout,
      title: "Lawn Care & Maintenance",
      description: "Professional lawn care to keep your garden pristine year-round",
      image: serviceLawn,
      link: "/services/lawn-care",
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Water-efficient irrigation systems designed for Dubai's climate",
      image: serviceIrrigation,
      link: "/services/irrigation",
    },
    {
      icon: Scissors,
      title: "Plant Trimming",
      description: "Expert trimming and pruning for healthy, beautiful plants",
      image: serviceTrimming,
      link: "/services/trimming",
    },
    {
      icon: Hammer,
      title: "Outdoor Construction",
      description: "Premium outdoor structures from patios to pergolas",
      image: serviceConstruction,
      link: "/services/construction",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Using only the finest materials and plants for lasting beauty",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with years of Dubai landscaping experience",
    },
    {
      icon: CheckCircle2,
      title: "Reliable Service",
      description: "Timely project completion with attention to every detail",
    },
    {
      icon: Clock,
      title: "Dubai Climate Experts",
      description: "Custom designs that thrive in Dubai's unique environment",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Transforming Dubai's Outdoor Spaces
            <br />
            into Luxurious Havens
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Expert Villa Landscaping, Garden Design, and Construction in Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-secondary text-lg px-8">
              <Link to="/services">View Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8">
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Welcome to Al Zahra Landscaping
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Al Zahra Landscaping, we are committed to enhancing Dubai's unique lifestyle through exceptional outdoor spaces. 
            Our team of skilled professionals brings years of experience in creating beautiful, sustainable landscapes that complement 
            the luxury and elegance of Dubai's villas. From concept to completion, we deliver quality that exceeds expectations.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Premium Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive landscaping solutions designed for Dubai's unique environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <service.icon className="absolute bottom-4 left-4 h-8 w-8 text-primary-foreground" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link to={service.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Al Zahra Landscaping?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, quality, and dedication to create outdoor spaces that inspire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Revitalize Your Villa's Outdoor Space?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Contact us today for a free consultation and let us transform your outdoor dreams into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+971555604136">Call Now: +971 55 560 4136</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
