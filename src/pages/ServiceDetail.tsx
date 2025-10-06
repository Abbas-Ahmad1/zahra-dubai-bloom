import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import serviceLandscaping from "@/assets/service-landscaping.jpg";
import serviceGarden from "@/assets/service-garden.jpg";
import serviceLawn from "@/assets/service-lawn.jpg";
import serviceIrrigation from "@/assets/service-irrigation.jpg";
import serviceTrimming from "@/assets/service-trimming.jpg";
import serviceConstruction from "@/assets/service-construction.jpg";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const servicesData: Record<string, any> = {
    "villa-landscaping": {
      title: "Villa Landscaping",
      subtitle: "Complete Landscaping Solutions for Luxury Dubai Villas",
      description: "Transform your villa into a stunning outdoor paradise with our full-service landscaping solutions. At Al Zahra Landscaping, we specialize in creating cohesive, beautiful outdoor environments that complement your villa's architecture and reflect your personal style.",
      image: serviceLandscaping,
      details: [
        "Our villa landscaping service encompasses everything from initial consultation and design to final installation and ongoing maintenance. We work closely with you to understand your vision, lifestyle needs, and budget, then create a comprehensive plan that brings it all together.",
        "We excel in hardscaping elements like pathways, retaining walls, and decorative stonework that add structure and functionality to your outdoor space. Our softscaping expertise includes careful plant selection that thrives in Dubai's climate, creating lush, green environments that require minimal maintenance.",
        "Ambient lighting is a signature element of our villa landscaping projects. We design and install sophisticated lighting systems that highlight your landscape's best features, ensure safety, and create a magical atmosphere for evening entertainment.",
      ],
      benefits: [
        "Comprehensive design and planning service",
        "Expert hardscaping and softscaping installation",
        "Professional outdoor lighting design",
        "Climate-appropriate plant selection",
        "Water feature design and installation",
        "Ongoing maintenance support available",
        "Project management from start to finish",
        "Quality materials and workmanship",
      ],
    },
    "garden-design": {
      title: "Garden Design",
      subtitle: "Custom Garden Designs Tailored to Dubai's Environment",
      description: "Create a garden that's uniquely yours with our custom design services. We blend artistic vision with practical horticultural knowledge to design gardens that are not only beautiful but also sustainable and perfectly suited to Dubai's climate.",
      image: serviceGarden,
      details: [
        "Our garden design process begins with understanding your preferences, lifestyle, and the specific characteristics of your property. We consider factors like sun exposure, soil conditions, existing features, and your intended use of the space to create a design that's both beautiful and functional.",
        "We specialize in a variety of garden styles, from traditional Arabic gardens with their emphasis on water and shade to contemporary minimalist designs and lush tropical retreats. Whatever your vision, we have the expertise to bring it to life.",
        "Our designs always prioritize sustainability and water efficiency, crucial considerations in Dubai's climate. We select drought-tolerant plants, incorporate efficient irrigation, and use mulching and other techniques to create gardens that are environmentally responsible.",
      ],
      benefits: [
        "Personalized design consultation",
        "Multiple concept presentations",
        "Detailed planting plans",
        "3D visualization of proposed design",
        "Plant selection for Dubai climate",
        "Seasonal color planning",
        "Sustainable design practices",
        "Full installation service",
      ],
    },
    "lawn-care": {
      title: "Lawn Care & Maintenance",
      subtitle: "Professional Lawn Care for Pristine Green Spaces",
      description: "Maintain a healthy, vibrant lawn year-round with our comprehensive lawn care services. We understand the challenges of keeping grass green in Dubai's climate and have developed proven techniques to ensure your lawn stays beautiful in all seasons.",
      image: serviceLawn,
      details: [
        "Our lawn care program includes regular mowing at the proper height for your grass type, ensuring healthy growth and a manicured appearance. We use professional-grade equipment and techniques to achieve clean, precise cuts every time.",
        "Fertilization is carefully scheduled based on your lawn's specific needs and the season. We use high-quality fertilizers that promote strong root development, lush growth, and resistance to stress from heat and foot traffic.",
        "Pest and weed control is an essential part of our service. We monitor your lawn regularly for signs of problems and address them promptly with targeted, effective treatments that are safe for your family and pets.",
      ],
      benefits: [
        "Weekly or bi-weekly mowing service",
        "Customized fertilization schedule",
        "Professional pest control",
        "Weed management program",
        "Aeration and dethatching",
        "Overseeding and renovation",
        "Seasonal lawn treatments",
        "Emergency response for lawn problems",
      ],
    },
    "irrigation": {
      title: "Irrigation Systems",
      subtitle: "Water-Efficient Irrigation for Dubai's Climate",
      description: "Ensure your landscape receives optimal hydration with our smart irrigation systems. We design and install water-efficient systems that deliver the right amount of water to each zone of your landscape, saving water while keeping your plants healthy.",
      image: serviceIrrigation,
      details: [
        "Our irrigation design process begins with a thorough analysis of your landscape's water needs. We consider plant types, sun exposure, soil conditions, and slope to create zones that receive precisely the right amount of water.",
        "We specialize in automatic sprinkler systems with programmable controllers that adjust watering schedules based on the season and weather conditions. This ensures your landscape gets the water it needs without waste.",
        "For areas with dense plantings or where water conservation is a priority, we install drip irrigation systems that deliver water directly to plant roots with minimal evaporation. This is particularly effective for flower beds, vegetable gardens, and potted plants.",
      ],
      benefits: [
        "Custom irrigation zone design",
        "Automatic sprinkler installation",
        "Smart controller programming",
        "Drip irrigation for targeted watering",
        "Rain sensor integration",
        "Water usage monitoring",
        "System maintenance and repairs",
        "Seasonal adjustments",
      ],
    },
    "trimming": {
      title: "Plant Trimming & Pruning",
      subtitle: "Expert Care for Healthy, Beautiful Plants",
      description: "Keep your plants healthy and attractive with our professional trimming and pruning services. Our skilled team understands the unique requirements of each plant species and uses proper techniques to promote growth, prevent disease, and maintain aesthetic appeal.",
      image: serviceTrimming,
      details: [
        "Palm tree maintenance is one of our specialties. We properly remove dead fronds, shape the canopy, and clean the trunk to maintain the palm's health and appearance. Regular trimming prevents hazards from falling fronds and keeps palms looking their best.",
        "Shrub and hedge trimming is both an art and a science. We shape plants to enhance their natural form while maintaining the desired size and density. Regular trimming encourages bushier growth and more abundant flowering.",
        "Tree pruning requires knowledge of tree biology and proper techniques. We remove dead or diseased branches, thin crowns for better air circulation and light penetration, and shape trees to enhance their structure and appearance.",
      ],
      benefits: [
        "Expert palm tree trimming",
        "Precision shrub shaping",
        "Professional tree pruning",
        "Disease and pest identification",
        "Proper equipment and safety protocols",
        "Debris removal and cleanup",
        "Seasonal trimming schedules",
        "Emergency storm damage cleanup",
      ],
    },
    "construction": {
      title: "Outdoor Villa Construction",
      subtitle: "Premium Outdoor Structures for Enhanced Living",
      description: "Expand your living space outdoors with our premium construction services. We create beautiful, functional outdoor structures that enhance your property's value and provide perfect spaces for relaxation and entertainment.",
      image: serviceConstruction,
      details: [
        "Our patio and deck construction services transform unused outdoor areas into beautiful extensions of your home. We work with a variety of materials including natural stone, pavers, composite decking, and exotic hardwoods to create surfaces that are both attractive and durable.",
        "Pergolas and shade structures not only provide relief from the sun but also add architectural interest to your landscape. We design and build custom pergolas in styles ranging from traditional to contemporary, incorporating features like lighting, fans, and climbing plants.",
        "Outdoor kitchens and entertainment areas are increasingly popular in Dubai's villa culture. We create complete outdoor cooking and dining spaces with built-in grills, countertops, storage, refrigeration, and all the amenities you need for outdoor entertaining.",
      ],
      benefits: [
        "Custom patio design and construction",
        "Deck building with premium materials",
        "Pergola and shade structure installation",
        "Outdoor kitchen and bar areas",
        "Fire pit and fireplace construction",
        "Water feature design and installation",
        "Custom fencing and gates",
        "Complete project management",
      ],
    },
  };

  const service = servicesData[serviceId || ""] || servicesData["villa-landscaping"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <Link
            to="/services"
            className="inline-flex items-center text-primary hover:text-accent mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground">{service.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Service Image */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden shadow-xl">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[500px] object-cover"
            />
          </Card>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-foreground mb-8 leading-relaxed font-medium">
              {service.description}
            </p>
            <div className="space-y-6">
              {service.details.map((detail: string, index: number) => (
                <p key={index} className="text-lg text-muted-foreground leading-relaxed">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              What's Included
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span className="text-lg text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in {service.title}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
            Contact us today for a free consultation and detailed quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-secondary">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+971555604136">Call: +971 55 560 4136</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
