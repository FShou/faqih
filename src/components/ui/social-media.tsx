import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import SocialLinks from "./social-links";

export default function SocialMedia() {
  const socialLinks = [
    {
      href: "mailto:faqihsuyudi2020@gmail.com",
      label: "E-mail",
      icon: <Mail />,
    },
    { href: "https://github.com/Fshou", label: "GitHub", icon: <Github /> },
    {
      href: "https://www.linkedin.com/in/achmad-faqih-suyudi/",
      label: "Linkedin",
      icon: <Linkedin />,
    },
    {
      href: "https://x.com/faqih_suyudi20",
      label: "X",
      icon: <Twitter />,
    },
  ];

  return (
    <div>
      <h1 className="text-lg font-medium my-4">Let's collaborate !!</h1>
      <SocialLinks links={socialLinks} />
    </div>
  );
}
