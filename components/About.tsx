import { Brain, Shield, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import DotGrid from "./DotGrid";

function About() {
  return (
    <div className="w-full md:h-[900px] sm:h-[1500px] h-[1650px] relative">
      <DotGrid
        dotSize={5}
        gap={10}
        baseColor="#0e111a"
        activeColor="#1aa64b"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <section
        id="about"
        className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 absolute top-0 w-full"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  Beyond the
                  <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Brochure Website
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground font-medium">
                  Transforming digital presence with intelligent solutions
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every business deserves a website that's more than just an
                  online brochure. I help brands build modern websites combined
                  with AI automations and assistants that work behind the
                  scenes—saving time, boosting sales, and delivering a seamless
                  experience to customers.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With years of experience and a passion for innovation, I make
                  technology simple, effective, and tailored to your goals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg">Learn More</Button>
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Features Grid Side */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">AI Automation</h3>
                  <p className="text-sm text-muted-foreground">
                    Smart systems that work 24/7 to streamline operations
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Modern Stack</h3>
                  <p className="text-sm text-muted-foreground">
                    Latest technologies for fast, reliable performance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Goal-Oriented</h3>
                  <p className="text-sm text-muted-foreground">
                    Solutions designed around your specific business objectives
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Reliable Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Ongoing maintenance and support for peace of mind
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-20 mt-16 border-t">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground mt-2">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground mt-2">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground mt-2">AI Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground mt-2">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
