import ArrowButton from "@/components/arrow-button";
import SectionButton from "@/components/section-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content:
      "herdoydev transformed our online presence. Their team delivered a website that increased our lead generation by 140% in just three months. Their technical expertise and creative approach were exactly what we needed.",
    rating: 5,
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, StartupHub",
    content:
      "Working with herdoydev was a game-changer for our SaaS platform. They understood our vision and executed flawlessly. The web application they built handles 50,000+ monthly users with zero downtime.",
    rating: 5,
    avatar: "/testimonials/david.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "E-commerce Manager, StyleHaus",
    content:
      "Our new e-commerce site exceeded all expectations. The custom checkout flow alone reduced cart abandonment by 35%. herdoydev's attention to detail and strategic thinking made all the difference.",
    rating: 4,
    avatar: "/testimonials/sarah.png",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "CTO, Finova",
    content:
      "As a technical leader, I appreciate herdoydev's deep understanding of modern web architecture. They implemented a headless CMS solution that saved our team hundreds of hours in content management.",
    rating: 5,
    avatar: "/testimonials/david.jpg",
  },
];

export function Testimonials() {
  return (
    <section className="py-24" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <SectionButton>Client Voices</SectionButton>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl p-8 bg-gray-800/40 border border-gray-700 shadow-md transition-transform hover:shadow-lg hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute top-0 right-0 p-4 text-yellow-400">
                <Quote className="h-8 w-8 opacity-20" />
              </div>

              {/* Avatar + Name */}
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 ring-2 ring-blue-600">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback className="text-gray-300">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6">
                <p className="text-gray-300">{testimonial.content}</p>
              </div>

              {/* Rating */}
              <div className="mt-6 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-400">
                  {testimonial.rating}.0 rating
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <ArrowButton label="Read Case Studies" href="/case-studies" />
        </div>
      </div>
    </section>
  );
}
