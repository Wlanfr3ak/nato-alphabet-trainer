# Radio Alphabet Trainer / Funkalphabet-Trainer

(Created with Devins Desktop / AI&KI Technology!)

Test it: https://dl9fhx.de/trainer/

[English](#english) | [Deutsch](#deutsch)

## English

An interactive web application for learning and practicing NATO and German radio alphabets with speech support.

### Features
- **Multiple Choice Mode**: A letter is displayed with four answer options. Click the correct code word. Auto-advances after a delay scaled by the speech speed slider.
- **Dictation Mode**: Each letter is spoken aloud automatically. Type the letter you hear with immediate feedback.
- **Test Mode**: Complete 10 words quickly with automatic progression and final accuracy score
- **Adjustable Speed**: Slider controls speech speed in dictation mode and transition speed between questions in multiple choice mode (0.5x to 2x)
- **Visual Feedback**: Wrong letters shown in red during tests
- **Multiple Alphabets**: Switch between NATO and German radio alphabets
- **Bilingual UI**: Switch between English and German interface using EN/DE buttons
- **Browser Language Detection**: UI language and alphabet are pre-selected based on the browser language. German browsers get German UI + German alphabet, English browsers get English UI + NATO alphabet. Fallback is German.
- **Word Options**: Toggle names, birth dates (DD.MM.YYYY), GPS coordinates, and German license plates independently
- **German License Plates**: Real district codes with authentic syntax, including special government plates (BD, BP, BT, THW, Y, Z)
- **Anti-Repeat**: Letters are cached for 10 rounds to avoid repetition. The correct answer never appears at the same position twice in a row
- **Touch-Optimized**: Hover effects only active on devices with mouse support
- **Progress Tracking**: Monitor accuracy for each alphabet
- **Responsive Design**: Works on desktop and mobile devices

### Usage
1. The app auto-detects your browser language and pre-selects UI and alphabet accordingly (fallback: German)
2. Choose your preferred alphabet (NATO/German) by clicking the score boxes
3. Switch between Multiple Choice and Dictation mode
4. Adjust speed as needed (0.5x - 2x) – affects speech in dictation mode and transition speed in multiple choice mode
5. Optional: Enable names, birth dates, GPS coordinates, and/or German license plates
6. In dictation mode, disable names to practice only specific content (e.g., license plates only)
7. Type the letters as they are spoken
8. Monitor your progress with the scoring system

### Multiple Choice Mode
- A letter is displayed with four answer options
- Click the correct NATO or German code word
- Auto-advances to the next letter after a delay scaled by the speech speed slider

### Dictation Mode
- Each letter is spoken aloud automatically when a word starts and after a correct entry
- In practice mode, each letter must be typed correctly to proceed
- On a wrong entry the letter is repeated automatically so you get another chance
- Immediate feedback on incorrect entries
- Symbols are spoken in radio communication style (e.g., "Strich" for "-", "Punkt" for ".")

### Test Mode
- Complete 10 words as quickly as possible
- Wrong letters shown in red
- Automatic progression to next letter
- Final accuracy score provided

## Deutsch

Eine interaktive Webanwendung zum Erlernen und Üben des NATO- und deutschen Funkalphabets mit Sprachunterstützung.

### Funktionen
- **Multiple-Choice-Modus**: Ein Buchstabe wird mit vier Antwortmöglichkeiten angezeigt. Klicken Sie das richtige Buchstabierwort. Automatischer Weiterlauf nach einer Verzögerung, die über den Schieberegler eingestellt wird.
- **Diktatmodus**: Jeder Buchstabe wird automatisch angesagt. Tippen Sie den gehörten Buchstaben mit sofortigem Feedback.
- **Testmodus**: Vervollständigen Sie 10 Wörter schnell mit automatischer Progression und abschließender Genauigkeitsbewertung
- **Einstellbare Geschwindigkeit**: Schieberegler steuert die Sprechgeschwindigkeit im Diktatmodus und die Übergangsgeschwindigkeit im Multiple-Choice-Modus (0,5x bis 2x)
- **Visuelle Rückmeldung**: Falsche Buchstaben werden im Test rot angezeigt
- **Mehrere Alphabete**: Wechsel zwischen NATO- und deutschem Funkalphabet
- **Zweisprachige Oberfläche**: Umschaltung zwischen englischer und deutscher Oberfläche über EN/DE-Buttons
- **Browsersprach-Erkennung**: UI-Sprache und Alphabet werden anhand der Browsersprache vorausgewählt. Deutsche Browser erhalten deutsche Oberfläche + deutsches Alphabet, englische Browser erhalten englische Oberfläche + NATO-Alphabet. Fallback ist Deutsch.
- **Wortoptionen**: Namen, Geburtsdaten (TT.MM.JJJJ), GPS-Koordinaten und deutsche Kfz-Kennzeichen unabhängig voneinander aktivierbar
- **Deutsche Kfz-Kennzeichen**: Echte Unterscheidungszeichen mit korrekter Syntax, inklusive behördlicher Sonderkennzeichen (BD, BP, BT, THW, Y, Z)
- **Anti-Wiederholung**: Buchstaben werden 10 Runden lang zwischengespeichert, um Wiederholungen zu vermeiden. Die richtige Antwort erscheint nie zweimal hintereinander an der gleichen Position
- **Touch-optimiert**: Hover-Effekte nur auf Geräten mit Mausunterstützung aktiv
- **Fortschrittsverfolgung**: Überwachen Sie Ihre Genauigkeit für jedes Alphabet
- **Responsives Design**: Funktioniert auf Desktop und Mobilgeräten

### Verwendung
1. Die App erkennt automatisch die Browsersprache und wählt Oberfläche und Alphabet entsprechend vor (Fallback: Deutsch)
2. Wählen Sie Ihr bevorzugtes Alphabet (NATO/Deutsch) durch Klick auf die Punktefelder
3. Wechseln Sie zwischen Multiple-Choice- und Diktatmodus
4. Passen Sie die Geschwindigkeit an (0,5x - 2x) – beeinflusst Sprechgeschwindigkeit im Diktatmodus und Übergangsgeschwindigkeit im Multiple-Choice-Modus
5. Optional: Namen, Geburtsdaten, GPS-Koordinaten und/oder Kfz-Kennzeichen aktivieren
6. Im Diktatmodus Namen deaktivieren, um nur bestimmte Inhalte zu üben (z.B. nur Kennzeichen)
7. Tippen Sie die Buchstaben wie gesprochen
8. Überwachen Sie Ihren Fortschritt mit dem Punktesystem

### Multiple-Choice-Modus
- Ein Buchstabe wird mit vier Antwortmöglichkeiten angezeigt
- Klicken Sie das richtige NATO- oder deutsche Buchstabierwort
- Automatischer Weiterlauf zum nächsten Buchstaben nach einer Verzögerung, die über den Schieberegler eingestellt wird

### Diktatmodus
- Jeder Buchstabe wird beim Wortstart und nach korrekter Eingabe automatisch angesagt
- Im Übungsmodus muss jeder Buchstabe korrekt eingegeben werden
- Bei falscher Eingabe wird der Buchstabe automatisch wiederholt, sodass Sie eine neue Chance erhalten
- Sofortige Rückmeldung bei falschen Eingaben
- Symbole werden in Sprechfunk-Manier angesagt (z.B. "Strich" für "-", "Punkt" für ".")

### Testmodus
- Vervollständigen Sie 10 Wörter so schnell wie möglich
- Falsche Buchstaben werden rot angezeigt
- Automatischer Fortschritt zum nächsten Buchstaben
- Abschließende Genauigkeitsbewertung

## Technical Details / Technische Details

### Installation
1. Clone the repository / Repository klonen
2. Open `index.html` in a modern web browser / `index.html` in einem modernen Browser öffnen
3. No additional dependencies required / Keine zusätzlichen Abhängigkeiten erforderlich

### Browser Support / Browser-Unterstützung
Works in modern browsers with speech synthesis support / Funktioniert in modernen Browsern mit Sprachsynthese-Unterstützung:
- Chrome
- Firefox
- Safari
- Edge

## License / Lizenz
GNU General Public License v3.0 - [View License](https://www.gnu.org/licenses/gpl-3.0.en.html) / [Lizenz ansehen](https://www.gnu.org/licenses/gpl-3.0.de.html)

---

<!--VERSION-START-->
**Version:** 2026081217190001
<!--VERSION-END-->

