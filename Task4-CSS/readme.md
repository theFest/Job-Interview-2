# Responsive banner

## Description
We need to build a responsive ad in several sizes as required by the client.
The ad should adapt at least for the sizes set below.
There is a poster in the img folder, that was used in a previous campaign.
You can use the poster as a reference.
The word "Familiar" should always stay on top or on the left side, depending on the banner size.
"Join our team" should always be on bottom or right, depending on the banner size.
Logos in square containers should stay square.
e.g. 120x600
One solution could be to have "Familiar" and "Join our team" at the top and bottom while the logos could fall one below the other.
e.g. 240x400
Same as above, but the logos fall one below the other in pairs

Note: It is not expected to be pretty just to be working.

## Assets/Logos
* [CSS](https://commons.wikimedia.org/wiki/File:CSS3_logo_and_wordmark.svg)
* [HTML](https://commons.wikimedia.org/wiki/File:HTML5_logo_and_wordmark.svg)
* [React](https://commons.wikimedia.org/wiki/File:React-icon.svg)
* [Mongo](https://worldvectorlogo.com/logo/mongodb)
* [JS](https://commons.wikimedia.org/wiki/File:JavaScript-logo.png)
* [MYSQL](https://worldvectorlogo.com/logo/mysql)
* [Node](https://commons.wikimedia.org/wiki/File:Node.js_logo.svg)
* [CMG](https://www.convergent-usa.com/_nuxt/img/logo.d5d3c6a.png)


## Definition Of Done
* body is used as the root container
* the banner is responsive and adapts to the following sizes
    * Half Page (300×600)
    * Vertical rectangle (240x400)
    * Skyscraper (120x600)
    * Full banner (468x60)
* Does not have inappropriate margins and borders.
* Everything is in one file below 50KB
* We don't have to install anything (plain HTML)
* no CSS frameworks used (JS neither)

## You will fail
* if any element has position: absolute;
* if logos are not in square containers

## Bonus
* Use of CSS animations
