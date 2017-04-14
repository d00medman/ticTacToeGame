# ticTacToeGame

README time! How exciting!

Here is the URL for my deployed game.
https://d00medman.github.io/ticTacToeGame/

List of technologies used:
-Computer science
-The internet
-my decrepit Macbook laptop
-Atom text editor
-Google chrome
-javascript
  -jQuery
-HTML/CSS
  -bootstrap
-Rails and/or AJAX (not entirely clear on whether they are seperate or identical entities)
-Git
  -Github

Development process
  Days -3/-1:
  Being an inveterate gun-jumper, I spent a large portion of my weekend working on the project. While I spent a fairly large
  amount of time working, I was ultimately able to produce only two valuable results:

  1.) an HTML/CSS rendering of my board to which an X or an O could be applied, mostly lifted from fundamentals.
  2.) a fairly solid logical framework for building the game engine, though I did not start it, as I did not want to scrap large
      segmeents of my code (which I would have to do If I built it purely in javascript).

 By and large, my progress over the weekend was hindered by the fact that I did not have the framework we would be using to build
 the project with, forcing me to spend large amounts of time reinventing the wheel, the most notable difficulties was the lack of
 jQuery references grinding hindered my engine building. This time was not alltogether fruitless, as it put me in good position
 to actually build my engine and gave me the core elements of my front end HTML display.

 Day 0:
 On Monday, Jeff inadvertently provided the answer to the question of how I place an X or an O at a given cell on the board,
 a question which had basically hamstrung my progress over the weekend, when he told us about data-ids. I also received another
 vital piece of advice from Ben Adamski, who advised that I get a working js engine in the console before I begin to implement
 anything else. After class, I stayed in the offices and, along with a few other classmates, got the authentication up and running.
 This was largely a matter of lifting the code from the API token authentication lesson, re-writing a few routes and making sure
 it functioned on both our local and deployed server. I was able to get the former by the time I went home, but the latter remained
 unsolved.

 Dawn of the first day:
 On Tuesday, I first flailed in my efforts to solve the problem of token authentication on my deployed server, requesting a 1:1,
 then discovering and implementing the solution before I even sat down (turns out it was a misplaced /, producing a 400 error).
 Following this rather embarrasing episode, I began work in earnest on my javascript engine. This engine was designed to take input
 from a user (betwen 1 and 9) and play a game of tic tac toe with the result. At first, the fact that my input method (window.prompt())
 only fired in the browsers javascript console was annoying. However, as I grew used to using it, I found it to be extremely helpful
 for debugging, as I was able to drill deep into the methods throwing errors to find exactly where the errors were being thrown.
 As I worked on the engine, I made certain to assidously mark where my code would need to be changed when I linked it to my API.
 The most glitchy part of my code, I found, was the series of victory checks, causing me to spend multiple hours correcting faulty
 logic checks. This day was rather enjoyable, as the javascript represents a controlled coding environment that I am familiar with.
 At the days end, I felt I had made excellent progress, having produced a game engine which could place a mark, switch its mark, check
 for and reject an illegal move and check for both a draw or a victory successfully. With some time left to work, I began to build out
 my HTML code. The template I had built over the weekend used a table and, having learned bootstrap the day before, we had been discouraged
 from using a table. With this in mind, I went to work building a grid, but found no louck in getting it to stick. I opened an issue,
 but found myself stonewalled.
 Since I was unable to make any progress and was exhausted, I turned my mind to the next day's strategic
 objective: the building of my UI and integrating it with my engine via jQuery. My biggest area of uncertainty was how I would go about
 attatching event handlers to the cells of my board. To prepare me for this problem, I vigorously studied how event handlers had been
 attatched to the token authentication, drawing diagrams depicting how the file linkages worked and which statements were responsible for these
 linkages.

 Dawn of the second day:
 On Wednesday, I spent a decent part of my morning working to resolve why my board would not render in my HTML. Initially, the problem
 had been that my grid items would not stack on each other. After finding a solution to this, I found that my HTML would not even render
 on the local server. After a 1:1 with Ben, the conclusion was reached that the reason for my second problem was that my CSS was, for
 some unknown reason, overwriting my HTML and blocking it from appearing. Upon deleting my CSS, I found myself staring down the same
 problem that had stonewalled me on Tuesday. It was at this point that I decided I simply did not have enough time for this and moved the
 HTML/CSS board implementation I had built over the weekend into my project directory. Miraculously, this implementation worked without a
 hitch. I thus moved on to the integration of UI and game engine. Using my notes from the night before, I found that the addition of event
 handlers was rather seemless. At no point in the integration did I become truly stonewalled, though it took me most of the day to
 fully implement. At the end of the day, I had fully deployed a working game.
 Throughout the day, I had watched my squadmates wrangle with the implementation of the gameAPI, which would be my next strategic objective.
 Seeing how it had managed to produce such a quagmire for them, and noting how frictionless my intensive reverse engineering of the event handlers
 had rendered the day's objective, I aggressively studied the token authentication code to understand how it worked, noting the pieces of code,
 how they linked and what role each of these components played in producing the larger whole.

 Dawn of the third day.:
 I came into class today with two pages of notes and, if not an understanding of how AJAX interactions worked, certainly an understanding
 of how to produce an effective copycat. I isolated myself immediately and went to work implementing the methods. As on Wednesday, my
 night spent studying paid dividends, as I was able to make constant progress throughout the day. I was able to implement all of the API
 methods listed on the checklist with time to spare, putting me within spitting distance of my objective. At this point in time, I began to
 work on displaying the results of the index GET call. I grew increasingly frustrated as I wrangled with the modal and HTML to produce code which
 would print the full index of games. I had opened an issue on this subject, and believed that this was the direction I was encouraged to go in
 by the consultants. However, on second glance, I realized that I had been tirelessly plowing in the opposite direction reccomended by them.
 At this point in time, I realized that I had basically spend the last hour in a darkened room typing "All work and no play makes Alex a dull boy".
 It was as though the air was let out of a balloon. I implemented the minimum requirement for a stats display, then joylessly plugged through
 a seemingly endless cycle of commit, push, deploy, find a serious bug, debug, repeat. By about 6 I was done, having taken the final step
 of removing all console statements (somehow managing to miss one on my first pass, forcing one final loop of the cycle). Neurotically checking
 the requirements (something I continue to almost compulsively do), I concluded that the final step would be to write up the readme.

  Unsolved problems/Things I would like to do:
  -The authentication form is bizzarely erratic about what it takes as a legitimate email input. Sometimes, it takes in individual letters,
   sometimes it needs 2 strings connected with an @ sign, and sometimes it seems to only take in emails passed with a legitimate destination.
  -I would like to know why HTML/CSS decided to make my life so miserable, specifically what it meant when the local server threw me:
  Resource interpreted as Stylesheet but transferred with MIME type text/x-scss: "http://localhost:7165/assets/styles/index.scss".
  and refused to render my board.
  -I would like to be able to collapse divs. As it stands, visibility:collapse does not work on chrome, leaving me only capable of hiding my
   HTML elements and leaving large, ugly white gaps on my board.
  -For whatever reason, I am not able to rewrite the statement that declares who has won the last game. This statement proved remarkably resilient
   in resisting my efforts to fix it. Ultimately, my efforts to change this fell at around the time my energy finally gave out, causing me to declare
   it a minor annoyance in design rather than something to dedicate what little energy I had on.
  -I would like to know who decided the best way for Atom's linter to inform its user of a problem was a constant stream of error notifications
   rendering part of the screen functionally unusable and exactly what their thought process was when they reached this decision.
  -Currently, my game engine is titled playGame.js. The playGame method was the central driver of the engine when it was a purely js application.
   as I linked the engine to the UI, I found more and more core functionality was being integrated into the makeMove method, to the point where
   makeMove was the core driver of my game. Noting this, I commented out playGame. Upon my next test, I found that the program could not
   run without the playGame function. rather than taking a detour to reconfigure the pathways of the project, I left playGame in place as vestigal code.
   which does nothing yet must remain in place to preserve the structural integrity of the project. Had I more time and energy, I would reconfigure this
   method out.
 -Initially, my plan was to make my HTML/CSS as aggressively ugly as humanly possible. When HTML/CSS began to produce the most severe headaches imaginable,
  I scrapped these plans and settled on a fairly barebones stylesheet.
 -My board automatically resets at the end of each game and the next game immediately starts. While this is efficient, it is also quite jarring.


  Wireframes/User stories:
  Wireframes: http://imgur.com/KFYjWvu
  User Stories:http://imgur.com/X8WLysz

  Apologies for the low quality. Uploading it via my phone was pretty much my only option on short notice.
