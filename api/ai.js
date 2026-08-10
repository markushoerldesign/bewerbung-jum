// Serverfunktion für die Lebenslauf-KI.
// Der API-Schlüssel liegt ausschließlich hier am Server, niemals im Browser.
// In Vercel unter Settings → Environment Variables setzen:
//   ANTHROPIC_API_KEY   = sk-ant-...
//   ANTHROPIC_MODEL     = (optional, sonst claude-sonnet-4-6)

const MODEL = process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-6';
const MAX_TOKENS = 700;          // Obergrenze, unabhängig davon was der Browser schickt
const MAX_CHARS  = 12000;        // Schutz gegen überlange Anfragen

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST' });
  }

  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    // Kein Schlüssel hinterlegt → die Website fällt automatisch auf ihre
    // vorbereiteten Antworten zurück.
    return res.status(503).json({ error: 'Kein API-Schlüssel konfiguriert' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const system = String(body.system || '').slice(0, MAX_CHARS);
    const messages = Array.isArray(body.messages) ? body.messages.slice(-4) : [];

    if (!messages.length) {
      return res.status(400).json({ error: 'Keine Nachricht' });
    }
    for (const m of messages) {
      if (typeof m.content === 'string' && m.content.length > 2000) {
        m.content = m.content.slice(0, 2000);
      }
    }

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: Math.min(Number(body.max_tokens) || 500, MAX_TOKENS),
        system,
        messages
      })
    });

    const data = await upstream.json();
    res.setHeader('Cache-Control', 'no-store');
    return res.status(upstream.status).json(data);
  } catch (err) {
    return res.status(502).json({ error: 'Anfrage fehlgeschlagen' });
  }
}
