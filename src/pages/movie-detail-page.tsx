import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import PageContainer from "@/components/layout/page-container";
import { useMovieStore } from "@/stores/movie.store";

export function MovieDetailPage() {
  const { movieId } = useParams();
  const { movies } = useMovieStore();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const movie = movies.find((item) => item.id === movieId);

  if (!movie) {
    return (
      <PageContainer>
        <h1 className="text-3xl font-bold">Película no encontrada</h1>
        <Link to="/movies" className="text-primary underline">
          Volver al catálogo
        </Link>
      </PageContainer>
    );
  }

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  return (
    <PageContainer>
      <div className="grid gap-8 md:grid-cols-[320px_1fr]">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full rounded-2xl object-cover shadow-lg"
        />

        <section className="space-y-5">
          <p className="text-sm uppercase tracking-wide text-muted-foreground">
            {movie.genre}
          </p>

          <h1 className="text-4xl font-bold">{movie.title}</h1>

          <p className="max-w-2xl text-lg text-muted-foreground">
            {movie.synopsis}
          </p>

          <div className="rounded-2xl border p-5 shadow-sm">
            <h2 className="text-2xl font-bold">Comprar entrada</h2>
            <p className="mt-2 text-muted-foreground">
              Simulación de pasarela de pago para la película seleccionada.
            </p>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Película</p>
                <p className="font-semibold">{movie.title}</p>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Método</p>
                <p className="font-semibold">Tarjeta simulada</p>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="font-semibold">S/ 15.00</p>
              </div>
            </div>

            {!paymentSuccess ? (
              <button
                type="button"
                onClick={handlePayment}
                className="mt-5 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground"
              >
                Pagar ahora
              </button>
            ) : (
              <div className="mt-5 rounded-xl border border-green-300 bg-green-50 p-4 text-green-700">
                ✅ Compra realizada con éxito. Tu entrada fue generada.
              </div>
            )}
          </div>

          <Link
            to="/movies"
            className="inline-flex rounded-xl bg-black px-5 py-3 font-semibold text-white"
          >
            Volver a películas
          </Link>
        </section>
      </div>
    </PageContainer>
  );
}