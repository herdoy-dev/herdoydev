import { Linkedin, Mail, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to start your project or have a question? I'd love to hear
            from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground">herdoy.dev@gmail.com</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Typically replies within 24 hours
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground">+8801622465404</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Available Mon-Fri, 9AM-6PM
                  </p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">LinkedIn</h4>
                  <p className="text-muted-foreground">
                    linkedin.com/in/herdoydev
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Connect for professional updates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-2 bg-muted/30">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div className="space-y-4">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or question..."
                      rows={5}
                      required
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full gap-2" size="lg">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
