/**
 * Google Apps Script — recebe as confirmações de presença do convite do Arthur
 * e grava cada uma numa aba "RSVPs" da planilha.
 *
 * Como publicar:
 *   1. Crie uma Planilha Google (Google Sheets).
 *   2. Extensões → Apps Script e cole este arquivo.
 *   3. Cole o ID da planilha em SPREADSHEET_ID abaixo (está na URL da planilha,
 *      entre /d/ e /edit: .../spreadsheets/d/<ID>/edit).
 *   4. Implantar → Nova implantação → Tipo "App da Web".
 *        - Executar como: Eu
 *        - Quem tem acesso: Qualquer pessoa
 *   5. Copie a URL que termina em /exec e coloque em VITE_RSVP_ENDPOINT
 *      (no .env local e nas Environment Variables da Vercel).
 *
 * IMPORTANTE: ao editar este arquivo, republique como NOVA VERSÃO
 * (Implantar → Gerenciar implantações → editar → Versão: Nova versão).
 * Só salvar (Ctrl+S) NÃO atualiza a URL /exec.
 *
 * O formulário envia um POST com Content-Type: text/plain e corpo JSON
 * { "name": "...", "guests": 0, "companionNames": [] }.
 */

// ID da planilha (entre /d/ e /edit na URL). Deixe vazio para usar a planilha
// à qual o script está vinculado (Extensões → Apps Script).
var SPREADSHEET_ID = '1_nW0SogjB13ywDoEhJnXeUvX0HAWc3ymgAIQLXn55M8';

function getSheet_() {
  var ss = SPREADSHEET_ID
    ? SpreadsheetApp.openById(SPREADSHEET_ID)
    : SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error(
      'Planilha não encontrada. Preencha SPREADSHEET_ID ou vincule o script à planilha (Extensões → Apps Script).'
    );
  }
  var sheet = ss.getSheetByName('RSVPs') || ss.insertSheet('RSVPs');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Data/Hora', 'Nome', 'Acompanhantes', 'Total de pessoas', 'Nomes dos acompanhantes']);
  }
  return sheet;
}

/**
 * Ping de saúde: abra a URL /exec no navegador para confirmar que o deployment
 * está no ar, com a versão atual e acesso "Qualquer pessoa".
 */
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, msg: 'RSVP endpoint no ar' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    var sheet = getSheet_();

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
