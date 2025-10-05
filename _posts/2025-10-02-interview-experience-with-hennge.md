---
title: My experience with HENNGE and my advices for doing tech interviews for Japanese companies
tags: tutorial, job, japan
---
Consider this as my handy guide on preparing yourself for a possible tech job in Japan!

Despite this being my experience with HENNGE specifically, all the info below is super useful for any other company.

If you're interested yourself, consider visiting [TokyoDev](https://www.tokyodev.com/) to see statistics, join the community and see job offers like this one I've tried.



**Disclaimer:**

All the information in this article is publicly available from their own website and job listing. I'm not sharing anything that was given to me specifically or anything that was "leaked" on the internet.



**Table of contents**

1. How their interview process works?
2. Do your research about the company!
3. My tips for technical challenges
4. My tips for resumés
5. My tips for cover letters
6. My tips for casual interviews
7. My tips for technical interviews
8. My response from HENNGE and why I think I was rejected
9. Conclusion



### How their interview process works?

It consists of few typical steps but in an order I personally enjoyed:

- A 3-step self-paced technical challenge that is fairly easy (Coding, Hosting & Submission)
- Submission of your Resumé and a Cover Letter (the later is super important)
- Casual interview
- Technical interview
- Technical team interview
- CEO interview (which can be technical a bit)

There's also a personality test and some HR calls inbetween if things are going smoothly.

I recommend checking out  their [blog post about the hiring process](https://hennge.com/global/info/henka/interview/202406-demystifying_hennges_hiring_process/) AND [the company intruduction](https://speakerdeck.com/hennge/company-introduction-deck-hennge)  for info - They also share some interesting statistics about how many people apply per position and how many make it to which screening step.



### Do your research about the company!

**I strongly recommend** you to dive in and learn everything you can about the company, its history, position in the market, the CEO, the products and everything anyone who has worked on it has to say on the topic! Companies these days will have several social media pages such as LinkedIn, their own blog or articles somewhere, Instagram, Youtube and sometimes even discord! Make sure to check these out!

**Having no doubt about the business AND their products will help you wonders during your interview, trust me.**

Doing reputation research is also important as a way to balance out good and bad opinions about the company so you don't find yourself in a place you wouldn't want to be as far as expections go.



### My tips for technical challenges

These are fairly specific from company to company, I strongly recommend doing 1 LeetCode a day or practicing with the technologies you're most familiar with - create projects or improve existing ones (which are great ways for expanding your portfolio in the process).

Here are some suggestions for the challenges themselves, specifically self-paced ones:

- **Read the instructions as many times as you need**, pay attention to the wording of what is required and expected. This is easily overlooked!
- Pay attention to the constraints and if your code should handle edge-cases/exceptions! I personally only handle if they specify the expected behavior, otherwise I just add a comment on the matter!
- Use clean code principles: Appropriate naming for functions and variables, good use of parameters, well defined functions, and so on!
- A well-written docstring/documentation - Don't leave doubts about the method, parameters, outputs and its caveats!
- Use type hinting in Python, it's a must these days!
- Don't over-engineer something that can be simple! It's less prone for failure/mistakes down the line! No one wants to deal with code no one can easily understand or predict!
- Make sure to use the language's set of good practices and safety measures (basic stuff as how to properly initialize and deal with variables, limitations and so on)
- Make unit tests in case you're given examples of inputs and outputs!
- Use Linters/Static code analysers such as Pylint, Flake8, Mypy, etc...
- Use code formatters such as Black, isort, autopep8, etc...
- Test your solution and double check for any detail that you might have missed!

Keep in mind **your submission is a "sample" of how well your code is structured and maintainable within their codebase as well as your ability to interpret a task**. None wants poor solutions, badly written spaghetti code with no documentation whatsoever! The use of the tools I mentioned will greatly showcase your expertise and maturity working with real world codebases.

It's also important to **learn about the solution** you copied or came up with. You must be ready to explain in great detail questions such as:

- How did you start working on this challenge?
- Can you explain the algorithm or solution you used to resolve the challenge?

It's no use to write code you don't understand or can't explain to a coworker or even junior developer. It's not a problem to copy solutions that are known to work and are reliable as long as you know why.

You can try using LLMs to help you judge your code before submission using the challenge itself as context. Here's a sample prompt that worked well for me using Grok:
```
In the role of a senior software engineer that is in charge of evaluating my coding challenge submission, make a list of assertions on the things I did right and the things I did wrong and how to improve it.

Use the attached challenge and submission files for context.
```

It also works well for suggesting improvements but **make sure you're the one making the decisions** since LLMs tend to go overboard with its analysis.



### My tips for Resumés

Japanese companies hiring abrod will likely be accepting western-style resumés so there's no secret here. I'll just reiterate on some obvious points and how I crafted my own resumé painlessly.

- Make sure to tailor it specifically for the job role, including skills and experiences that correlate to what the company is looking for.
- Make sure to include your Github and LinkedIn. It's ok to add a third link for your own blog or something relevant like LeetCode.
- Make sure your roles are well detailed and explained from current/previous jobs, this is a key interest for the hiring team.



My suggestion for contents and ordering of your resumé:

- Your name and contact information
- Professional Summary
- Professional Experience
- Education
- Skills
- Certifications
- Projects
- Languages



**Want to save time on creating resumés?** 💡

I made a dedicated article on how to use your LinkedIn and Grok (or other LLMs) to generate great drafts to work on, thus saving a lot of time in this process!



### My tips for Cover Letters

According to HENNGE's [own article](https://hennge.com/global/info/henka/interview/202403-crafting-the-perfect-cover-letter/) on crafting cover letters, they read each one manually and take deep consideration on the content when making the decision on moving you to the next stage.

- I used a similar prompt from the Resumé step but instead asked for generating a cover letter (including the job listing AND their article for reference). It was my first time making a cover letter so I needed some guidance.
- I used the draft as a guide for rewriting each paragraph's idea with my own thoughts and words since I can do it infinitely better with my knowledge not fully available on my LinkedIn.
- Again, if you're from abroad, make it clear on why you want to relocate to Japan.
- Generally, the cover letter consists of a single page or an extra paragraph at most. My paragraphs were written with these ideas respectively:
  1. The reason why I want to join the company and move to Japan.
  2. The reason why I think I'm a good candidate for the role listed.
  3. My achivements and milestones from my experience and how they translate to the company I'm applying.
  4. Short message thanking for the time and opportunity.



### My tips for casual interviews

As far as japanese etiquette goes for interviews, I was dressing a suit, white shirt and black tie while sitting straight. I don't think the dressing code it's required these days but you never know how traditional the company is regarding this expectation.



Companies kindly ask not to share the specific questions being asked - I don't think it's a big deal for a few reasons but I will respect their wish. It's also a no brainer to prepare yourself for some common (should I say expected?) interview questions such as:



- > Can you briefly introduce yourself?

Here you say your nome, where you're from, your higher education, your past few experiences and current role - You can finish it talking about a few hobbies.



- > Why did you choose Japan to work in/relocate to?

This varies from people to people but it's important to make it clear that you're no stranger to Japan's culture and is deeply invested in a long-term relationhip with the country and do not plan on leaving soon. Don't be generic or disconnected with reality by saying you just like "anime" or "food".



- > Why did you choose our company specifically?

It's important to have some honest arguments here, such as things that caught your attention, the proposal of a good working place and a role that captivates your motivation. It's important to also align with your career goals - make it clear you want to do this and why.



- > How's your Japanese level?

While fluency is not required, they definitely want someone invested and learning.



- > Name positive(s) and negative(s) aspect(s) about yourself

This is where you can shine and be honest about yourself. Don't say you're bad at what you do or that you're a perfectionist for crying out loud.



- > Do you have any questions about the company?

It's also a key point to show some genuine interest in the company, its products, the job listing etc. Have at least one!




**Disclaimer:**

All of these questions are extremely predictable and can be seen in almost any interview if you look up guides and videos about it on the internet. I will not confirm if these questions were in fact asked during my own casual interview, but I can say I was prepared to answer these questions just based on my research as I previously stated. To prove my point, here's few articles with the same questions: [tokyodev](https://www.tokyodev.com/articles/tips-for-interviewing-at-japanese-tech-companies), [japan-dev](https://japan-dev.com/blog/japan-job-interview-questions), [gaijonpot](https://blog.gaijinpot.com/basic-japanese-job-interview-questions/), [surapera](https://blog.surapera.com/en/japanese-job-interview/)



### My tips for technical interviews

Here's some golden tips:

- Companies sometimes share their tech stack so you can study every single technology in advance. The job listing on itself is already a hint on the most important ones.
- You can also predict what technologies they must be using based on the description for their product in the job listing. Eg. Databases for storing X data, Containers for running Y applications and so on...
- If you don't have experience with a specific thing, you may mention or claim how familiar it is with something you use instead.



The interviewers are technical seniors so you can imagine the questions will likely be something like this:

- > Brief introduction of yourself 

- > Do you know what is <tool or concept>?

- > Are you familiar with <tool or concept>?

- > Do you have examples of using <tool or concept> in the past?

- > How long have you been using <tool or concept> for?

- > What are some projects or solutions you're proud of?

- > Do you have any success story or learning from a complicated situation?

Here you can use the STAR method (Situation, Task, Action, Result) as a structure to help you reply to this one.



**If you don't know something you better be honest about it**, none wants to work with someone dishonest or overly confident.



**Disclaimer:**

All of these questions are extremely predictable and can be seen in almost any interview if you look up guides and videos about it on the internet. I will not confirm if these questions were in fact asked during my own casual interview, but I can say I was prepared to answer these questions just based on my research as I previously stated.



### The response from HENNGE and why I think I was rejected

After 2 weeks of no response, I decided to send an email asking if the screening process was still ongoing and few days later I received the most motivational decline I've ever seen - most companies will just say decline right away and that's it.

The recruiter complimented my background, communication style, professionalism, personality and approach - and said that they wish I could stay in touch and reapply in the future.

They did mention that **I didn't have the expected expertise with AWS's catalog of products** which is fair enough, despite the fact that **I have expertise with a competitor's catalog of products** - I explained how **they're quite similar and even easily interchangeable** during my interview as a way to redeem myself. But oh well.

I'm quite demanding on myself regarding how I do things - I always want to do my best and show what I'm capable of - I can easily pinpoint few things that could've been lots better:

- I was as nervous as I possibly could unfortunately. This was my first interview for a Japanese company and I did not know if I'd be able to do it.
- I was quite focused on the Japanese etiquette, fearing I'd make a fool of myself if not done properly.
- The timezones were brutal on me, so I was naturally tired when these started past midnight.
- Because I was nervous and tired, my speech fluidity was fairly impacted, I was looking for words and things I didn't want to forget to tell sometimes.
- I wasn't direct and to the point while answering in one or two occasions, perhaps I was trying to show some correlated/contextual knowledge while trying to answer a simple question.
- Despite my sincere interest with SecOps, I don't have strong certificates or an awfully specific track record on the matter, such as doing penetration tests and so on.
- I never deployed or used resources on AWS due to my fear of being charged a ton by accident, so I couldn't say I had experience specifically with it.

All in all, they're probably used to candidas being extremely nervous so they probably don't mind as long as you're polite, answer questions truthfully and do your best. In that regard, I have to give myself some credit for telling them everything they needed to know and having the experience I worked hard on for myself. It's just a matter of being more prepared the next time around.



### Conclusion

I'm really really happy with how far I managed to get, I did not even expect to pass the coding exam but now I have reasons to believe I nailed it completely. ^_^

I did spend an awful lot of time preparing myself and researching every single aspect of this experience. I hope this article can serve as a helping guide to be as prepared as one can possibly be to pass on a tech interview for a Japanese company.

It's hard to quantify hours but **I did spend quite a handful of evenings** after my current job's shift was over to dedicate myself to the process. I don't know how people manage to apply to several jobs at the same time but I understand the frustration that comes from spending so much time in a single listing and just fail nevertheless. Investing on more than job listing is by far the best approach for someone looking to succeed.

I plan on doing few AWS and SecOps related certifications in order to be more up to the expectations and will try again in 9 months. Wish me luck!

