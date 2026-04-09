"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [nextPath, setNextPath] = useState("/admin");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("next");
    // Evita redirecciones abiertas; solo rutas internas.
    if (raw && raw.startsWith("/")) setNextPath(raw);
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error ?? "No se pudo iniciar sesión");
      }
      router.replace(nextPath);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#07080c] to-[#0c0f16] px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0c11]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.4)] backdrop-blur">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/turbo-logo.png" alt="Turbo" className="h-9 w-auto" />
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/75">
          Acceso privado
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-zinc-50">Administración Turbo Stream</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Ingresa con tus credenciales para gestionar cámaras y fuentes en tiempo real.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="text-xs text-zinc-500">Usuario</span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#111520] px-3 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-emerald-400/50"
              required
            />
          </label>
          <label className="block">
            <span className="text-xs text-zinc-500">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="mt-1 w-full rounded-xl border border-white/10 bg-[#111520] px-3 py-2.5 text-sm text-zinc-100 outline-none transition focus:border-emerald-400/50"
              required
            />
          </label>

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}

