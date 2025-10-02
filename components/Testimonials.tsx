import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Herdoy was an excellent experience. He delivered a modern website for our business that not only looks amazing but also performs flawlessly.",
      author: "Sarah M.",
      position: "Business Owner",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "The AI automations he integrated saved us countless hours of manual work. Truly a game-changer for our team.",
      author: "James R.",
      position: "Startup Founder",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "Reliable, professional, and creative. Herdoy understood exactly what we needed and went above and beyond to deliver.",
      author: "Emily T.",
      position: "Marketing Director",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
        ))}
      </div>
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take my word for it - hear from businesses I've helped
            transform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <CardContent>
                <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                  <Quote className="w-6 h-6 text-primary inline rotate-180" />
                  {testimonial.quote}
                  <Quote className="w-6 h-6 text-primary inline" />
                </blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Support Available
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
