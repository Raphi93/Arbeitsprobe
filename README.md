## Vorhaben eines Smart Homes
Ich hatte mir überlegt, ein Smart Home einzurichten, da mein Vater vor 10 Jahren damit begonnen hatte und alles mit Home Matic installiert hatte, als er umgezogen war. Als ich später zu meiner Mutter zog, um eine zweite Lehre zu beginnen, bemerkte ich, dass das Home-Matic-System Störungen hatte.

## Problemlösung mit Home Matic
Zunächst musste ich die Bridge überprüfen und feststellen, dass ich die CCU1 (die erste Generation der Home-Matic-Bridge) ersetzen musste, da der LoRaWAN-Anschluss einen Wackelkontakt hatte. Also kaufte ich ein Raspberry Pi mit LoRaWAN und wollte das Backup von der alten Bridge einspielen. Leider hatte auch das Backup Störungen und ich musste alles neu aufsetzen. Dazu musste ich jeden Controller von Home Matic ausbauen und einen Funktionstest durchführen. Anschließend musste ich sie in der neu aufgesetzten Raspberry-Bridge verbinden. Da ich sie jedoch aufgrund der Störungen nicht von der alten Bridge entfernen konnte, musste ich alle Controller zurücksetzen.

Nachdem ich alles eingerichtet hatte, funktionierte fast alles. Das einzige Problem waren die Programme, die bei Home Matic seltsam zu programmieren sind, da sie eine eigene Sprache haben und sehr eingeschränkt sind. Dann sprach Mike Hofer mit mir über IoBroker, mit dem man alle möglichen Bridges miteinander verbinden und eine visuelle Oberfläche erstellen kann.

## Lösung mit IoBroker
Zunächst informierte ich mich über IoBroker, ein Open-Source-Programm. IoBroker kann eigentlich nichts, man muss zuerst alle Instanzen installieren, um beispielsweise eine Verbindung zum Home-Matic-System herstellen zu können. Man muss die IP-Adresse und die Anmeldedaten angeben und hat dann eine Verbindung zum Home-Matic-System. Die Programme können in JavaScript, Blockly oder Type Script geschrieben werden.

## Gewählte Instanzen
Ich wählte folgende Instanzen:

- Home Matic
- Philips Hue
- MySQL
- Sonos
- Vis (für die visuelle Ansicht)
- Spotify
- Swagger
- Fortschritte
- Ich habe Skripte für das Licht, die Heizung und die Sonnensteuerung in JavaScript geschrieben (Testphase) und ein Vis-Layout entworfen.

## Zukünftige Pläne
Ich möchte das Vis fertigstellen und die Skripte verbessern und in Type Script schreiben. Außerdem möchte ich ein Backend einrichten.

## Herausforderungen
Das größte Problem, das ich hatte, war, dass ich zu Hause ein Mash-System hatte, das vor 8 Jahren von einer Kollegin meiner Mutter eingebaut wurde und immer noch gewartet wird. In meinem Zimmer lief die IP-Adresse vom Mash-System und das Home-Matic-System lief im normalen Netz 192... Als ich den IoBroker zum Testen auf einem Raspberry Pi in meinem Zimmer anschloss, funktionierte die Verbindung, aber der IoBroker hatte keinen Zugriff auf den Controller. Ich dachte, wenn die Netzwerke miteinander verbunden sind, sollte es funktionieren. Doch ich wurde eines Besseren belehrt. Also richtete ich den Home-Matic-Bridge auf das
