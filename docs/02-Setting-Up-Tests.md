# Setting Up Tests

We have some tests created for this repository. Let's add a few more.

```prompt
Please suggest some more tests for my ToDo app
```
Notice that one reference was used. Show using @workspace
```prompt	
@workspace I would like to generate some more tests for this todo app.
```
Point out that more references were used.

Accept the changes, or not.

Point out the recommended next question, if it is a little interesting. If For example, in my case it was:
<br />
![Copilot suggests asking mimicking user interaction](images/prompt.png)
If suggestion is not so relevant, suggest the participants keep an eye on the suggestions.

Currently the developers are to make sure that these runs before making a Pull Request. 

We want to enforce this as mistakes happen, and it is important for us to know 100% that all changes have been tested.

We'll ask Copilot to help us creating a workflow to help us enforce this.

```prompt
How can I ensure the tests always run before a pr can be accepted?
```

(IF it suggest something else than GitHub Actions)
```prompt
it needs to be already integrated with github
```

We can see that we get some workflow suggested. We create a file based on this content. 
Note: a lot of these versions and packages are outdated. This is a limitation of using Copilot as the training data was last updated some years ago. 
We take a look to find the correct version numbers. 

We decide that we'll need to test this both for node version 18 and 20. We might want to support this in different environments, some which are outdated.

```prompt
can i run the tests for more than one version?
```

Now we have some tests that we can run. Lets commit and push this, and lets create a PR to test it. If it doesn't run, let's try to fix any errors.

When we create a PR we can show how copilot can help create a description and to explain the changes in the PR.

We want to reuse these steps in other workflows. We'll ask Copilot to make this happen
```prompt
I want to resuse these steps in other workflows, how can I reuse them?
```

If it suggest an Action, you can go with that. If you want to go for a reusable-workflow, ask it if there is another way.

Ask it to create a reusable workflow. Use this reusable workflow in both the test workflow and in the deploy workflow. You can ask Copilot to help you with that process. For the deployment workflow, specify that the tests needs to run before the build step. This should suggest the `needs` setting.
