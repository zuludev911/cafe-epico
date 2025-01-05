export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function generateWhatsAppLink(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/573148464986?text=${encodedMessage}`;
}
