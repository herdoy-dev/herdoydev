import { Star, Quote, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    <section className="py-24 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            Client Voices
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            say about working with us.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="absolute top-0 right-0 p-4 text-yellow-400">
                <Quote className="h-8 w-8 opacity-10" />
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-gray-700">{testimonial.content}</p>
              </div>

              <div className="mt-6 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating}.0 rating
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/case-studies" className="group">
              Read Case Studies
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
