import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import type { SocialKey } from "@/types/portfolio";

export function SocialIcon({ name, className }: { name: SocialKey; className?: string }) {
  const props = { className, "aria-hidden": true, focusable: false } as const;
  switch (name) {
    case "github":
      return <FaGithub {...props} />;
    case "linkedin":
      return <FaLinkedinIn {...props} />;
    case "email":
      return <Mail {...props} />;
    case "phone":
      return <Phone {...props} />;
  }
}
