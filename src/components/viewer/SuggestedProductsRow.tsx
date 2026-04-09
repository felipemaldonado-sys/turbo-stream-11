"use client";

import { useMemo, useState } from "react";
import {
  resolvedSuggestedImageUrl,
  SUGGESTED_PRODUCT_IMAGE_FALLBACK,
  type SuggestedProduct,
} from "@/data/suggested-products-co";

function SuggestedThumb({
  imageUrl,
  productId,
  name,
}: {
  imageUrl: string;
  productId: string;
  name: string;
}) {
  const [broken, setBroken] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const fallbackUrl = SUGGESTED_PRODUCT_IMAGE_FALLBACK[productId];

  const src = useFallback && fallbackUrl
    ? resolvedSuggestedImageUrl(fallbackUrl)
    : resolvedSuggestedImageUrl(imageUrl);

  if (broken) {
    return (
      <div className="suggested-thumb suggested-thumb--fallback" aria-hidden>
        <span>{name.slice(0, 1).toUpperCase()}</span>
      </div>
    );
  }

  return (
    <div className="suggested-thumb">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        key={src}
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => {
          if (fallbackUrl && !useFallback) {
            setUseFallback(true);
            return;
          }
          setBroken(true);
        }}
      />
    </div>
  );
}

type Props = {
  products: SuggestedProduct[];
  /** Oculta toda la franja (el padre puede mostrar un botón para volver). */
  onHideStrip: () => void;
};

/**
 * Carrusel automático sobre el video, con imágenes reales. Pausa al hover / prefers-reduced-motion.
 * "Agregar" abre la ficha del producto en Rappi (nueva pestaña).
 */
export function SuggestedProductsRow({ products, onHideStrip }: Props) {
  const [dismissed, setDismissed] = useState<Set<string>>(new Set());

  const visible = useMemo(
    () => products.filter((p) => !dismissed.has(p.id)),
    [products, dismissed]
  );

  const loop = useMemo(() => [...visible, ...visible], [visible]);

  if (visible.length === 0) {
    return (
      <div className="suggested-overlay suggested-overlay--empty">
        <div className="suggested-overlay-header">
          <p className="suggested-overlay-title">Sugerencias</p>
          <div className="suggested-overlay-actions">
            <button type="button" className="suggested-strip-hide" onClick={onHideStrip}>
              Ocultar
            </button>
          </div>
        </div>
        <p className="suggested-overlay-empty-msg">No quedan sugerencias en esta sesión.</p>
      </div>
    );
  }

  return (
    <div className="suggested-overlay" aria-label="Productos sugeridos">
      <div className="suggested-overlay-header">
        <div>
          <p className="suggested-kicker">Para tu pedido</p>
          <p className="suggested-overlay-title">Productos sugeridos</p>
        </div>
        <div className="suggested-overlay-actions">
          <span className="suggested-hint suggested-hint-overlay">Se deslizan solas · Pausa al pasar el mouse</span>
          <button type="button" className="suggested-strip-hide" onClick={onHideStrip}>
            Ocultar
          </button>
        </div>
      </div>
      <div className="suggested-marquee-outer">
        <div className="suggested-marquee-track">
          {loop.map((p, i) => (
            <article key={`${p.id}-${i}`} className="suggested-pop suggested-pop--overlay">
              <button
                type="button"
                className="suggested-dismiss"
                aria-label={`Quitar ${p.name}`}
                onClick={() => setDismissed((s) => new Set(s).add(p.id))}
              >
                ×
              </button>
              <div className="suggested-pop-inner">
                <SuggestedThumb imageUrl={p.imageUrl} productId={p.id} name={p.name} />
                <div className="suggested-text">
                  <p className="suggested-name">{p.name}</p>
                  <p className="suggested-price">{p.priceLabel}</p>
                  {p.hint && <p className="suggested-sub">{p.hint}</p>}
                </div>
              </div>
              <a
                href={p.rappiProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="suggested-add-link"
                onClick={(e) => e.stopPropagation()}
              >
                Agregar
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
