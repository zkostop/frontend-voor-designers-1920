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

## Planning
1. Eerste versie: lesweek 2
2. Oplevering en beoordeling: lesweek 3


## Criteria

- De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
- De [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) nr 04 & 11 zijn goed toegepast.
- Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op [Github](https://github.com).

## Resources

### Wat doe je ook alweer in JavaScript?

1. Gebruik de [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) om een element in je html te selecteren
2. Koppel een [evenListener](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) aan het element om een mouse-event te detecteren
3. Gebruik het [Classlist object](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) om een css class aan een element toe te voegen of weg te halen.

Voor wat complexere microinteracties waar verschillende states elkaar moeten opvolgen kun je aan het eind van een transition of animation weer iets laten gebeuren. Gebruik hiervoor in Javascript de:

1. eventlistener: [transitionend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event)
2. eventlistener: [animationend](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/animationend_event)
