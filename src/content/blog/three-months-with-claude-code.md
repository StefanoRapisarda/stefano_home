---
title: "Three Months with Claude Code"
subtitle: "What happens when a database coordinator, software developer, and quasi-periodic astronomer lets an AI into his terminal, and what it taught me about programming, thinking, and letting go"
date: "2026-02-22"
category: "Code, AI, Claude Code"
readingTime: "12 min"
slug: "three-months-with-claude-code"
image: "/images/drknow.jpg"
imageAlt: "David and Gigolo Joe visit Dr. Know, a frame from A.I. by Steven Spielberg"
draft: false
---

## Prelude

During my PhD I had the misfortune of dealing with a frankenstein legacy code. It was (I hope it really WAS) Fortran code, functional coding, implicit typing, thousands of lines, variables with few-letter names, pieces of code added by generations of students (some with little or no comments, others with entire chapters), no tests, no documentation. I spent 90% of my PhD time dealing with this code, trying to understand it, to tweak it, but never change it too much as "it worked".

Little I knew at that time that this was badly written code (similarly to toxic relationships, the problem was me, not it), that it should have not been my role to maintain it (I should have focused more on finding knowledge gaps, as every researcher should do), and I wasn't "brave" enough to step away from it (in my mind, I had not the time, even if I ended up wasting a lot of time anyway, and the code had a certain "authority", as results coming from it were published regularly, even on Nature).

I would like to tell myself that the time spent dealing with that software has been a painful, and yet valuable experience, that let me understand how to code, that made me a better programmer or made me understand the algorithmic logic. For a little part, yes, but mostly not. I would learn much more when, during my postdoc, I decided to allocate fixed time of my working day to learn programming, starting from scratch: python, object oriented programming, and software architecture.

Over the years I also accumulated a graveyard of personal projects. Ideas that seemed exciting at the beginning, sketches of tools I wanted to build, small applications that could have been useful for my work or simply fun to make. Many of them had one thing in common: a graphical interface. And every time the same story repeated itself. Designing the logic was enjoyable, even elegant at times, but the moment a GUI entered the picture everything became slow, fragile, and strangely exhausting to test. Buttons that refused to behave, layouts that broke for mysterious reasons, event loops that felt like negotiating with a stubborn machine. PyQt, Tkinter, and then Node and Electron, ending (in the most recent days) with SvelteKit and Rust.

Little by little those projects stalled. Some reached the stage of a barely working prototype, others stopped as scattered folders with promising names. The painful part was not only the technical friction, but the growing distance from software development in my daily job. When coding stopped being a central activity, it became harder to justify the long evenings needed to wrestle with interfaces and frameworks. So most of those ideas quietly joined the archive of abandoned attempts.

You may find yourself in the previous lines, you may find them boring, or completely extraneous to you, but they are important to read what I am going to say next in the right light.

## Three Months with Claude Code

Three months ago, I invited an AI into my terminal.

(Generative) AI was not a stranger for me. I had already been using ChatGPT and Claude daily, and Windsurf/Codeium in VS Code since 2023. Claude Code sounded to me more or less the same thing, with the additional capability to run in the terminal. I went into it completely lightly as, first of all, I am not a software developer by training and I am not working on big software projects, and, second, all the times I asked help to AI to improve small chunks of code, 9 times out of 10, I would get a better solution than mine.

I have heard about Claude Code on a TikTok video (or the TLDR newsletter, can't remember, but it surely was one of those formats killing our abilities to be focused for more than 10 minutes). The source sounded quite enthusiastic about its capabilities. At first I used it simply as a chatbot, like I was doing with ChatGPT and Claude. Then I started asking about files in the working directory (converting formats, summaries), then I went into small chunks of code, and then... then I gave it a real challenge.

I gave Claude Code the specs of a note-taking app (WellBegun, I hope I will write an article about it) I have been working on since 2019. My main concern as a researcher was creating an effective note system to collect, organise, and link scientific content from papers. I wanted to have a clear (and fast to access) overview of results, scientific facts, speculations, hypotheses, etc., with the relative provenance, with the goal of better identifying knowledge gaps (at that time, its name was "Synapses"). The app was heavily based on a slick user interface that I never managed to implement properly. However, I had a relatively clear idea about the data model, front and back end technologies, general architecture, and use cases.

I fed them all to Claude Code.

In about 15 minutes and some key pressing, Claude generated a fully functional webapp. Of course several features had not been implemented as intended, but still, the app worked. The following three months have been just... fun. I was using the app for my work in the morning, and in the evening I would organise feedback in files to feed Claude. I started thinking about the app very often, new features came to mind, I also had to reconsider its scope entirely, and, at the same time, old and new work and personal projects came back to life, clogging my brain with a stampede of new possibilities.

## Death and Rebirth

I am not a developer and software development is not the primary task of my current job. I have been programming a lot in my career, and I was motivated enough to be a self-taught programmer. This means that, as a matter of fact, I have not had, I do not have, and I will probably never have enough time to get as deep into programming as I wish. There was a time I was dedicating constant hours to learning programming, specific languages and so on, but because of the nature of my new job, having a family, and a cosmos of hobbies that I will find more meaningful to have spent time on at the time of my, I hope not so premature, departure, I simply need to accept the fact that I cannot do everything by myself.

When Claude gave me that first working app, it was a bit of a shock. It was a mix of disbelief, incredulity, and fascination, but also a deep sinking feeling in the stomach. 
That stupid little app made me finally realise that something deep had changed and that we would never work again as we used to.


The following emotion was frightening, as, even if not a developer, a voice became louder and louder in my head: "and now, what do we do?".

I spent the next 10 days thinking about what I should do next. I had made learning paths in the past, some about programming technologies, programming languages, webapp frameworks, all seemed swallowed by the blinking cursor waiting for instructions. Part of me knew this was going to happen, I often mentioned to colleagues that in the future we would not worry at all about programming languages, AI would take care of that, we would just need to focus on specs and use cases. Following that line of thought I also shifted my readings towards software architecture and development frameworks (domain driven design among others), but what I experienced made me doubt even about that.

One thing was certain, to use a cliché, the genie had left its bottle and there was no way to put it back. The second certain thing is that I could never compete with AI at software development. AI is already writing better software than I ever had, thousands of times faster.

In most of the stories based on the evolution arc of a character, there is a moment called "exhaustion". At this point the character is aware of the main conflict, but still tries to solve it using old paradigms. This leads to a series of pushbacks that leave him/her "exhausted", physically and mentally. At this point he/she must accept that the only way to solve the conflict is a deep change, a shift of perspective.

I went through the same exhaustion. I tried to keep up, to "learn faster", to compete with the machine on its own terms. It did not work. What worked, eventually, was to stop and ask: what can I bring to this relationship that the machine cannot?

## The Good Parts

After three months of daily work with Claude Code, I have a clearer picture of what this new way of building software actually offers. And, to be fair, there is a lot to celebrate.

**It makes programming fun again.** This may sound trivial, but for someone like me, whose relationship with code was increasingly one of frustration and diminishing returns, it is not trivial at all. 
The graveyard of projects I mentioned? Many of them are alive now. The loop of enthusiasm, blocked by technical friction, leading to abandonment, has been broken. When the annoying parts (the CSS that won't align, the authentication boilerplate, the configuration files that need to be just right) can be delegated, what remains is the creative part: the idea, the architecture, the user experience. I find myself thinking about my projects during walks, in the shower, before sleeping, something that hadn't happened in years. Programming has become, again, a playground.

**It turns you into an editor.** This is perhaps the most subtle and interesting shift. When Claude generates a feature, my job is no longer to write code line by line, but to review it, test it, and provide feedback. I am working at the editorial level. I look at what has been produced, I check if it matches the intention, I point out what doesn't work or what could be better. It feels remarkably similar to what an editor does with a manuscript: you don't write the sentences, but you shape the text, you ensure coherence, you catch what the writer missed. This is not a lesser role, it is a different one, and in many ways a more strategic one.

**It kills the cost of software development.** This is the part that has the most radical implications. Software has always been expensive to make, which meant that only companies or developers with significant time and skill could bring ideas to life. What Claude Code does, and tools like it, is something analogous to what 3D printers did for manufacturing: it democratises production. A teacher who wants a specific classroom tool, a researcher who needs a niche data pipeline, a small business owner who wants a custom inventory system, none of these people could afford to hire a developer or learn to code from scratch. Now they can describe what they need and get a working prototype. The barrier between "I have an idea" and "I have a tool" is collapsing. This will generate, I believe, an explosion of micro-software, small, personal, purpose-built applications that no commercial product would ever bother to create.

**It forces you to think at a higher level.** When you are not lost in the details of implementation, you are forced to think about what matters: the purpose of the software, the experience of the user, the structure of the data, the flow of information. I noticed that my conversations with Claude became progressively more architectural and less syntactical. I stopped saying "add a button here" and started saying "the user needs to be able to transition from reading mode to editing mode without losing context". This shift, from implementation thinking to design thinking, is one of the most valuable side effects of working with an AI coding assistant.

**It accelerates learning by immersion.** Here is a paradox. While AI coding assistants do not teach you new technologies in the traditional sense (more on this later), they expose you to a vast amount of code in a very short time. In three months, I have seen more SvelteKit patterns, more TypeScript idioms, more CSS tricks than I would have encountered in a year of self-study. Not because I was studying them, but because I was reading them, every time Claude produced something, I had to understand it well enough to evaluate it. It is learning by reviewing, not by doing, and it is a different kind of knowledge, more breadth than depth, but valuable nonetheless.

**Words matter again.** For years, one of the sacred principles of clean code was to minimise comments, ideally to eliminate them altogether. Good code, the argument went, should speak for itself. Variable names, function signatures, clear structure: if you needed a comment to explain what was happening, the code wasn't clean enough. I understood the logic, and I mostly agreed with it. But working with Claude Code has turned this principle on its head. Comments are no longer annotations for human readers, they are semantic enrichment for the machine. A well-placed comment explaining the *intent* behind a function, the *why* rather than the *what*, dramatically improves Claude's ability to work with the codebase. Descriptive variable names, docstrings, inline explanations of business logic, all of those things that the clean code movement tried to replace with self-explanatory structure are now, paradoxically, more valuable than ever. They are not clutter, they are context. They are the difference between Claude understanding a module as a collection of functions and understanding it as a piece of a larger design. The irony is beautiful: In the age of AI, the most important thing a programmer can write is not code, but prose.


**It reveals what you actually care about.** When the friction of implementation is removed, you discover very quickly which projects you are genuinely passionate about and which ones were just intellectual curiosity. Some of my resurrected projects lasted two evenings before I realised I didn't care enough about them to keep going. Others, like WellBegun, have become a daily companion (not without a complete rethinking of its core functionalities). The filter is no longer "can I build this?" but "do I want to use this?", and that is a much more honest question.

## The Bad Parts

It would be dishonest, and frankly boring, to write only a celebration. There are real costs and risks to this new way of working, and some of them worry me more than I expected.

**The black box problem.** Like any technology built on opaque mechanisms, the more you depend on it, the more control you lose. At first, the code Claude produces is manageable, you can read it, understand it, modify it by hand if needed. But as the project grows, as features pile up, as the architecture becomes more intricate, a threshold is crossed. There comes a point where the codebase is so large and so intertwined that only Claude can effectively navigate it. I can already see it happening with WellBegun: there are entire modules that I vaguely understand the purpose of, but whose implementation details I would struggle to modify without asking Claude. This is a trajectory that should concern anyone. In the near future, software may become so complex that only AI can edit the code, and at that point, you are no longer the owner of your project, you are its curator, dependent on a tool that you do not fully understand and cannot fully control.

**It creates new inequalities.** Access to AI coding tools is not free, and the quality varies enormously. Users who can afford better models, more tokens, faster responses, will inevitably produce better software. This is not unlike the digital divide we already know, but it adds a new layer: it is not just about having a computer or an internet connection, it is about having access to the best AI. A student using a free tier with rate limits and an older model will have a fundamentally different experience from a professional with an unlimited subscription to the latest model. The democratisation I celebrated earlier has an asterisk: it democratises, but unevenly.

**It does not teach you new technologies.** Unless you make a deliberate, conscious effort, working with Claude Code will not make you learn a new programming language or framework. You will recognise patterns, yes, you will gain a surface-level familiarity, but you will not develop the deep understanding that comes from struggling with something yourself, from debugging for hours, from reading documentation until it clicks. I know more about SvelteKit now than I did three months ago, but I know it the way you know a city you've only seen from a tour bus: you recognise the landmarks, but you couldn't navigate the back streets (and, most importantnly, you never got lost in it). This is a trade-off, and for someone like me, who does not need to be a SvelteKit expert, it is an acceptable one. But for students, for early-career developers, for anyone who needs to build deep technical skill, the temptation to let the AI do the hard parts is genuinely dangerous.

**It erodes your tolerance for difficulty.** This one crept up on me. After weeks of having Claude solve problems in seconds, I noticed that my patience for manual problem-solving had decreased. A bug that would have taken me an afternoon of focused debugging now triggers an immediate impulse to just ask Claude. The muscle of persistence, the willingness to sit with a problem and think it through, atrophies when you have an oracle in your terminal. Programming used to teach patience and systematic thinking as a side effect. I am not sure it still does.

**It introduces a new kind of technical debt.** When you write code yourself, the code reflects your understanding: your mental model is embedded in the structure. When Claude writes the code, there is a gap between the software and your comprehension of it. This gap is a form of debt. Every feature you add without fully understanding the underlying implementation increases this debt. And unlike traditional technical debt, which can be paid down by refactoring, this debt can only be paid by re-learning what you delegated, which few people will bother to do.

**It makes you move fast, perhaps too fast.** The speed is intoxicating. The ability to go from idea to prototype in an afternoon creates a compulsion to keep building, to keep adding, to never pause and ask whether the thing you are building is the right thing. I found myself, more than once, three features deep into something that should have been reconsidered two features ago. Speed without reflection is just sophisticated waste.

## Working Fast and Slow

In his *Six Memos for the Next Millennium* (the American lectures he never got to deliver), Italo Calvino wrote about *Quickness* and *Exactitude* as complementary literary virtues. Speed, for Calvino, was not about rushing. It was about agility of thought, the ability to leap between ideas, to make unexpected connections. But quickness without exactitude was hollow, a firework without a structure to illuminate.

I think about this often when working with Claude Code, because the experience naturally splits into two very different tempos.

There is the fast mode: intuitive, generative, almost reckless. You throw an idea at Claude, you get a prototype in minutes, you play with it, you change direction, you try something absurd just to see what happens. This is the mode of exploration, of proof of concept, of "what if". It is deeply enjoyable, and it is where most of the creative energy lives. It is the mode in which dead projects resurrect and new ones are born on a Tuesday evening for no reason other than curiosity.

And then there is the slow mode. The mode of revision, of stepping back and asking hard questions. Does this architecture make sense? Is this the right abstraction? Am I building something I actually need, or am I just building because I can? The slow mode is where you read the code Claude produced and try to truly understand it. Where you write documentation not because Claude can't, but because the act of explaining forces you to confront what you don't know. Where you refactor not for performance, but for comprehension.

The temptation, and I have given in to it more than I'd like to admit, is to live entirely in the fast mode. To keep generating, keep prototyping, keep moving. 
But software that is only fast-drafted is like a novel that is only first-drafted: it may have flashes of brilliance, but it lacks the discipline that makes those flashes cohere into something lasting.


The software developer of the AI age, I believe, must learn to oscillate deliberately between these two paces. Fast to explore, slow to consolidate. Fast to generate possibilities, slow to choose among them. 

Calvino never got to deliver his lecture on *Consistency*, the sixth memo he was writing when he died. I sometimes wonder if that is the one we need most.


## What Am I Going to Do

So, after three months, where do I go from here?

The first thing I need is more control. Not control over Claude, exactly, but over the process that surrounds it. Right now, I feed Claude instructions, it produces code, and I evaluate the result. But the intermediate steps, the decisions it makes about architecture, the trade-offs it silently resolves, the patterns it chooses and the ones it discards, are largely invisible to me. I am already working on tools to change this: small utilities (written, yes, with Claude Code) to monitor AI decisions, to map software architecture as it evolves, to make the black box a little less black. I want to see the scaffolding, not just the building.

The second thing is a deliberate shift in what I study. If the implementation layer is increasingly handled by AI, then my value lies in everything above and around it: software architecture, product management, UI theory, algorithm design, system thinking. These are the disciplines that are agnostic of programming language, that will remain relevant regardless of which model is generating the code. I need to become better at the things that Claude cannot do for me: deciding what to build, for whom, and why.

The third thing is to get better at the input side of the equation. If AI writes the code, then the quality of what it produces depends almost entirely on the quality of what I give it. That means learning to write better specs: clear, structured, unambiguous descriptions of what the software should do, grounded in real software development frameworks. It also means learning to design tests, not as an afterthought, but as a first-class part of the specification itself. A well-written test is, in many ways, the most precise spec you can give: it says exactly what the system should do and provides an automatic way to verify it. I want to become fluent in translating intentions into acceptance criteria, use cases into test suites, and vague ideas into something a machine can act on with precision.

The fourth thing, and this is the hardest, is to slow down. I need to resist the compulsion to throw projects at Claude the moment they cross my mind. I need to build an AI development framework that I feel comfortable with, a personal methodology for when to use the fast mode and when to stop and think. Right now, the process is ad hoc, driven by excitement and momentum. That is fine for the first three months, the honeymoon phase. But if I want to build things that last, I need structure, not the structure of code, but the structure of practice.

I do not have all the answers yet. I am not sure anyone does. We are in the earliest days of a transformation that will reshape not just how software is written, but who writes it, what it means to write it, and what we lose and gain in the process.

So, brace yourself. Let's see what my AI assistant will write about this in five years.
