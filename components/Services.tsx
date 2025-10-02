import { Brain, Code, ShoppingCart, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ElectricBorder from "./ElectricBorder";

function Services() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Website Development",
      description:
        "Modern, responsive, and user-friendly websites tailored to your brand.",
      features: ["Responsive Design", "Brand Alignment", "User-Focused"],
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description:
        "Online stores that are secure, easy to manage, and built to increase sales.",
      features: ["Secure Payments", "Easy Management", "Sales Optimization"],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Automations & Assistants",
      description:
        "Smart tools that save time, handle repetitive tasks, and keep your business running smoothly.",
      features: ["Time Saving", "Task Automation", "24/7 Operation"],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Website Optimization",
      description:
        "Speed, SEO, and performance improvements to boost visibility and conversions.",
      features: ["SEO Optimization", "Speed Boost", "Conversion Focus"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground">
            I offer a complete range of digital solutions to help your business
            grow online
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <ElectricBorder
            color="#1aa64b"
            speed={1}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16 }}
            className="p-6"
          >
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with
              cutting-edge technology and AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Start Your Project</Button>
              <Button variant="outline" size="lg">
                View Case Studies
              </Button>
            </div>
          </ElectricBorder>
        </div>
      </div>
    </section>
  );
}

export default Services;
