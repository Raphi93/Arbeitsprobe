
1. # Vorstellungen

Ich habe mir gedacht ein Smart-Home einzurichten, als mein Vater hat damit angefangen ein Smart Home einzurichten alles mit Home Matic als er vor 10 Jahren weggezogen bin, hatte er viele Controller mitgenommen. Wo ich wieder zu meiner Mutter gezogen bin, weil ich eine 2te Lehre beginnen wollte. Als ich eingezogen bin, hatten das Home Matic System nur noch Störungen.
1. # Was ich machen musste, Home Matic

Zuerst musste ich die Bride anschauen, dann habe bemerkt ich musste den CCU1 (Die erste Generation von der Home Matic Bridge) wechseln. Der LoRaWAN Anschluss hatte einen Wackelkontakt.

Dann habe ich für ein Raspberry Pi mit LoRaWAN gekauft.

Und wollte das Backup von der alten Bridge einspielen, aber es hatte dort auch nur Störungen, dann musste ich alles neu aufsetzten 😐.

Das heisst jeder Controller von der Home Matic ausbauen einen Funktionstest machen.

Dann sie in der neu aufgesetzter Raspberry Bridge verbinden, aber da ich es nicht von der alten Bridge entfernenden konnte wegen der Störungen. Musste alle Controller auch noch zurücksetzten 

Als ich das Geschäft habe, funktioniert es fast alles, das einzige, wo nicht perfekt lief, sind die Programme, sie sind bei der Home Matic seltsam zum Programmieren, sie haben eine eigene Sprache, und ist sehr eingeschränkt. Dan hat Mike Hofer über IoBroker, mit mir gesprochen, man kann alle mögliche Bridge miteinander verbinden und eine visuelle Oberfläche zu designen.

1. # Was ich machen musste, IoBroker

Ich musste zuerst mich informieren über IoBroker es Open-Source-Programm.
IoBroker kann eigentlich nichts man muss zuerst alle Instanzen installieren um zum Beispiel eine Verbindung zur Home Matic System einstellen kann man muss halt die IP-Angeben und noch den Namen und Passwort und dann hat man eine Verbindung zur Home Matic System. Die Programme können auf JavaScript, Blockly oder Type Script auswählen.


1. # Welche Instanzen habe ich gewählt

- Home Matic
- Phillips Hue
- MySQL
- Sonos
- Vis (für die Visuelle Ansicht)
- Spotify
- Swaagger

1. # Was habe bereits gemacht

Skripte fürs Licht, Heizung, Sonnen-Steuerung in JavaScript (Testphase).

Mit Vis Layout designen.

1. # Was will ich noch machen

Vis Fertigstellen

Skripte verbessern und in Type Script schreiben.

Backend

1. # Probleme

Was eigentlich die grössten Probleme machte, bei mir zu Hause habe ein Mash System und eine Kollegin von mir und meiner Mutter hat es dazumal vor 8 Jahren eingebaut und wartet es immer noch.

In meinem Zimmer läuft die IP vom Mash und das Home Matic lauft auf dem normalen Netz 192…

Und ich habe zum Testen den IoBroker wo ich auf ein Raspberry laufen liess in meinem Zimmer angeschlossen. Die Verbindung hatte geklappt, weil die Netzwerke sich ja kennen, aber IoBroker hatte keinen Zugriff auf den Controller. Ich dachte, wenn die Netze miteinander verbunden sind, sollte es funktionieren. Aber ich wurde ein Besessener belehrt. Dann habe ich den Home Matic Bridge auf das Mash Netz eingerichtet. Ich habe nicht die IoBroker umgesteckt, weil Sonos, Hue alles auf dem Mash Netz laufen.

Das war eigentlich das grösste Problem, wo erwähnenswert ist.

