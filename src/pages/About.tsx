import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Users, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "We never compromise on the quality of materials, workmanship, or customer service.",
    },
    {
      icon: Leaf,
      title: "Creativity",
      description: "Every project is unique, and we bring innovative design solutions to each one.",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your happiness is our success. We work closely with you every step of the way.",
    },
    {
      icon: Target,
      title: "Environmental Responsibility",
      description: "We prioritize sustainable practices and water-efficient solutions for Dubai's climate.",
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
              About Al Zahra Landscaping
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bringing beauty, quality, and sustainability to Dubai's outdoor spaces since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Al Zahra Landscaping was founded with a simple yet powerful vision: to transform Dubai's outdoor spaces 
                  into beautiful, functional environments that enhance the luxury lifestyle of the region. Led by our 
                  dedicated CEO, Inayat Ullah, we have grown from a small team of passionate landscapers into one of 
                  Dubai's most trusted names in villa landscaping and outdoor construction.
                </p>
                <p>
                  Our journey began with a deep understanding of Dubai's unique climate challenges and opportunities. 
                  We recognized that creating stunning outdoor spaces in this environment requires specialized knowledge, 
                  premium materials, and an unwavering commitment to excellence. This understanding forms the foundation 
                  of everything we do.
                </p>
                <p>
                  Today, we continue to serve villa owners, real estate developers, and property management companies 
                  throughout Dubai, bringing our expertise in landscaping, garden design, lawn maintenance, irrigation, 
                  and outdoor construction to every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-10 w-10 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to create sustainable, beautiful, and functional outdoor environments that complement 
                  the luxury of Dubai living. We strive to exceed our clients' expectations through exceptional 
                  craftsmanship, innovative design, and reliable service.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Eye className="h-10 w-10 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be recognized as Dubai's premier landscaping and outdoor construction company, known for our 
                  commitment to quality, sustainability, and customer satisfaction. We envision outdoor spaces that 
                  not only enhance property value but also improve quality of life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Expert Team</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Al Zahra Landscaping, our greatest asset is our team of skilled professionals. Led by CEO Inayat Ullah, 
              our team includes certified landscapers, experienced garden designers, skilled construction workers, and 
              dedicated maintenance specialists. Each member brings years of experience and a passion for creating 
              exceptional outdoor spaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              We invest in ongoing training and stay updated with the latest landscaping techniques, sustainable practices, 
              and design trends to ensure we deliver the best possible results for our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Al Zahra Landscaping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
