import {
  Home as HomeIcon,
  Factory,
  Smartphone,
  SunMedium,
  Zap,
  Truck,
} from "lucide-react";


export const COMPANY = {
  name: "ElektroWatt",
  tagline: "Elektroinstalacije s preciznošću inženjera.",
  description:
    "Već više od dvadeset godina projektiramo, ugrađujemo i servisiramo elektroinstalacije za domove, poslovne prostore i industriju diljem Hrvatske.",
  phone: "+385 98 926 1082",
  email: "info@elektrowatt.hr",
  address: "Ante Starčevića 34, 32253 Komletinci",
  hours: "Pon – Pet, 08:00 – 18:00",
  oib: "OIB: 55045213024",
};

export const NAV_LINKS = [
  { label: "Usluge", href: "#usluge", id: "nav-services" },
  { label: "Projekti", href: "#projekti", id: "nav-projects" },
  { label: "O nama", href: "#o-nama", id: "nav-about" },
  { label: "Pitanja", href: "#cesta-pitanja", id: "nav-faq" },
  { label: "Kontakt", href: "#kontakt", id: "nav-contact" },
];

export const SERVICES = [
  {
    id: "stambene",
    number: "01",
    title: "Stambene instalacije",
    icon: HomeIcon,
    description:
      "Kompletna izvedba i rekonstrukcija elektroinstalacija u stanovima i kućama — od razvodnih ormarića do utičnica, rasvjete i uzemljenja.",
    bullets: [
      "Projektiranje i izvedba",
      "Atestiranje i mjerenja",
      "Energetska učinkovitost",
    ],
  },
  {
    id: "industrijski",
    number: "02",
    title: "Komercijalni i industrijski radovi",
    icon: Factory,
    description:
      "Snažna rješenja za pogone, urede i trgovine. Razvodni ormari, energetske instalacije, strojarski priključci i preventivno održavanje.",
    bullets: [
      "Niskonaponske mreže",
      "Razvodni ormari",
      "Održavanje pogona",
    ],
  },
  {
    id: "pametne-kuce",
    number: "03",
    title: "Pametne kuće",
    icon: Smartphone,
    description:
      "Sustavi pametnog doma — upravljanje rasvjetom, grijanjem, roletama i sigurnošću putem aplikacije. KNX, Loxone i bežične platforme.",
    bullets: ["KNX & Loxone", "Scene i automatizacija", "Glasovno upravljanje"],
  },
  {
    id: "solar-ev",
    number: "04",
    title: "Solarni sustavi i EV punjači",
    icon: SunMedium,
    description:
      "Projektiranje i montaža fotonaponskih elektrana, baterijskih sustava te punionica za električna vozila — kućnih i poslovnih.",
    bullets: [
      "Fotonapon na ključ",
      "Baterijska pohrana",
      "AC/DC punionice za EV",
    ],
  },
  {
    id: "autokosara",
    number: "05",
    title: "Najam autokošare",
    icon: Truck,
    description:
      "Iznajmljujemo autokošaru s iskusnim operaterom za radove na visini — montaža rasvjete, krošnjenje, fasaderski i elektroinstalacijski radovi do 22 m.",
    bullets: [
      "Radni doseg do 14 m",
      "Iskusan operater",
      "Najam po satu ili danu",
    ],
  },
  
  /*{
    id: "hitne",
    number: "05",
    title: "Hitne intervencije 0-24h",
    icon: Zap,
    description:
      "Dolazimo brzo. Tim dežurnih elektroinstalatera dostupan je 24 sata dnevno, 7 dana u tjednu — za kvarove, prekide i opasne situacije.",
    bullets: ["Dolazak u 60 minuta", "Dežurni tim 24/7", "Garantirani odziv"],
  },*/
];

export const GALLERY = [
  {
    title: "Industrijski razvodni ormar",
    category: "Industrija",
    src: "https://images.pexels.com/photos/34054464/pexels-photo-34054464.jpeg",
    span: "row-span-2",
  },
  {
    title: "Pametna kuća — kontrolni panel",
    category: "Smart Home",
    src: "https://images.pexels.com/photos/16423104/pexels-photo-16423104.jpeg",
    span: "",
  },
  {
    title: "Fotonaponska elektrana 12 kW",
    category: "Solar",
    src: "https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg",
    span: "",
  },
  {
    title: "Mjerenje i atestiranje",
    category: "Servis",
    src: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg",
    span: "col-span-2",
  },
  {
    title: "EV punjač — privatni objekt",
    category: "E-Mobilnost",
    src: "https://images.pexels.com/photos/24376862/pexels-photo-24376862.jpeg",
    span: "",
  },
];

export const STATS = [
  { value: "1200+", label: "Završenih projekata" },
  { value: "20", label: "Godina iskustva" },
  { value: "24/7", label: "Hitne intervencije" },
  { value: "100%", label: "Atestirani radovi" },
];

export const FAQS = [
  {
    q: "Pokrivate li cijelu Hrvatsku?",
    a: "Sjedište nam je u Vukovarsko-srijemskoj županiji, a redovito radimo u cijeloj kontinentalnoj Hrvatskoj. Za veće projekte dolazimo i na Jadran — javite nam lokaciju i izlazimo na uvid.",
  },
  {
    q: "Izdajete li atest i potrebnu dokumentaciju?",
    a: "Da. Svi naši radovi prate propisana mjerenja (izolacijski otpor, kontinuitet zaštitnog vodiča, FID sklopke) te se izdaje pripadni atest i zapisnik.",
  },
  {
    q: "Koliko traje izrada ponude?",
    a: "Nakon izlaska na teren ili dobivenog projekta, ponudu šaljemo u roku od 24–48 sati.",
  },
  {
    q: "Radite li fotonaponske elektrane na ključ?",
    a: "Da — od idejnog projekta, ishodovanja dozvola i ugradnje, do priključenja na mrežu i prijave HEP-u. Nudimo i baterijske sustave za samodostatnost.",
  },
  {
    q: "Što je uključeno u hitnu intervenciju?",
    a: "Dolazak dežurnog tima unutar 60 minuta na području Zagreba, dijagnostika kvara, privremeno otklanjanje opasnosti i ponuda za trajno rješenje.",
  },
  {
    q: "Jamči li ElektroWatt na izvedene radove?",
    a: "Da, dajemo jamstvo od 24 mjeseca na izvedene radove i ugrađenu opremu, sukladno proizvođačkim deklaracijama.",
  },
];

export const VALUES = [
  {
    title: "Atestirano i sigurno",
    body: "Radimo isključivo po HRN normama. Svaka instalacija ispitana je i protokolirana — bez improvizacije.",
  },
  {
    title: "Inženjerski pristup",
    body: "Tim ovlaštenih inženjera elektrotehnike planira svaki projekt — od jednosobnog stana do pogona od 800 kW.",
  },
  {
    title: "Fiksne cijene",
    body: "Ponuda koju potpišemo je ponuda koju platite. Bez naknadnih iznenađenja niti skrivenih troškova.",
  },
];
