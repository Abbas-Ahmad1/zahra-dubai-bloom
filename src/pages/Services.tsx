import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, TreePine, Sprout, Droplets, Scissors, Hammer } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import serviceTrimming from "@/assets/service-trimming.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";

const Services = () => {
  const services = [
    {
      id: "villa-landscaping",
      icon: Leaf,
      title: "Villa Landscaping",
      description: "Transform your villa's outdoor space with our comprehensive landscaping services. We handle everything from initial design to final installation, including hardscaping, softscaping, and ambient lighting that creates a stunning nighttime atmosphere.",
      image: serviceLandscaping,
      features: ["Complete design consultation", "Hardscaping & softscaping", "Outdoor lighting design", "Water feature installation"],
    },
    {
      id: "garden-design",
      icon: TreePine,
      title: "Garden Design",
      description: "Our custom garden design services bring your vision to life. We create unique gardens tailored to your style and Dubai's environment, from concept sketches to the final flourishing landscape that reflects your personality.",
      image: serviceGarden,
      features: ["Custom design concepts", "Plant selection for Dubai climate", "Layout planning", "Seasonal planning"],
    },
    {
      id: "lawn-care",
      icon: Sprout,
      title: "Lawn Care & Maintenance",
      description: "Keep your lawn pristine year-round with our professional maintenance services. We provide regular mowing, fertilization, pest control, and seasonal care to ensure your grass stays healthy, green, and beautiful in Dubai's challenging climate.",
      image: serviceLawn,
      features: ["Regular lawn mowing", "Fertilization programs", "Pest & weed control", "Seasonal lawn treatments"],
    },
    {
      id: "irrigation",
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Our efficient irrigation systems are designed specifically for Dubai's climate. We install water-saving automatic systems that ensure your plants receive optimal hydration while conserving this precious resource.",
      image: serviceIrrigation,
      features: ["Smart irrigation design", "Automatic sprinkler systems", "Drip irrigation installation", "Water efficiency optimization"],
    },
    {
      id: "trimming",
      icon: Scissors,
      title: "Plant Trimming & Pruning",
      description: "Expert care for your palms, trees, and shrubs ensures they remain healthy and beautiful. Our skilled team provides precision trimming and pruning services that promote growth, prevent disease, and maintain aesthetic appeal.",
      image: serviceTrimming,
      features: ["Palm tree trimming", "Shrub shaping", "Tree pruning", "Disease prevention"],
    },
    {
      id: "construction",
      icon: Hammer,
      title: "Outdoor Villa Construction",
      description: "Enhance your outdoor living with our premium construction services. From elegant patios and modern decks to custom pergolas, fencing, water features, and outdoor kitchens, we create functional spaces for entertaining and relaxation.",
      image: serviceConstruction,
      features: ["Patio & deck construction", "Pergola installation", "Custom fencing", "Outdoor kitchens & bars"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our Premium Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive landscaping and outdoor construction solutions designed for Dubai's luxury villas
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-accent">
                    <Link to={`/services/${service.id}`}>Learn More →</Link>
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <Card className="overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Contact us today for a free consultation and let our experts transform your outdoor space
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-secondary">
            <Link to="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
