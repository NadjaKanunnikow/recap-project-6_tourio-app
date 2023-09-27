# Rekapitulieren Sie Projekt 6: Tourio App

In diesem Projekt erstellen Sie eine Tourio-App, den besten Freund aller Reisenden: Sie zeigt Sehenswürdigkeiten an, die Sie besuchen möchten, und lässt Sie diese bearbeiten.

## Aufgabe

### Daten lesen

- Richten Sie eine Datenbank ein; Verwenden Sie die Datei [`lib/db.json`] (lib/db.json), um Beispieldaten einzufügen.
- Ersetzen Sie in „pages/api/index.js“ die aus „lib/db.js“ importierte Variable „places“ durch eine „GET“-Anfrage aus Ihrer Datenbank.
- Machen Sie dasselbe in „pages/api/[id]/index.js“ für die Detailseite.

### Formular erstellen

e- Schreiben Sie in git status„pages/create.js“ die Funktion „addPlace“, um eine „POST“-Anfrage zu starten.
- Schreiben Sie die „POST“-API-Route in „pages/api/places/index.js“.
- Durch das Absnden des Formulars sollte der Benutzer zur Homepage „/“ weitergeleitet werden.

### Eintrag aktualisieren

- Schreiben Sie in „pages/places/[id]/edit.js“ die Funktion „editPlace“, um eine „PATCH“-Anfrage zu starten.
- Schreiben Sie die „PATCH“-API-Route in „pages/api/[id]/index.js“.

### Eintrag löschen

- Schreiben Sie in „pages/places/[id].index.js“ die Funktion „deletePlace“, um eine „DELETE“-Anfrage zu starten.
- Schreiben Sie die „DELETE“-API-Route in „pages/api/places/[id]/index.js“.

### Auf Vercel bereitstellen

Stellen Sie Ihre App auf Vercel bereit und stellen Sie mithilfe von Umgebungsvariablen sicher, dass die Bereitstellung auf die Cloud-Datenbank zugreifen kann.

#### Vercel und MongoDB Atlas (Umgebungsvariablen)

Wenn Sie eine Anwendung auf Vercel bereitstellen, kann die App nicht sofort eine Verbindung mit Ihrer Cloud-Datenbank herstellen. Dies liegt daran, dass die Authentifizierungsinformationen (Benutzer und Passwort) in einer „.env.local“-Datei gespeichert sind, die nur Ihrer lokalen Entwicklungsumgebung zur Verfügung steht. Sie können diese Datei nicht auf Vercel hochladen, da sie vertrauliche Informationen enthält. Aus diesem Grund haben wir die Datei „.env.local“ zur Datei „.gitignore“ hinzugefügt.

Damit die App auf Vercel funktioniert, müssen wir die Authentifizierungsinformationen auf andere Weise bereitstellen. Hier kommen Umgebungsvariablen ins Spiel. Umgebungsvariablen sind eine Möglichkeit, vertrauliche Informationen sicher zu speichern. Weitere Informationen zu Umgebungsvariablen finden Sie in den [Vercel-Dokumenten](https://vercel.com/docs/projects/environment-variables).

Aus diesem Grund müssen wir Vercel die Zugangsdaten mitteilen.

#### Vercel mit MongoDB Atlas verbinden

1. Navigieren Sie im Dashboard Ihres Vercel-Projekts zu „Einstellungen“.

2. Wählen Sie in der linken Navigation „Umgebungsvariablen“.
    1. Fügen Sie den Schlüssel (`MONGODB_URI`) und den Wert (`mongodb+srv...`) hinzu.
    2. Markieren Sie alle Umgebungen (Produktion, Vorschau und Entwicklung).
    3. Klicken Sie auf „Speichern“.

3. Unten auf dieser Seite sollten Sie nun eine neue Umgebungsvariable sehen

4. Stellen Sie Ihre Anwendung erneut bereit:
    1. Wählen Sie in der Hauptnavigation „Bereitstellungen“ aus.
    2. Öffnen Sie die drei Punkte neben Ihrer letzten Bereitstellung und wählen Sie „Neu bereitstellen“.

5. Wenn ein Popup angezeigt wird, klicken Sie erneut auf die Schaltfläche „Neu bereitstellen“.

6. Herzlichen Glückwunsch, Sie sind fertig! Öffnen Sie die Vercel-URL Ihres Projekts, um zu sehen, dass Ihre bereitgestellte Anwendung jetzt Zugriff auf die Cloud-Datenbank hat.

## Entwicklung

### Lokale Entwicklung

Um lokal zu arbeiten, installieren Sie bitte zuerst die Abhängigkeiten mit „npm i“.

Führen Sie „npm run dev“ aus, um einen Entwicklungsserver zu starten und die angezeigte URL in einem Browser zu öffnen.

Verwenden Sie „npm run test“, um die Tests auszuführen.

### CodeSandbox Cloud

Wählen Sie die Registerkarte „Vorschau: 3000“, um dieses Projekt anzuzeigen.

Wählen Sie die Registerkarte „Tests: Protokolle“, um die Tests anzuzeigen.

> Die Skripte „npm run dev“ und „npm run test“ werden automatisch ausgeführt.

### Skripte

Sie können die folgenden Befehle verwenden:

- „npm run dev“, um einen Entwicklungsserver zu starten
- „npm run build“, um das Projekt zu erstellen
- „npm run start“, um einen Produktionsserver zu starten
- „npm run test“, um die Tests auszuführen
- „npm run lint“, um den Linter auszuführen

## Ressourcen

- [MongoDB Atlas-Tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial)
- [Umgebungsvariablen (Vercel Docs)](https://vercel.com/docs/projects/environment-variables)





# Recap Project 6: Tourio App

In this project you will build a Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.

## Task

### Read Data

- Set up a database; use the [`lib/db.json` file](lib/db.json) to insert sample data.
- In `pages/api/index.js`, replace the `places` variable imported from `lib/db.js` with a `GET` request from your database.
- Do the same in `pages/api/[id]/index.js` for the details page.

### Create Form

- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.

### Update Entry

- In `pages/places/[id]/edit.js`, write the `editPlace` function to start a `PATCH` request.
- Write the `PATCH` API route in `pages/api/[id]/index.js`

### Delete Entry

- In `pages/places/[id].index.js`, write the `deletePlace` function to start a `DELETE` request.
- Write the `DELETE` API route in `pages/api/places/[id]/index.js`.

### Deploy to Vercel

Deploy your app to Vercel and make sure the deployment can access the cloud database with the help of environment variables.

#### Vercel and MongoDB Atlas (environment variables)

When deploying an application to Vercel, the app is not immediately able to connect with your cloud database. This is because the authentication information (user and password) is stored in a `.env.local` file which is only available to your local development environment. You can't upload this file to Vercel because it contains sensitive information. This is why we added the `.env.local` file to the `.gitignore` file.

To make the app work on Vercel, we need to provide the authentication information in a different way. This is where environment variables come in. Environment variables are a way to store sensitive information in a secure way. You can read more about environment variables in the [Vercel docs](https://vercel.com/docs/projects/environment-variables).

This is why we need to provide Vercel with the access details.

#### Connecting Vercel with MongoDB Atlas

1. In the dashboard of your Vercel project, navigate to "Settings".

2. In the left-hand navigation, choose "Environment Variables".
   1. Add the key (`MONGODB_URI`) and the value (`mongodb+srv...`)
   2. Tick all environments (Production, Preview, and Development).
   3. Click "Save".

3. At the bottom of this page, you should now see a new environment variable

4. Redeploy your application:
   1. In the main navigation, choose "Deployments".
   2. Open the three dots next to your last deployment and choose "Redeploy".

5. If there's a popup, hit the "Redeploy" button again.

6. Congratulations, you are done! Open the Vercel URL of your project to see that your deployed application has now access to the cloud database.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run dev` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run dev` to start a development server
- `npm run build` to build the project
- `npm run start` to start a production server
- `npm run test` to run the tests
- `npm run lint` to run the linter

## Resources

- [MongoDB Atlas Tutorial](https://www.mongodb.com/basics/mongodb-atlas-tutorial)
- [Environment Variables (Vercel Docs)](https://vercel.com/docs/projects/environment-variables)
