/**
 * Google Apps Script — recebe as confirmações de presença do convite do Arthur
 * e grava cada uma numa aba "RSVPs" da planilha.
 *
 * Como publicar:
 *   1. Crie uma Planilha Google (Google Sheets).
 *   2. Extensões → Apps Script e cole este arquivo.
 *   3. Implantar → Nova implantação → Tipo "App da Web".
 *        - Executar como: Eu
 *        - Quem tem acesso: Qualquer pessoa
 *   4. Copie a URL que termina em /exec e coloque em VITE_RSVP_ENDPOINT
 *      (no .env local e nas Environment Variables da Vercel).
 *
 * O formulário envia um POST com Content-Type: text/plain e corpo JSON
 * { "name": "...", "guests": 0, "companionNames": [] }.
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('RSVPs') || ss.insertSheet('RSVPs');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Data/Hora', 'Nome', 'Acompanhantes', 'Total de pessoas', 'Nomes dos acompanhantes']);
    }

    var data = JSON.parse(e.postData.contents);
    var name = String(data.name || '').trim();
    var guests = Number(data.guests) || 0;
    var companionNames = Array.isArray(data.companionNames) ? data.companionNames : [];
    var companionNamesStr = companionNames
      .map(function (n) { return String(n || '').trim(); })
      .filter(function (n) { return n; })
      .join(', ');

    sheet.appendRow([new Date(), name, guests, guests + 1, companionNamesStr]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
