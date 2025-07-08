import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    title: "WhatsApp",
    description: "Chat with us instantly on WhatsApp",
    value: "+8801622465404",
    link: "https://wa.me/8801622465404",
  },
  {
    icon: <Mail className="h-6 w-6 text-blue-600" />,
    title: "Email Us",
    description: "Expect a response from our team within just 30 minutes.",
    value: "herdoy.dev@gmail.com",
    link: "mailto:herdoy.dev@gmail.com",
  },
  {
    icon: <MapPin className="h-6 w-6 text-blue-600" />,
    title: "Visit Us",
    description: "Come say hello at our office",
    value: "18 Sonar Bangla Road Peyaratola, Kushtia Sadar, Kushtia 7000",
    link: "https://maps.google.com",
  },
];

export default function Address() {
  return (
    <>
      {contactMethods.map((method, index) => (
        <div key={index} className="flex items-start gap-6">
          <div className="rounded-lg bg-blue-50 p-3 flex-shrink-0">
            {method.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {method.title}
            </h3>
            <p className="mt-1 text-gray-600">{method.description}</p>
            <Button
              variant="link"
              className="mt-2 p-0 text-blue-600 hover:text-blue-800"
              asChild
            >
              <Link href={method.link}>{method.value}</Link>
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}
