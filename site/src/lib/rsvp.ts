export interface RsvpPayload {
  name: string;
  guests: number;
}

/**
 * Envia a confirmação para o Google Apps Script (Web App) que grava numa
 * planilha. Usa `mode: 'no-cors'` + `Content-Type: text/plain` para evitar o
 * preflight de CORS — a resposta fica opaca (não dá pra ler), então quem chama
 * trata como sucesso otimista se o fetch resolver.
 *
 * Se `VITE_RSVP_ENDPOINT` não estiver configurada, resolve sem fazer nada
 * (modo otimista) — o formulário continua funcionando em dev e não quebra se a
 * env faltar em produção.
 */
export async function submitRsvp(payload: RsvpPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_RSVP_ENDPOINT;
  if (!endpoint) return;

  await fetch(endpoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
}
