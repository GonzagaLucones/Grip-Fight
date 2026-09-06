export const WHATSAPP_NUMBER = "5551994580433";
export const WHATSAPP_DISPLAY = "+55 51 99458-0433";
export const INSTAGRAM_URL = "https://instagram.com/gripfightselfdefense";
export const INSTAGRAM_HANDLE = "@gripfightselfdefense";
export const ADDRESS_LINES = [
  "Av. Henrique Bier, 215, 2º andar",
  "Campina — São Leopoldo - RS",
  "CEP 93130-000",
];

const MESSAGES = {
  general: "Olá! Gostaria de conhecer melhor a Grip Fight e saber como funciona a aula experimental.",
  adult: "Olá! Gostaria de saber mais sobre as aulas de Jiu-Jitsu para adultos na Grip Fight.",
  kids: "Olá! Gostaria de saber mais sobre as aulas de Jiu-Jitsu para crianças na Grip Fight.",
  modality: "Olá! Gostaria de ajuda para descobrir qual modalidade combina mais comigo na Grip Fight.",
  experimental: "Olá! Gostaria de agendar minha aula experimental na Grip Fight.",
  doubt: "Olá! Ainda tenho algumas dúvidas sobre as aulas na Grip Fight. Poderiam me ajudar?",
};

const getUtmQuery = () => {
  if (typeof window === "undefined") return "";
  const params = new URLSearchParams(window.location.search);
  const utms = [...params.entries()].filter(([k]) => k.startsWith("utm_"));
  if (!utms.length) return "";
  return "&" + utms.map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
};

export const waLink = (key = "general") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGES[key] || MESSAGES.general)}${getUtmQuery()}`;

export const IMAGES = {
  logo: "/images/logo-grip-fight.png",
  treino: "/images/03-treino-grip-fight.jpg",
  kids: "/images/grip-fight-kids.webp",
  kidsSelfie: "/images/kids-selfie.webp",
  medalhas: "/images/04-medalhas-grip-fight.jpg",
  tatame: "/images/08-tatame-grip-fight.webp",
  poseKids: "/images/pose-treino-kids.webp",
  lutaLivreTurma: "/images/luta-livre-turma.jpg",
  recepcao: "/images/02-academia-recepcao.jpg",
  cesar: "/images/06-cesar-pinheiro.jpg",
  william: "/images/07-william-chaves.webp",
};

export const NAV_LINKS = [
  { label: "Para quem é", href: "#para-quem" },
  { label: "Modalidades", href: "#modalidades" },
  { label: "A Grip Fight", href: "#a-grip-fight" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
];
