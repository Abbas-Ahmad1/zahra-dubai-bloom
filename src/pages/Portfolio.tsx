import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import serviceTrimming from "@/assets/service-trimming.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";
import heroImage from "@/assets/hero-landscaping.jpg";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Landscaping - Arabian Ranches",
      category: "Villa Landscaping",
      image: serviceLandscaping,
      description: "Complete landscape transformation with modern hardscaping and lush greenery",
    },
    {
      id: 2,
      title: "Contemporary Garden Design - Emirates Hills",
      category: "Garden Design",
      image: serviceGarden,
      description: "Custom garden featuring flowering plants and geometric patterns",
    },
    {
      id: 3,
      title: "Premium Lawn Installation - Dubai Hills",
      category: "Lawn Care",
      image: serviceLawn,
      description: "Pristine lawn installation with automatic irrigation system",
    },
    {
      id: 4,
      title: "Smart Irrigation System - Palm Jumeirah",
      category: "Irrigation",
      image: serviceIrrigation,
      description: "Water-efficient irrigation with smart controllers and zoning",
    },
    {
      id: 5,
      title: "Villa Landscape Maintenance - Jumeirah",
      category: "Maintenance",
      image: serviceTrimming,
      description: "Ongoing care including palm trimming and plant health management",
    },
    {
      id: 6,
      title: "Outdoor Entertainment Area - The Springs",
      category: "Construction",
      image: serviceConstruction,
      description: "Luxury pergola with outdoor kitchen and seating area",
    },
    {
      id: 7,
      title: "Estate Landscaping Project - Al Barari",
      category: "Villa Landscaping",
      image: heroImage,
      description: "Comprehensive landscaping with pool area and ambient lighting",
    },
    {
      id: 8,
      title: "Tropical Garden Paradise - Dubai Marina",
      category: "Garden Design",
      image: serviceGarden,
      description: "Lush tropical garden design with water features",
    },
  ];

  const categories = ["All", "Villa Landscaping", "Garden Design", "Lawn Care", "Irrigation", "Maintenance", "Construction"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our collection of completed projects showcasing our expertise in landscaping and outdoor construction
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-primary-foreground">
                      <span className="text-sm font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Let us transform your outdoor space into something extraordinary. Contact us for a free consultation.
          </p>
          <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-secondary">
            <a href="/contact">Get Started Today</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
