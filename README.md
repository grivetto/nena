# Serena Franceri - Aerial Silks Portfolio

Versione: Beta 0.0.1

Sito web portfolio per Serena Franceri, atleta di tessuti aerei (aerial silks). Il sito è progettato come una Single-Page Application (SPA) moderna, elegante e dinamica, che trasmette leggerezza, forza e fluttuazione.

## Tecnologie Utilizzate

- **React 19**
- **Vite**
- **Tailwind CSS v4**
- **Motion (Framer Motion)** per le animazioni fluide
- **Lucide React** per le icone

## Struttura del Sito

- **Hero:** Apertura d'impatto con effetto parallasse.
- **Chi Sono:** La storia di Serena e la sua connessione con l'aria.
- **Galleria:** Griglia di immagini delle figure aeree.
- **Contatti:** Form minimale ed elegante.

## Istruzioni per il Deploy su GitHub Pages

Questo progetto è configurato per essere ospitato su GitHub Pages.

1. **Installa le dipendenze:**
   ```bash
   npm install
   ```

2. **Configura il file `vite.config.ts`:**
   Assicurati di impostare la proprietà `base` nel file `vite.config.ts` con il nome del tuo repository GitHub:
   ```typescript
   export default defineConfig({
     base: '/nome-del-tuo-repository/',
     // ...
   })
   ```

3. **Costruisci il progetto:**
   ```bash
   npm run build
   ```
   Questo comando creerà una cartella `dist` contenente i file statici.

4. **Deploy:**
   Puoi utilizzare il pacchetto `gh-pages` per facilitare il deploy:
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```
   Oppure puoi configurare le GitHub Actions per automatizzare il deploy ogni volta che fai un push sul branch principale.
