---
title: Generating Resumés with LLMs
tags: tutorial, job, ai
---
The recipe is simple: Using your own LinkedIn and the Job Listing blended together to generate a good draft of a resumé.



**Here are the requirements:**

- Your LinkedIn profile up to date with anything work, education or certification related, as well as personal projects.

- Make sure to have a proper introduction on yourself in there!

- Make double sure to include proper detailed description on what you did on your previous/current jobs!



#### First step - Save your LinkedIn profile as PDF

- Log into your account and go check your public profile:

- Top right corner (Me) > Settings & Privacy > Visibility > [Edit your public profile](https://www.linkedin.com/public-profile/settings).
- Using the browser's element picker, erase sidebars and anything unrelated to yourself. Make it as clear as possible for the LLM.
- Download the resulting page as PDF (Ctrl + P)



#### Second step - Save the job listing as PDF or Markdown.

- Just like in the first step, try making sure only the listing and information regarding it is in the resulting file, thus reducing chances of 



#### Final step - Use a LLM of your choice

- I recommend using Grok with a simple prompt like this: 

```
Using my LinkedIn profile file attached, generate a resumé for the job listing (also attached) following these instructions below:

- Do not make up information or experience not mentioned in the LinkedIn file, this must be honest and truthy.
- It's ok to infer some knowledge, eg. If I know how to use cloud services, then it's ok to assume I know cloud concepts.
- Prioritize skills and learnings that are beneficial to the role.
- Make sure to include the description of my previous job roles in detail.
- Make sure the technical skills section is a markdown list with each item being a category followed by its contents eg. "Programming languages: A, B, C" or "Frameworks & Tools: X, Y, Z.".
- Make it aligned with the recruiting team's expectations as far as formatting and professionalism is concerned.
- In the "Certifications" section, only include up to 10 entries with a focus on quality and relevance to the skills required in the job listing.

Print the resulting resumé in markdown format so that I can edit later.

```

- This prompt should generate a reasonably good draft to work on.

- You may also ask it to judge the final version of your resumé using a prompt like this:

```
In the role of someone from the talent acquisition team reading my attached resumé, judge my candidacy based on the attached job listing.
Make sure to point out things I did right and wrong and how to improve it if necessary.
```

