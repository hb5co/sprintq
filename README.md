sprintQ
=======

An example application is at [sprintq.meteor.com](https://sprintq.meteor.com)!

Create listings of open source issues for sprints or other events.

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
