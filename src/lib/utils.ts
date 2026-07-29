export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(" ");
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export const whatsappLink = (phone: string, message: string) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const siteName = "AKRADHI Travels";
export const phoneNumber = "+919848579053";
export const emailAddress = "info@akradhitravels.com";
export const whatsappNumber = "919848579053";
export const address = "Yelhanka, Bangalore – 560064";
export const businessHours = "Mon – Sat: 9:00 AM – 8:00 PM";
export const socialLinks = {
  facebook: "#",
  instagram: "#",
  youtube: "#",
  whatsapp: `https://wa.me/919848579053`,
  googleMaps: "#",
};
