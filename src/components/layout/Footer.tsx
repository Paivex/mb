import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t bg-white py-10">
      <Container>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

          <h2 className="text-xl font-bold">
            MB Auto
          </h2>

          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} MB Auto. Todos os direitos reservados.
          </p>

        </div>

      </Container>
    </footer>
  );
}