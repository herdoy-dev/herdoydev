import { Mail, MapPin, Phone } from "lucide-react";
import ListItem from "./list-item";

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
        <ListItem
          key={index}
          title={method.title}
          description={method.description}
          icon={method.icon}
          linkTitle={method.value}
          link={method.link}
        />
      ))}
    </>
  );
}
