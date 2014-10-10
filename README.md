sprintQ
=======

An example application is at [sprintq.meteor.com](https://sprintq.meteor.com)!

Create listings of open source issues for sprints or other events

The idea for this project came out of a need at [Classic Graphics](https://knowclassic.com). We encourage the development team to work on open source contribution. I am often asked if I have some "good" issues (fit for skill level and of benefit to Classic) for developers to work on in the open source community, especially on [drupal.org](https://drupal.org). While I keep a number of these issues in OmniFocus, I thought it would be awesome to have a curated list of open source issues.

Another good use case for sprintq is to organize issues for sprints. When you are planning a sprint, just start up a sprintq list and add issues with links to the actual project issues. The list can combine issues from different issue queues and span different types of work (ex: development, documentation, testing, etc.).

During a sprint, just "claim" your issue so others know you are working on it.

# Config

To set up the Github login credentials, create the file server/github-config.js and insert this code:
<pre>
<code>ServiceConfiguration.configurations.remove({
  service: "github"
});
ServiceConfiguration.configurations.insert({
  service: 'github',
  clientId: 'clientId',
  secret: 'githubAPISecret'
});</code>
</pre>

To create the GitHub secret you see above, see [this GitHub blog post](https://github.com/blog/1509-personal-api-tokens).
