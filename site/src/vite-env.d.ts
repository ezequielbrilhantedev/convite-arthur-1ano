/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL do Web App do Google Apps Script que grava as confirmações na planilha. */
  readonly VITE_RSVP_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
