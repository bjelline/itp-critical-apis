Critical APIs
=================

**NYU ITP, Spring 2015**

* Lauren McCarthy [laurmccarthy@gmail.com](mailto:laurmccarthy@gmail.com)
* Wednesdays 12:10-2:40, Room 445
* [Office hours signup](http://bit.ly/1hECzFK), Room 455
* [Resident office hours signup](https://itp.nyu.edu/inwiki/)

# Overview
An API allows a connection between two different applications. It can pass data and information, or provide access to modify or control the application itself. Though APIs are often thought of in terms of their functionality, they are never neutral. Expectations about why and how it might be used and who should be able to use it are embedded in the infrastructure of the system. This course will look critically at the structures of power and control inherent in APIs, and explore possibilities to subvert ideologies imposed by the technology. We will build applications that access various APIs, as well as design APIs of our own. Students will use Processing, as well as JavaScript for both server-side and client-side programming, covering tools such as JSON, OAuth, AJAX, node.js, p5.js, jQuery.

Central to the class is the idea that APIs are by nature future-oriented, providing an access point where we may reimagine and renegotiate the world we live in. The course will be project-based, complemented by shorter technical exercises, readings, and research. Experience with JavaScript is highly recommended.	

# Evaluation

Grades will be determined according to the following breakdown:
* Final project proposal 20%
* Final Project 40%
* Participation and attendance 40%

Please see ITP's statement on [Pass/Fail](http://help.itp.nyu.edu/academic-policies/pass-fail) which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

The class will be a mix of seminar and studio:

### Discussion

There will be a number of readings for this course. Each reading will be prepared by one pair of students, who will read in depth and present and lead a discussion around the ideas in it. The goal is not to just give a report, but to engage the class in an interesting and provocative discussion. Things to include in your planning / presentation include:

* Summary of main ideas.
* Links, images, or video of projects / products / things referenced in the reading.
* Other relevant things you've read, heard, or seen.
* Personal experiences.
* Questions for the class related to the reading.
* Questions for the class that relate all three of the readings together.

On the days you are not presenting, you do not need to read all of each reading, but you need to read/scan enough to be able to participate in the class discussion.

Sign up for the reading you'd like to present on by putting your name next to it in the syllabus. ([instructions for modifying README.md](https://gist.github.com/lmccart/ee86d58f2c012145215a))

### Projects

The class will be based around a semester long final project, with a final project proposal in week 5. The final project should be a creative project that is inspired by the concepts we've covered this semester. You should feel free to think non-traditionally, final projects can take any form. You may work together.

The technical workshops in the class will use JavaScript. You are welcome to use any language or tool for your work.

See the [projects page](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2) for more information.

# Syllabus

## Part 1: Protocol and control

### Week 1 (3/25)
* Intro and syllabus
* [History of APIs](https://github.com/lmccart/itp-critical-apis/wiki/Survey#history-of-apis)
* Politics of APIs
  * ["Politics of APIs" diagram](https://d262ilb51hltx0.cloudfront.net/max/1448/1*B-pvEvv5tTMZdu7Kfk7Efg.png), Kin Lane
  * [Medium: Politics of APIs](https://medium.com/politics-of-apis/the-politics-of-apis-3a29b8dfee64), Tyler Singletary
  * [5 Things to Understand About Open APIs](http://www.mashery.com/blog/5-things-understand-about-successful-open-apis), Chuck Freedman
* **[Survey](https://github.com/lmccart/itp-critical-apis/wiki/Survey#part-1-protocol-and-control)**
* **[Workshop 0](https://github.com/lmccart/itp-critical-apis/wiki/Technical-workshops#workshop-0-api-shortcuts-and-alternatives): API shortcuts and alternatives**
* **[Project 1](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2#project-1-due-48) (DUE 4/8)** 

### Week 2 (4/1)
* **Discussion: protocol and control**
  * Tania Bucher, [Objects of Intense Feeling: The Case of the Twitter API](http://computationalculture.net/article/objects-of-intense-feeling-the-case-of-the-twitter-api)
  * Alexander Galloway, [Protocol](http://thecomposingrooms.com/research/reading/GALLOWAY-Alexander.-Protocol.pdf) - Introduction pg3-27 (Xiaolong Mou)
  * [The Anxieties of Big Data](http://thenewinquiry.com/essays/the-anxieties-of-big-data/), Kate Crawford
* **[Workshop 1](https://github.com/lmccart/itp-critical-apis/wiki/Technical-workshops#workshop-1-accessing-apis): accesssing APIs**

### Week 3 (4/8)
* **Guest lecture [Allison Burtch](http://www.allisonburtch.net/)** (4/8)
* **Review [Project 1](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2#project-1-due-48)**
* **[Project 2](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2#project-2-due-422) (DUE 4/22)**

## Part 2: Response and freedom

### Week 4 (4/15)
* **[Survey](https://github.com/lmccart/itp-critical-apis/wiki/Survey#part-2-response-and-freedom)**
* [The Internet's Own Boy: The Story of Aaron Swartz](https://www.youtube.com/watch?v=vXr-2hwTk58)
* **Discussion: open web / access, tactical media, exploits, hacking**
  * [Critical Art Engineering](http://www.critical-art.net/books/ecd/ecd2.pdf), Electronic Civil Disobedience
  * Manifestos
    * [UBERMORGEN.COM](http://www.ubermorgen.com/manifesto/)
    * [Critical Engineering](http://criticalengineering.org/), Julian Oliver, Gordan Savičić, Danja Vasiliev
    * [A Hacker Manifesto](http://subsol.c3.hu/subsol_2/contributors0/warktext.html), McKenzie Wark
  * [The ABC of Tactical Media](http://subsol.c3.hu/subsol_2/contributors2/garcia-lovinktext.html), David Garcia, Geert Lovink and [The Exploit: A Theory of Networks](http://lab404.com/379/galloway_thacker_exploit.pdf), Alexander Galloway
* **[Workshop 2: web scraping](https://github.com/lmccart/itp-critical-apis/wiki/Technical-workshops#workshop-2-web-scraping)**
  
### Week 5 (4/22)
* **Review [Project 2](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2#project-2-due-422)**
* **[Survey](https://github.com/lmccart/itp-critical-apis/wiki/Survey#part-3-networks)**
* **[Project 3](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2#project-3-due-56) (DUE 5/6)**


## Part 3: Networks

### Week 6 (4/29)
* **Guest [Workshop 3](https://github.com/lmccart/itp-critical-apis/wiki/Technical-workshops#workshop-3-create-your-own-api): create your own API**
* **Discussion: The Internet of Things and People** 
  * [Impersonating the Machine](http://booktwo.org/notebook/impersonating-the-machine/), James Bridle
  * [The Cult of Sharing](http://www.mrteacup.org/post/the-cult-of-sharing.html), Mike Bulajewski - also check out ["below the API"](http://www.forbes.com/sites/anthonykosner/2015/02/04/google-cabs-and-uber-bots-will-challenge-jobs-below-the-api/)
  * [The Epic Struggle for the Internet of Things](http://www.strelka.com/en/press/books/the-epic-struggle-for-the-internet-of-things), Bruce Sterling


### Week 7 (5/6)
* **Review [Project 3](https://github.com/lmccart/itp-critical-apis/wiki/Projects:-Section-2#project-3-due-56)**
* Wrap-up


# Resources

### JS basics - tutorial
* [CodeAcademy: JavaScript](http://www.codecademy.com/tracks/javascript)
* [How to learn JavaScript properly](http://javascriptissexy.com/how-to-learn-javascript-properly/)
* [JavaScript the right way](http://www.jstherightway.org/)
* [Code School](https://www.codeschool.com/paths/javascript)
* [JavaScript garden](http://bonsaiden.github.io/JavaScript-Garden/)
* [A re-introduction to JS by Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [JavaScript 101 from JQuery](https://learn.jquery.com/javascript-101/)
* [JavaScript: The Definitive Guide](http://shop.oreilly.com/product/9780596000486.do)
* [Eloquent JavaScript](http://eloquentjavascript.net/contents.html), Marijn Haverbeke
* [Beginning JavaScript](http://www.amazon.com/Beginning-JavaScript-Paul-Wilton/dp/0470525932), Paul Wilton and Jeremy McPeak
* [Learn-JS.org](http://www.learn-js.org/) - especially the sections on [functions](http://www.learn-js.org/en/Functions), [objects](http://www.learn-js.org/en/Objects), and [callbacks](http://www.learn-js.org/en/Callbacks)
* [Learning Advanced JavaScript](http://ejohn.org/apps/learn/)
* http://www.nyu.edu/lynda - lots of great tutorials here. Log in with your normal nyu net-id/password for full access.
* [CodeAcademy](http://www.codecademy.com/)
* [Flat Iron School](http://prework.flatironschool.com/web-development/)
* [HTML & CSS book](http://www.htmlandcssbook.com/)
* [JavaScript book](http://www.javascriptbook.com/)

### APIs - tutorial
* [APIs: Strategy Guide (O'Reilly)](http://www.amazon.com/APIs-Strategy-Guide-Daniel-Jacobson/dp/1449308929/)
* [RESTful Web APIs (O'Reilly)](http://www.amazon.com/RESTful-Web-APIs-Leonard-Richardson/dp/1449358063)
* [codecademy APIs tutorials](http://www.codecademy.com/learn)
* [lynda.com: Effective Design of RESTful APIs](http://www.lynda.com/API-tutorials/Effective-Design-RESTful-APIs/166777-2.html)
* [lynda.com: Up and Running with Cloud Service APIs](http://www.lynda.com/API-tutorials/Up-Running-Cloud-Service-APIs/151707-2.html)
* [Scraping the web with node.js](https://scotch.io/tutorials/scraping-the-web-with-node-js)

### Visualization tools
* [d3.js](http://d3js.org/) - JS library for manipulating documents based on data, using HTML, SVG, and CSS
* [p5.js](http://p5js.org/) - Processing reinterpreted for the web
* [raphael.js](http://raphaeljs.com/) - JS library for manipulating vector graphics for charts and viz
* [dygraphs](http://dygraphs.com/) - JS charting library
* [Vega](https://github.com/trifacta/vega) - describe data visualizations in a JSON format, and generate interactive views using either HTML5 Canvas or SVG
* [Gephi](https://gephi.github.io/) - interactive visualization and exploration platform for networks and complex systems


### p5.js
* [p5.js reference](http://p5js.org/reference)
* [p5.js forum](http://forum.processing.org/two/)
* [p5.js on GitHub](https://github.com/lmccart/p5.js)
* [p5.js CDN](http://cdnjs.com/libraries/p5.js)

### Servi.js
* [servi.js documentation](https://github.com/antiboredom/servi.js/wiki)


### General tools
* [Github student developer pack](https://education.github.com/pack) - includes Digital Ocean $100 credit and more!
* [Basic unix commands](http://www.webmonkey.com/2010/02/learn_enough_unix_for_your_resume/#Basic_Commands) - We'll be using the command line regularly in this class. Nothing too fancy; just the basics. Get familiar, at the very least, with the commands `ls`, `cd`, and `mkdir`. 
* Checking code: [JSLint](http://www.jslint.com/) / [JSHint](http://www.jshint.com)
* Browser debugging: Chrome Developer Tools ([tutorial](https://developer.chrome.com/extensions/tut_debugging)) / Firebug ([tutorial](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/))
* Mobile debugging [jsconsole.com](http://jsconsole.com)
* Sharing code snippets (useful for asking questions): [gist.github.com](http://gist.github.com)
* [Critical Making](http://conceptlab.com/criticalmaking/), Garnet Hertz

### APIs
* [ProgrammableWeb](http://www.programmableweb.com/)
* http://en.wikipedia.org/wiki/List_of_open_APIs
* https://gist.github.com/afeld/4952991
* OpenWeatherMap - http://openweathermap.org/API
* NYTimes - http://developer.nytimes.com/
* The Guardian - http://www.theguardian.com/open-platform
* flickr - https://www.flickr.com/services/api/
* MTA - http://web.mta.info/developers/developer-data-terms.html#data
* Foursquare - https://developer.foursquare.com/
* Sunlight Foundation - http://sunlightfoundation.com/api/
* [apievangelist.com/](http://apievangelist.com/)
* [Museum APIs list](http://museum-api.pbworks.com/w/page/21933420/Museum%C2%A0APIs)
