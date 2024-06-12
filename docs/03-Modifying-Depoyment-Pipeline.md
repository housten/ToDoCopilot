# Modifying the deployment pipeline

Case: We see that we currently have a deployment pipeline in place. This is working but we want to make some changes to it. To be able to make improvements, we need to understand it.

## Understanding the workflow file

- Use the mouse to make copilot to explain the workflow
- Use the slash commands to explain the file `@workspace /explain what does the gh-pages-deploy.yml file do`
- Ask it to explain different parts of the file
- When will this run?
- Why is the permissions set?
- Why should I set specific permissions?
- Create comments for in-line explanation of this workflow

## Change the concurrency

If some new push has happened, I want to discard the current build and just go straight to that 

- `How can I make the build cancel if another run is scheduled?`
- `What are the negative consequences from doing this?`
- `What are the positive consequences from doing this?`
- Make a choice based on the feedback if we want to make this change or not

## Add manual trigger

We want to be able to trigger a new run of the workflow. Maybe what has been deployed has been overwritten by other process, maybe we just want to.

- `How can I trigger this workflow manually?`
- Implement feature.
- `What other triggers can one use for workflows?`

## Add some part that is input dependant

We want to change the title based on the input.

- Open the `App.js` file and ask copilot that `I want the title of the web app to be given by a parameter that I could set in the deployment workflow.`
- Make changes
- `When triggering this manually i want to be able to give the title`
- `now that it is using a parameter, how would this affect the push trigger`
- Can expect some back and forth for correctly getting the desired result
- Add changes, commit them, push and test 
