import { useState } from "react";
import { Share2, MessageCircle, Send, Link as LinkIcon, Check } from "lucide-react";

interface SocialShareProps {
  title: string;
  description: string;
  relativeUrl: string;
}

export function SocialShare({ title, description, relativeUrl }: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const fullUrl = `https://sucupam.com${relativeUrl}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Mirá este regalo o souvenir de Sucupam: ${title} - ${description} ${fullUrl}`
  )}`;

  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    fullUrl
  )}&description=${encodeURIComponent(title + " - " + description)}`;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-white rounded-2xl border border-gray-100 shadow-sm mt-12 font-sans gap-4">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center">
          <Share2 className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-semibold text-brand-ink text-sm uppercase tracking-wider">¡Compartí esta idea!</h4>
          <p className="text-[11px] text-gray-400 mt-0.5">Enviá detalles de este souvenir a tus allegados o Wedding Planner</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
        {/* WhatsApp Share Button */}
        <a
          id="share-whatsapp-btn"
          href={whatsappShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs bg-whatsapp-green hover:bg-whatsapp-dark text-white font-bold transition-colors cursor-pointer shadow-sm w-full sm:w-auto text-center justify-center"
          title="Compartir por WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        {/* Pinterest Share Button */}
        <a
          id="share-pinterest-btn"
          href={pinterestShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs bg-red-600 hover:bg-red-700 text-white font-bold transition-colors cursor-pointer shadow-sm w-full sm:w-auto text-center justify-center"
          title="Guardar en Pinterest"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.992 3.993-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.363.363 0 0 1 .083.345l-.333 1.362c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.162 0 7.397 2.967 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.628 0 12-5.372 12-12 0-6.628-5.372-12-12-12z" />
          </svg>
          <span>Pinterest</span>
        </a>

        {/* Copy Link Button */}
        <button
          id="copy-link-btn"
          onClick={handleCopyLink}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs bg-gray-100 hover:bg-gray-200 text-brand-ink font-bold transition-all cursor-pointer shadow-sm w-full sm:w-auto text-center justify-center border border-gray-100"
          title="Copiar link"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <LinkIcon className="w-4 h-4 text-gray-500" />}
          <span>{copied ? "¡Copiado!" : "Copiar URL"}</span>
        </button>
      </div>
    </div>
  );
}
