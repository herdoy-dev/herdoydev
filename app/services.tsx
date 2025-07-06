import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Services() {
  return (
    <section id="services" className="w-full bg-gray-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-6">
          Our Services
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          We deliver top-notch web solutions tailored to your business needs
          using cutting-edge technologies and modern UI/UX practices.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Custom Website Development",
              description:
                "Fully responsive and SEO-optimized websites designed for performance and scalability.",
            },
            {
              title: "E-commerce (Shopify, WooCommerce)",
              description:
                "Launch your online store with secure payment, product management, and seamless checkout.",
            },
            {
              title: "Web Apps (React, Next.js, Node.js)",
              description:
                "Interactive and high-performance web applications using the modern JavaScript ecosystem.",
            },
            {
              title: "CMS (WordPress, Webflow)",
              description:
                "Easily manage your website content with flexible and powerful CMS platforms.",
            },
            {
              title: "SEO & Performance Optimization",
              description:
                "Improve your search visibility, load time, and conversion rate with technical and on-page SEO.",
            },
          ].map((service) => (
            <Card
              key={service.title}
              className="hover:shadow-xl transition-shadow"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
