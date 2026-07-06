import Link from "next/link";
import Container from "./Container";

const links = [
  {
    href: "/",
    label: "Início",
  },
  {
    href: "/catalogo",
    label: "Catálogo",
  },
  {
    href: "/financiamento",
    label: "Financiamento",
  },
  {
    href: "/contactos",
    label: "Contactos",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-bold tracking-wide"
        >
          MB Auto
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-red-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button className="rounded-xl bg-red-700 px-5 py-3 font-medium text-white transition duration-300 hover:bg-red-800">
          Contactar
        </button>

      </Container>
    </header>
  );
}