import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

function GalleryImage({ src, alt, className, thumbnail = false, onZoom }: { src: string; alt: string; className: string; thumbnail?: boolean; onZoom?: () => void }) {
  const [failed, setFailed] = useState(false);
  const [attempt, setAttempt] = useState(0);

  if (failed) return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 p-3 text-center text-sm">
      <span>No se pudo cargar esta foto.</span>
      {!thumbnail && <button type="button" className="underline" onClick={(event) => {
        event.stopPropagation();
        setAttempt((value) => value + 1);
        setFailed(false);
      }}>Reintentar</button>}
    </span>
  );

  return <img key={attempt} src={attempt ? `${src}?retry=${attempt}` : src} alt={alt}
    className={className} onClick={onZoom} decoding="async" onError={() => setFailed(true)} />;
}

export function ProductGallery({ name, images }: { name: string; images: string[] }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const gallery = [...new Set(images.filter(Boolean))];
  const index = Math.min(selected, Math.max(0, gallery.length - 1));
  const move = (direction: number) => {
    if (gallery.length) setSelected((value) => (value + direction + gallery.length) % gallery.length);
  };

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!gallery.length) return <p>No hay fotos disponibles para este producto.</p>;

  const imageAlt = `${name}, imagen ${index + 1} de ${gallery.length}`;
  const navigation = (lightbox = false) => (
    <div className={`flex shrink-0 items-center justify-center gap-4 p-3 ${lightbox ? 'text-white' : 'text-brand-dark'}`}>
      <button type="button" onClick={() => move(-1)} disabled={gallery.length < 2}
        aria-label="Ver imagen anterior" className="rounded-full border p-3 disabled:opacity-30">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <span className="min-w-16 text-center text-sm" aria-live="polite">{index + 1} / {gallery.length}</span>
      <button type="button" onClick={() => move(1)} disabled={gallery.length < 2}
        aria-label="Ver imagen siguiente" className="rounded-full border p-3 disabled:opacity-30">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );

  return (
    <section className="space-y-4" aria-label={`Fotos de ${name}`}>
      <div className="rounded-2xl border border-brand-accent/40 bg-white p-3 shadow-lg">
        <div className="flex aspect-square items-center justify-center">
          <GalleryImage key={gallery[index]} src={gallery[index]} alt={imageAlt}
            className="h-full w-full cursor-zoom-in object-contain" onZoom={() => setOpen(true)} />
        </div>
        {navigation()}
        <button type="button" onClick={() => setOpen(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-accent/30 px-4 py-3 text-sm text-brand-dark"
          aria-label={`Ampliar imagen ${index + 1} de ${gallery.length}: ${name}`}>
          <Maximize2 className="h-4 w-4" /> Tocar para ampliar
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4" aria-label="Elegí una imagen de la galería">
        {gallery.map((url, i) => (
          <div key={url} className={`relative aspect-square rounded-xl border bg-white p-1 ${index === i ? 'border-brand-primary ring-2 ring-brand-primary/40' : 'border-brand-accent'}`}>
            <GalleryImage thumbnail src={url} alt={`${name}, miniatura ${i + 1}`} className="h-full w-full object-contain" />
            <button type="button" onClick={() => setSelected(i)} aria-label={`Ver imagen ${i + 1} de ${gallery.length}`}
              aria-pressed={index === i} className="absolute inset-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary" />
          </div>
        ))}
      </div>
      {open && (
        <dialog ref={dialogRef} onClose={() => setOpen(false)} onCancel={() => setOpen(false)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              move(event.key === 'ArrowLeft' ? -1 : 1);
            }
          }}
          aria-label={`Galería de ${name}`}
          className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none bg-black/95 p-3 text-white backdrop:bg-black/80 sm:p-6">
          <div className="flex h-full flex-col">
            <div className="flex shrink-0 items-center justify-between gap-3 pb-3">
              <span className="text-sm">{name}</span>
              <button type="button" autoFocus onClick={() => setOpen(false)} aria-label="Cerrar imagen ampliada"
                className="rounded-full bg-white/15 p-3"><X className="h-6 w-6" /></button>
            </div>
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <GalleryImage key={gallery[index]} src={gallery[index]} alt={imageAlt}
                className="h-full w-full select-none object-contain" />
            </div>
            {navigation(true)}
          </div>
        </dialog>
      )}
    </section>
  );
}
