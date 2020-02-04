# Frontend voor Designers - opdracht 1: Use Case uitwerken en testen

Ontwerp een user interface voor een gegeven use case. Werk je ontwerp uit in HTML, CSS en Javascript om te kunnen testen in een browser.

## Use cases
<li>In een verzameling films wil ik een aantal leuke films kunnen bewaren om ze later te bekijken.</li>
<li>In een lijst studentenhuizen wil ik details kunnen bekijken om te bepalen of de kamer geschikt is om te huren.</li>
<li>In een verzameling muzieknummers wil ik de volgorde kunnen veranderen om een playlist te maken voor een feest.</li>
<li>Als ik foto's zoek wil ik ze kunnen filteren op kleur om verassende zoekresultaten te krijgen die ik kan gebruiken voor mijn Visual Research.</li>
<li>Je mag ook een eigen idee uitwerken. Kom dan eerst even overleggen.</li>

## Werkwijze
Kies een van de Use Cases, schets eerst je idee, codeer in HTML,CSS en JavaScript en test verschillende versies van je ontwerp in een browser.

## Criteria

- De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
- De [http://bokardo.com/principles-of-user-interface-design/](Principles of User Interface Design) nr 04 & 11 zijn goed toegepast.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op [https://github.com](Github).

## Resources

### Wat doe je ook alweer in JavaScript?

1. Gebruik de [https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector](querySelector) om een element in je html te selecteren
2. Koppel een [https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event](evenListener) aan het element om een mouse-event te detecteren
3. Gebruik het [https://developer.mozilla.org/en-US/docs/Web/API/Element/classList](Classlist object) om een css class aan een element toe te voegen of weg te halen.

Voor wat complexere microinteracties waar verschillende states elkaar moeten opvolgen kun je aan het eind van een transition of animation weer iets laten gebeuren. Gebruik hiervoor in Javascript de:

1. eventlistener: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event](transitionend)
2. eventlistener: [https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event](animationend)
