# Website live schalten — Schritt für Schritt

Alles darin ist kostenlos. Du brauchst nur zwei Konten: GitHub und Vercel.
Rechne mit 15 Minuten.

---

## Was in diesem Paket liegt

```
index.html                  ← die Website
assets/                     ← alle Bilder und das Video
ANLEITUNG.md                ← diese Datei
```

**Eine Datei fehlt noch:** dein Lebenslauf als PDF.
Lege ihn in den Ordner `assets/` und benenne ihn exakt:

```
Markus_Hoerl_Lebenslauf.pdf
```

Ohne diese Datei funktioniert die Seite, nur der Download-Button läuft ins Leere.

---

## Schritt 1 — GitHub-Konto anlegen

1. Auf **github.com** gehen, „Sign up".
2. E-Mail, Passwort, Benutzername wählen und bestätigen.

## Schritt 2 — Repository anlegen

1. Oben rechts auf **+** → **New repository**.
2. Name zum Beispiel `bewerbung-jum`.
3. **Public** oder **Private** — beides funktioniert.
4. Keine Häkchen bei „Add a README" setzen.
5. **Create repository**.

## Schritt 3 — Dateien hochladen

1. Im leeren Repository auf **uploading an existing file** klicken.
2. `index.html`, den Ordner `assets` und die PDF per Drag-and-drop ins Fenster ziehen.
3. Unten **Commit changes** klicken.

Wichtig: `index.html` muss direkt im Repository liegen, nicht in einem Unterordner.
Die Groß- und Kleinschreibung der Dateinamen muss exakt stimmen — auf dem Server
ist `profilbild.webp` etwas anderes als `Profilbild.webp`.

## Schritt 4 — Vercel verbinden

1. Auf **vercel.com** → **Sign up** → **Continue with GitHub**.
2. Zugriff bestätigen.
3. **Add New…** → **Project**.
4. Dein Repository `bewerbung-jum` auswählen → **Import**.

## Schritt 5 — Deployen

1. Framework Preset: **Other**.
2. Build Command und Output Directory **leer lassen**.
3. **Deploy** klicken.

Nach etwa 20 Sekunden ist die Seite unter
`https://bewerbung-jum.vercel.app` erreichbar, inklusive HTTPS.

Ab jetzt gilt: Jede Änderung, die du auf GitHub hochlädst, geht automatisch live.

---

## Schritt 6 (optional) — eigene Domain

Eine Domain kostet etwa 10 bis 15 Euro im Jahr, zum Beispiel bei
namecheap.com, world4you.com oder easyname.at.

1. Domain kaufen, etwa `markushoerl.at`.
2. In Vercel: Projekt → **Settings** → **Domains** → Domain eintragen.
3. Vercel zeigt zwei DNS-Einträge an. Diese beim Domain-Anbieter eintragen.
4. Nach wenigen Minuten bis maximal 24 Stunden ist sie aktiv.

Für eine Bewerbung wirkt eine eigene Domain deutlich stärker als eine
`.vercel.app`-Adresse.

---

## Etwas ändern

**Text ändern:** In `index.html` ganz oben stehen zwei Blöcke, `CONTENT` und
`PROFILE`. Dort liegen sämtliche Texte an einer Stelle. Auf GitHub kannst du die
Datei direkt im Browser bearbeiten (Stiftsymbol) und speichern — die Seite
aktualisiert sich von selbst.

**Bild tauschen:** Neue Datei mit exakt demselben Namen in `assets/` hochladen.

**Neuer Lebenslauf:** PDF mit demselben Namen ersetzen.

---

## Was noch offen ist

**Die KI-Funktionen** laufen live im Demo-Modus mit vorbereiteten Antworten.
Betroffen sind „Frag meinen Lebenslauf" und die Begriffs-Verbindungen bei
Allroundtalent. Beides funktioniert und sieht fertig aus, die Antworten sind
aber hinterlegt statt live erzeugt.

Für echte KI-Antworten braucht es zwei Dinge: einen API-Schlüssel und eine
kleine Serverfunktion `api/ai.js`, die den Schlüssel serverseitig hält. Im Code
ist die Stelle dafür vorbereitet — die Konstante `AI_ENDPOINT` muss dann nur auf
`/api/ai` zeigen. Sag Bescheid, dann schreibe ich die Funktion.

**Vor dem Livegang inhaltlich prüfen:**

- Zeitraum Mind Entry®: im Bereich Unternehmergeist steht 2019–2022, bei
  Menschenkenntnis 07/2018 – 09/2022.
- Bei Realisierungskraft steht als Unterzeile „Health & Safety Week · Magna
  Steyr Fahrzeugtechnik · bis zu 10.000 Mitarbeitende" — bitte bestätigen.
- Die Begriffspaare bei Allroundtalent: die wichtigsten Antworten fest
  hinterlegen (im Code markiert mit „OFFEN — VOR DEM LIVEGANG BEARBEITEN").
