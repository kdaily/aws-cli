# Contributing

Thanks for your interest in contributing to the AWS CLI! We want to be sure that we get effective feedback on the features and improvements that the community needs while maintaining a high bar of code quality, stability, and robustness. Contributions come in many shapes and sizes, and we’d like to make it easy for you to find a place to help.

This guide is meant to help you be successful as a contributor. It defines what the process is for raising new issues and working on existing ones.

This document contains guidelines for reporting issues or pull requests and contributing code.

## How to Help

### Review and fix the documentation and examples

We work hard to review and keep them updated, but inevitably there are typographical errors and inconsistencies in documentation and examples. We accept contributions that fix documentation inside of code as well. It’s also important to keep in mind that much of the documentation is automatically generated from API models, and these changes need to be made upstream. The best way to find this out is to file an issue, and someone can help you determine if it’s a documentation change that is good for contribution, or if it needs to be passed on to another team.

### File an issue

We accept three types of issues through GitHub: bugs, feature requests, and guidance. Each one of these has a template to provide enough information for us (and the community) to move forward with it. An issue may start out as one and change to another once more information is provided.

If you encounter a bug or feature that already has an issue for it, please let us know of your experience with a comment in the existing issue. Useful comments are those that verify the issue in a different environment, or to identify a workaround. 

Issues are also applicable to problems with our documentation. If there is incorrect or missing information, a typographical error, or an example that no longer works, let us know through an issue.

If a bug fix or feature request is highly desirable for you, reacting with a 👍🏻 on the initial comment is the preferred way to indicate your support! Please refrain from commenting “+1” separately, as these types of things are hard to quantify. We can use the number of reactions to help prioritize community submitted issues.

### Submit a Pull Request

If you have a fix for a bug or an implementation for a feature request, we would encourage you to make a contribution. In most cases you should open an issue before submitting a pull request to avoid putting in effort that may not be accepted. Having a conversation with our team first helps us to use your time and effort effectively. 

## What to work on

We use GitHub labels to indicate the type, status, and availability of our issues.

### New Issues

If you have a new idea for a feature, improvement, or think you’ve found a bug, you can [open a new issue](https://github.com/aws/aws-cli/issues). We use GitHub issue templates to help you provide the correct information that we need to help. There are templates for the three main areas: feature requests, bugs, and guidance questions. 

Please fill out the entire template with as much information as you can, including versioning, environment, and debug logs. If information is missing, it may delay our ability to respond or take action on it. Once you use one of the issue templates, it will automatically have GitHub labels added to it to help us follow up, and will be marked as needs-triage to indicate that it’s new. We need as much information that you can provide so that a maintainer can try to reproduce or confirm your issue.

If you have a bug report or a question about how something is working, please include a minimal reproducible example for us to investigate. We cannot debug extensive code snippets or provide guidance on using the Python SDK with third party packages, like Django. These kinds of questions are better for Stack Overflow. See our Getting Help guide (LINK!!) for more information.

### Existing Issues

Our [GitHub issues list](https://github.com/aws/aws-cli/issues) is the best place to find out what is available to work on and what work is ongoing. We use GitHub 
labels on issues to help identify what is available. 

All issues are also subject to automated actions to help keep the repository healthy. Issues that do not have any activity on them after 365 days will be considered stale and pending closure. If the issue is still relevant, anyone can post a comment to keep it open.

Once an issue has 5 upvote reactions on the initial comment, it will be reviewed by the maintainers. They will then determine if enough information is provided in the issue to move forward with a community contribution, or that it should be something implemented by the maintainers only. 

### What’s available for the community to work on?

* Something labeled with `help-wanted` (additionally, `good-first-issue`). 

What’s *NOT* available for the community to work on?

* Something labeled with `core-only`
* Something labeled with `blocked` - there is other work or information required first.
* Something labeled with `needs-triage` - this has not been reviewed by a maintainer yet.

**If an issue is missing one of these labels, it may or may not be open for community contribution. Please comment on the issue before working on it so that it can be reviewed and labelled appropriately.**

If something is already labelled `work-in-progress`, you should comment on the issue to see if there is anything that you can help with.

The repository maintainers (or automated bots on behalf of the maintainers) will manage the labels for issues and pull requests, and request information and updates if they’re needed to clarify the status.

### Contribution process
#### New Feature Request or Bug

1. If you have a new idea or identified a bug, then open an issue detailing a feature request or bug report. This is where discussion and feedback can occur, ideally before opening a PR. If needed, a PR can be opened in parallel for a proof of concept and feedback on the implementation, but there should be no expectations for review until it’s discussed in the issue. It’s possible that after discussion the maintainers decide that this issue won’t be considered for contribution. It will be labelled as wont-fix and then closed.
2. An initial review of feature requests and bugs from the community via GitHub issues will be performed within 5 business days to determine if they’re sensible, relevant, and not duplicative.
3. A review of the GitHub issue backlog will be performed for anything else related.
4. Once these have been satisfied, a comment should be added to indicate that this is a valid request and mark it as needs-discussion. It may require more description of use cases and examples, feedback from the community, and upvotes.
5. Issues that have at least 5 upvote reactions will then be marked as needs-review for a more in depth review by the maintainers within 10 business days to determine size, priority, and availability for the community and label it accordingly.
6. Once the issue has been reviewed, the needs-review label should be removed.
7. If the maintainers have determined that this is a issue that can be worked on by the community, it will be labeled help-wanted.  A user can now comment and request to work on an issue that is available for the community.

#### New Pull Request

1. Find an issue to work on that is available based on the guidelines above (e.g., it has the help-wanted label on it).
2. Comment on an issue to say that you’re going to work on it to avoid conflicts with others, including maintainers, who also might be working on it. The issue will be assigned to you and marked as work-in-progress.
3. Write your code:
    1. Fork the repository.
    2. Make a feature branch from the develop branch. Preferably, the base commit for the PR should use the latest commit of develop at the time the PR was created. This helps to ensure there are no merge conflicts or test failures when the PR is merged back to the develop branch.
    3. Implement your change, including tests. Make separate commits for logically separate changes. Avoid commits such as "update", "fix typo again", "more updates". Rebase your commits before submitting your PR to ensure they represent a logical change.  Also, please avoid merge commits. If you want to pull in the latest changes from the develop branch, rebase on top of the develop branch instead of merging the develop branch into your feature branch.
    4. Open a PR against the develop branch. Fill out the template and checklist. If you are working on an issue that is not your own, mention the issue author to pull them into the discussion. The template will prompt you to clearly describe the change being made, the use cases it satisfies, and how it was tested (including edge cases and caveats). Also describe how you would test using the feature as a user to see that it works.
    5. Check to see that the automated tests pass. If not, address anything that is broken.
    6. Request a review from the [TBD] GitHub team. A maintainer should perform an initial review the pull request within [TBD] business days. We will check that the template has been filled out, there is a linked GitHub issue, test exist and pass, and documentation is provided. Other team members may be requested to review the PR as well.
    7. Take any community and maintainer feedback and incorporate it. If there is feedback requested from the maintainers, the issue will be marked blocked. It might also take on other status indicators, like needs-tests or needs-rebase, if the pull request needs to have more tests added or needs to be updated against the main branch.
    8. Once all feedback and reviews have been completed, the issue will be marked ready-to-merge. 
    9. Celebrate once your contribution is merged! It will then be labelled merged. It will then be labelled pending-release.
    10. Once your feature is included in a release, it will be labelled released.


## Contributing Code

The list below are guidelines to use when submitting pull requests. These are the same set of guidelines that the core contributors use when submitting changes, and we ask the same of all community contributions as well:

- The SDK is released under the [Apache license](http://aws.amazon.com/apache2.0/). Any code you submit will be released under that license.
- We maintain a high percentage of code coverage in our unit tests. As a general rule of thumb, code changes should not lower the overall code coverage percentage for the project. In practice, this means that **every bug fix and feature addition should include tests.**
- Code should follow [pep8](https://www.python.org/dev/peps/pep-0008/), although if you are modifying an existing module, it is more important for the code to be consistent if there are any discrepancies. Using [`flake8`](https://flake8.pycqa.org/en/latest/) can assist in identifying `pep8` compliance issues.
- Code must work on `python3.6` and higher.
- The AWS CLI is cross platform and code must work on at least Linux, Windows, and Mac OS X. Avoid platform specific behavior.

### Issue label definitions

We use GitHub labels to communicate the status and categorization of issues and pull requests.

#### Status

The status of an issue determines whether or not an issue is ready to be worked on. 

* `needs-triage` - This issue has not been looked at by the maintainers and is not ready for work.
* `needs-discussion` - This issue is open for discussion or feedback from the community before it can be worked on. This might include more use cases or evidence that it’s applicable to a larger audience.
* (bot enabled) `response-requested` - waiting on feedback from the requester. If no response after seven days, issue will be marked as stale (`closing-soon`).
* (bot enabled) `closing-soon` - the issue is stale and subject to being closed in four days. An issue can become stale if a requested response is not provided in seven days (`response-requested` label), or if there is no activity for 365 days.
* (bot enabled) `closed-for-staleness` - the issue was stale and automatically closed. An issue is stale if a requested response is not provided in seven days (`response-requested` label), or if there is no activity for 365 days.
* `blocked` - The issue is not ready for work because of other work that needs to occur first.
* `work-in-progress` - The issue is currently being worked on.
* `ready-to-merge` - The pull request for the issue is `ready-to-merge`.
* `merged` - The issue has been resolved with a pull request being merged in.
* `pending-release` - The pull request for the issue has been merged but has not gone out in a release.
* `released` - The issue has been included in a release.
* `needs-tests` - The issue needs to have more tests added.
* `needs-rebase` - The pull request is out of date from the main branch and needs to be rebased.
* `needs-review` - This issue needs attention from a core maintainer.
* `wont-fix` - The maintainers have concluded that the issue won’t be accepted for contribution or future work.

#### Accessibility

The accessibility of an issue indicates if it is available for the community to work on. It also highlights issues that new contributors may be more comfortable attempting. Other issues may be restricted to work by the maintainers due to their complexity, scope, or interaction with other AWS teams.

* `help-wanted` - the maintainers have determined this would be open to contributions from the community.
* `core-only` - the maintainers have determined this would not be open to contributions from the community.
* `good-first-issue` - the maintainers have determined this would be good for a new or first-time contributor. You don’t need to be a first-time contributor to work on it, though.

#### Type

The issue type describes the intention of the result.

* `feature-request` - a new feature or an improvement to an existing feature.
* `bug` - a report of a feature that does not work as intended.
* `guidance` - a question on how to use the SDK/tool that can be answered without a code change.

#### Area

The part of the code base that the issue involves. It’s possible that a proposed change could change multiple areas.

* `code` - related to the software code in the repository
* `documentation` - related to user or code documentation
* `ergonomics` - related to how a user or developer interacts with the software

#### Descriptors

These labels are used to provide more context to an issue and help track problem areas.

* `enhancement` - a change to an existing feature.
* Service labels (`s3`, etc.) - The AWS service that is impacted by the issue.
* Other sub-features used to track larger issues (`autocomplete`, `customizations`, `installation`)

## Git Commits and Workflow

When sending a pull request, please follow these guidelines:

- The PR should target the `develop` branch. If you send a PR to the `master` branch, the travis CI jobs will fail.
- Your PR branch should be based off a recent commit of the `develop` branch. Preferably the base commit for the PR should use the latest commit of `develop` at the time the PR was created. This helps to ensure there are no merge conflicts or test failures when the PR is merged back to the develop branch.
- Make separate commits for logically separate changes. Avoid commits such as \"update\", \"fix typo again\", \"more updates\". Rebase your commits before submitting your PR to ensure they represent a logical change.
- Avoid merge commits in your PRs. If you want to pull in the latest changes from the `develop` branch, rebase on top of the `develop` branch instead of merging the `develop` branch into your feature branch.

Also, ensure your commit messages match this format:

    Short (50 characters or less) summary

    After the 50 character summary and a blank line, you can include a body if necessary. Note that the 50 character summary does not end with any punctuation. Describe your changes in the imperative mood, e.g., "Add foo to bar", "Update foo component for bar", "Fix race condition for foo".

    The body of the commit message can include:

    * an explanation of the problem and what this change tries to solve.

    * rationale behind the specific implementation

    * alternatives considered and why they were discarded, if appropriate.

    Please limit the line length in the body of a commit message to 80 characters or less.

### Example Git Workflow

Below is an example of how you can use git to create a feature branch. First, make sure you've created a fork of `aws/aws-cli`. Then you can run these commands:

    # Clone the repo and set up the remotes.

    $ git clone git@github.com:myusername/aws-cli.git
    $ cd aws-cli
    $ git remote add upstream https://github.com/aws/aws-cli.git
    $ git fetch upstream
    $ git merge upstream/develop

    # Now to create a feature branch:
    $ git checkout -b my-branch-name

    # Now add your commits for your features.
    $ git add path/to/my/files

    # Make sure our commit message matches format described in the
    # previous section.
    $ git commit -m "Add support for foo"

    # If we want to sync with the latest upstream changes before
    # sending our pull request we can run:
    $ git fetch upstream
    $ git rebase upstream/develop

    # When you're ready to send a PR, make sure you push your commits
    # to your fork:
    $ git push origin my-branch-name

When you push to your remote, the output will contain a URL you can use to open a pull request.

## CLI Development Version

If you are interested in using the latest released version of the AWS CLI, please see the [Installation](README.md#installation) section in the README. This section is for anyone who wants to install the development version of the CLI. You might need to do this if:

- You are developing a feature for the CLI and plan on submitting a Pull Request.
- You want to test the latest changes of the CLI before they make it into an official release.

The latest changes to the CLI are in the `develop` branch on github. This is the default branch when you clone the git repository.

Additionally, the [`botocore`](https://github.com/boto/botocore) package is developed in lockstep with the CLI.

If you just want to install a snapshot of the latest development version of the CLI, you can use the `requirements.txt` file included in this repo. This file points to the development version of the above packages:

    $ cd <path_to_awscli>
    $ python -m pip install -r requirements.txt
    $ python -m pip install -e .

However, to keep up to date, you will continually have to run the `python -m pip install -r requirements.txt` file to pull in the latest changes from the develop branch of botocore.

You can optionally clone each of those repositories and run \"python -m pip install -e .\":

    $ git clone <botocore> && cd botocore/
    $ python -m pip install -e . && cd ..
    $ git clone <awscli> && cd aws-cli/
    $ python -m pip install -e .
