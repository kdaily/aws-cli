# Improvements to the AWS CLI Contribution Process

Proposal         | Metadata
---------------- | -------------
**Author**       | Kenneth Daily
**Status**       | Proposed
**Created**      | 19-October-2021

## Abstract

This document proposes standards and processes to improve and publish community
expectations for contributions. It defines the process for proposing,
submitting, and reviewing a contribution. This proposal will make it easier for
the community to successfully contribute to the AWS CLI.

## Background and Motivation

### Terminology

The following terms are used throughout this document:

- The *community* comprises the individuals who use the AWS CLI.
- A *user* is a member of the community who uses the AWS CLI and may open, comment, or otherwise interacts with a GitHub issue.
- A *contributor* is a user who makes a contribution to the AWS CLI via a pull request.
- The *maintainers* are the individuals that have the ability to make changes to the GitHub repository.

### Current contribution process

The AWS CLI GitHub repository is available for any individual to report bugs, make
feature requests, and ask guidance questions through GitHub issues, as well as
open pull requests to propose code changes. There are currently roughly three
stages to manage contributions that are common to open source projects: intake,
implementation, and review.

#### Intake

GitHub issues are triaged regularly to determine that they are correctly
categorized and express a real and relevant problem or request. An answer is
provided as soon as possible to acknowledge or resolve the issue. Feature
requests are reviewed for general suitability and uniqueness, but are not
actively commented on by maintainers to move the feature forward to a
contribution from the community. Users can vote for features via "reactions" on
the issue. The popularity of an issue is occasionally used to determine which
features the maintainers will work on.

#### Implementation

Users can open pull requests to propose changes that address bugs or feature
requests. There is no requirement to work on an existing issue in the GitHub
repository or to discuss a contribution prior to opening a pull request.
Occassionally guidance is provided to the contributor to improve the proposed
change.
#### Review

Pull requests are selected for review opportunistically when the maintainers
have decided separately that a change or feature should be incorporated.
Reactions and comments can influence the likelihood of prioritizing a
contribution, but they do not guarantee it will be reviewed. 

When a feature is selected for review it is added to an internal queue. This
queue manages the prioritization of these features but is not visible to the
community. 

The change is automatically tested to indicate if it is compatible with the
existing code. Maintainers review and request changes to a contributor's GitHub
pull request. Maintainers may also push changes directly to a contributor's pull
request in order to expedite completion of the contribution or if the
contributor is no longer engaged. In some cases, the maintainers will open their
own pull request if the proposed change is not acceptable as is or they fail to
find an existing pull request. When the pull request is completed to the
maintainers satisfaction, it is merged in for the next release.

#### Documentation and tracking

The GitHub repository hosts a [contribution
guide](https://github.com/aws/aws-cli/blob/2069bf6735560da48440b743eb323488df5fa6c8/CONTRIBUTING.md),
standard to many open source projects, to provide guidance on contributing code
to the project. The current guide describes at a high level how to report an
issue or request and states the minimum requirements and suggestions for a code
contribution. It describes how to perform the basic tasks using Git, including
retrieving and building the development version. It does not describe what the
review or acceptance criteria are for a contribution, nor does it state what is
expected of the contributor or maintainer in the process.

### Problems with the current contribution process

The AWS CLI has a backlog of hundreds of feature request issues and pull request
contributions. This section provides detailed use cases that demonstrate
limitations of the current feature request and pull request review process that
resulted in this backlog.

#### No indication of what to contribute

The AWS CLI has a list of open issues which are curated into bugs, feature
requests, and guidance questions. We do not state which issues are available for
community contributions. This results in users spending effort that ultimately
will not be used. For example, users frequently propose changes to waiters and
paginators. These are standardized across AWS SDKs and implemented by the
service teams, who know how to provide the best performance and experience.

We need a curated list of issues to know what is available for contribution and
what is not so that their efforts are used effectively. This would help users
and maintainers focus on relevant issues and work more effectively.

#### Competing priorities and limited bandwidth to work on popular requests

There are 95 open issues that have 10 or more upvotes, indicating broad
community interest. That volume is not tractable for the maintainers to
implement themselves. Community members need to be able to contribute more
easily while balancing the efforts of maintainers to conduct thorough reviews of
code before merging.

We need to collect and review user feedback to decide which requests are of
interest for community contribution. We need to tell users how they can provide
contstuctive feedback. The maintainers have limited bandwidth and competing
priorities. We need to strategically and fairly manage the amount of in flight
work so that open requests do not pile up. 

#### Limited information on how contribute

The AWS CLI has a [contributing
guide](https://github.com/aws/aws-cli/blob/2069bf6735560da48440b743eb323488df5fa6c8/CONTRIBUTING.md)
focused on the technical aspects of writing code for a contribution. However,
the guide does not discuss how to contribute. We get frequent requests to
contribute on specific issues, but it requires significant effort to respond to
these requests individually. This also contributes to the negative sentiment
that issues are not resolved and there is no path for the community to
contribute. Users often express frustration that they cannot make a change.

We need a well-documented guide and process for the community to know how to
contribute, what the requirements are, and what to expect from maintainers. This
will help users and maintainers focus on relevant issues and work more
effectively.

#### No active triage or first response

[Pull request 3174](https://github.com/aws/aws-cli/pull/3174) adds MFA
functionality to support cache usage. It is the pull request with the most
upvotes (55 👍🏻 reactions) since being opened in March 2018. It was proposed as
an [issue](https://github.com/aws/aws-cli/issues/3172), and no comments from AWS
have been made since then. It is still getting comments noting the need as of
April 2021.

This demonstrates the lack of response to and resolution of a popular issue. We
need to triage, respond to, and review community contributions in a timely manner.

#### Unprioritized contributions

Some pull requests have correspondence from maintainers indicating interest in
the change, but then have remained unprioritized and incomplete. For example,
[pull request 2105](https://github.com/aws/aws-cli/pull/2105) makes S3 sync
command excludes files more efficiently. It proposes to fix issue
[#1138](https://github.com/aws/aws-cli/issues/1138) that had tacit approval from
the maintainers. It was subsequently left uncompleted by the original author,
but picked up by another community member and improved in a related [pull
request](https://github.com/aws/aws-cli/pull/5425). No further interaction from
the maintainers has occurred.

Without well-defined next steps for the maintainers, these requests are
deprioritized first. A community contribution should not be left in an
incomplete state or waiting on a maintainer; it should be resolved by merging it
or closing it. When an issue is raised and reviewed, we need to prioritize it
and see it through.

#### Pull requests with limited background and context

Many pull requests come as unsolicited changes that often do not correspond to
an open issue that has been discussed by the maintainers or the community. They
often end up lingering with no communication from the maintainers to indicate
the feasibility or appropriateness of the changes. As an example, [`aws-cli`
pull request 2636](https://github.com/aws/aws-cli/pull/2636)  adds functionality
to configure MFA. It adds or alters 231 lines of code across five files, and is
a significant new feature. There is no open issue or discussion about the
feature other than on the PR. It has no comments from AWS employees, other than
to indicate that it is a “large” pull request, since 2017. Conversation
continued for a year on the PR by interested users with no other interaction or
guidance from AWS.

A idea that has not been vetted by the community and the maintainers is
difficult to approve; it's hard to have a conversation when it involves an idea
proposal as well as code changes. It usually ends in an unmerged pull request or
significant code revision, which is effort that was unnecessarily expended by
the user and potentially the maintainer. We need a structured, transparent
process for the life cycle of an idea that can culminate in a community
contribution.

## Goals

The approach for customer contributions should satisfy the following goals:

1. Users should know what is available for contribution. It should be clear
   where they can spend their efforts that will be accepted.
1. We should prioritize issues based on feedback provided by the community to
   focus the efforts of the maintainers and the community. Users should know how
   to provide that feedback.
1. Users should know how to contribute. The should be able to reference
   documentation to make high quality contributions. It should be accessible to
   first time contributors.
1. All requests should get a response from the maintainers. Communication from
   maintainers should happen in a timely manner, even (especially!) if that’s
   saying no. An initial response to open PRs should occur within [TBD] business
   days.
1. A contribution should not be left abandoned. The maintainers are responsible
   see it through to a conclusion.
1. Contributors should know exactly what to expect when interacting with the
   maintainers. The current status should be clearly indicated and the next
   steps well defined.

## Specification

 ![Figure A: Flowchart of contribution guide review
process.](contrib-guide-high-level.png "Figure A: Flowchart of contribution
guide review process.")

**Figure A: Flowchart of contribution guide review process.**

We propose to formalize the existing intake, implementation, and review stages
to provide clarity and transparency to the community. In addition, we will add
in specific stages to define what issues are available for contribution and what
pull requests are currently being reviewed. Figure A demonstrates how a request
and contribution will proceed through the improved process.

In addition, we will publish an improved contributing guide to document the
review process, acceptance criteria, and expectations for communication. We will
use existing issue labeling in conjunction with a GitHub Project to provide
transparent status to the community to indicate what is available for
contribution and to track the progress of a contribution.

The following sections detail the proposed improvements to the existing process. 
### Intake

The intake process identifies changes, through GitHub issues, where community
contributions are welcome. The maintainers will actively review GitHub issues to
make this determination. Depending on the issue type (bug or feature request)
and area (code or documentation), a set of criteria must be met before marking
it as ready for contribution. The criteria used to make that decision may
include:

1. The change is feasible for a community member to contribute. See the appendix
   for a definition of what would not be feasible for community contribution.
1. There is enough detail provided for the maintainers to agree with the
   implementation plan.
1. Specifically for feature requests, the change must impact a minimum of 10 of
   users, measured by GitHub :+1: reactions.

Once these criteria have been met, an issue is available for the community to
contribute. 

Issues that do not meet these criteria are subject to existing automated issue
closure mechanisms. The maintainers will request community input before they are
automatically closed if there are not enough upvotes (10) and no activity
(comments or upvotes) for a year.

### Contribution-ready

Issues that are ready for contribution will be labeled and added to a queue
where users interested in contributing can discover what is available. Any issue
that has been marked as available is open for a community contribution through a
GitHub pull request.

### Implementation

An issue moves from the contribution-ready phase to the implementation phase
when a contributor opens a pull request for the issue. In addition, a user can
comment on the issue that they are planning to make a contribution. While not
required, this can be an indicator to the community that work is ongoing and
should be contributed instead of duplicated. The contributor can then implement
their change using the CONTRIBUTING guide as a reference. They open a pull
request linked to the issue.

When an issue is being worked on by a contributor, the maintainers will provide
guidance and support. They will engage with the contributor for discussion of
implementation details or questions that arise during the contribution. 

When the contributor feels that they have completed their work, the contribution
is marked as ready for review. The contribution is then given an initial
inspection by the maintainers to confirm:

1. It is implemented in the manner described in the issue.
1. It passes all validation checks, including tests (both new and existing),
   code linting, and style checks.

Validation checks are automated. Determining if the implementation matches the
proposal requires a manual check that should be performed at a cursory level. If
the requirements are not satisfied, the maintainers will comment on the issue
indicating what is work is needed. If a pull request becomes stale because the
contributor is no longer actively engaged or working on it for more than [TBD]
days, it should be reviewed to see if it is suitable for the maintainers to
finish the work or marked as stale and sent back to the queue of issues ready
for contribution.

Once these requirements have been satisfied, the pull request can be added to a
queue for maintainer review. We will initially respond within [TBD] business
days on a PR that is ready for review to acknowledge the request. This does not
guarantee how long it will be until the PR is merged.

### Review

We will maintain a queue of issues that are ready for review once they are
through the implementation and ready for review stage. 

We do not want to discourage users from contributing or proposing changes, but
we need to acknowledge that the maintainers still have limited bandwidth to give
feedback on implementation or design and review pull requests. We will limit the
number of in flight pull request reviews to [TBD]. The maintainers will select
issues for review based on their age, complexity, and time availability. Bugs
and documentation changes will be prioritized over feature requests. In
addition, completing the review and acceptance of existing PRs will be
prioritized over new review requests.

The maintainers will review the pull request and provide any comments, feedback,
or requested changes. If changes are requested, the contributor should make the
changes within [TBD] business days. If a pull request becomes stale because the
contributor is no longer actively engaged or working on it for more than [TBD]
days, it should be reviewed to see if it is suitable for the maintainers to
finish the work or marked as stale sent back to the queue of issues ready for
contribution.

Once a pull request is complete with to the satisfaction of the maintainers, it
is approved and can be merged and acknowledged as contribution from the
community.

If a pull request becomes stale but there is sufficient work to
complete it, the maintainers will complete the pull request. If after review and
the maintainers agree that the implementation is not as discussed or there is
not significant demand or bandwidth to complete it, the issue may go back to the
intake stage and be available for another user to contribute a change.

If an issue has not been explicitly marked as being available for contribution,
it should not be expected that a pull request will get a review.

## Implementation

The contribution process will be formalized by extending the use of GitHub issue
labels along with a GitHub project to curate the list of issues available for
contribution and track their progress towards completion. Labels will be used to
drive the movement of the issue through the stages of the process. This will
move the issue between lanes of the GitHub project.

The first lane in the GitHub project will be the list of issues available for
contribution. This is the entry point for a user interested in contributing.
After a user comments that they would like to work on an issue, it will be moved
to the implementation lane. The maintainers and other users will be able to see
what is currently being worked on by the community.

## Managing the existing backlog

As of 2021-12-15, there are 188 pull requests and 436 issues in the AWS CLI
GitHub repository. 43 pull requests and 87 issues have not been updated in more
than a year. 95 issues have ten or more upvotes. [TBD] of the open pull requests
are directly related to an existing feature request. [TBD] of open pull requests
have extensive merge conflicts.

Based on these numbers, we propose to review and close existing pull requests in
two phases:

1. We will use existing automated infrastructure to comment on ancient pull
   requests, defined as no activity in more than a year and less than 10 upvotes.
   This will post a comment indicating that the issue will be closed without
   further interaction from the community.
2. Next, we will determine if any remaining remaining open pull requests meet
   the criteria for "ready for contribution" or "ready for review". If a pull
   request does not meet the criteria for either of these states, we should post
   a comment to indicate what needs to be done and give the contributor [TBD]
   days before the pull request is closed. If there is no response, the work is
   not completed, or they respond that they are no longer interested in working
   on it, we will close the pull request. If the request meets the criteria for
   'ready for contribution' but not 'ready for review', we will comment in the
   linked issue that it is no longer being worked on and is available for
   contribution.

## Rationale/FAQ

### Q. Why do we limit the number of in flight reviews?

The maintainers have work that comes from outside of the GitHub repository that
needs to be prioritized along with user contributions. Controlling the volume of
pull request reviews and prioritizing completing the in flight reviews over new
reviews will result in a shorter time to merge and release a contributor's
change for a feature requested by the community. It will also reduce the amount
of context switching for the maintainers, allowing them to focus on giving high
quality feedback to users. As we use this framework to process existing feature
requests, we can revisit what the in flight limit should be. 
### Q. Why do we require issues to be opened instead of just pull requests?

Having a defined process for intake reduces the burden on deciding which way is
the best way. We're taking an opinionated stance that code changes made in
isolation generally do not provide enough context on what problem exists and why
the proposed change is the best way to fix it. Reviewing a pull request also
requires significant effort on the part of maintainers - reading someone elses
code can be an intensive task. Before dedicating that effort, we feel that
having a more general discussion about the problem and solutions will help
reduce the overall effort into code review.

Pull requests are often made for problems that only affect the contributor or a
very small portion of the user base. Requiring an issue provides a mechanism to
request structured feedback in the form of "upvotes" or GitHub reactions to
estimate the impact of the issue on the community.

Logistically, using GitHub issues also centralizes the metadata on what work is
available and ongoing via labels. While pull requests are really GitHub issues
with code changes attached to them, it is difficult to interrogate issues and
pull requests together to gather metrics, check on statuses and assignments, and
perform automated tasks. Having all of the labels and data on a single entity
type reduces the burden on maintaining the system.
 
We do not intend this to be a gatekeeping or pointless task. If a user does open
a pull request without an issue, we will use the opportunity to educate them
about our process, and when necessary assist them in opening an issue. We can
also open the issue ourselves on behalf of the user as well.

### Q: What do we do if a user requests a feature or change that would involve a major change in the way the SDK currently works?

There are times when a change warrants an even more intentional and structured
process before introducing a change. For example, a recent proposal for a source
distribution method for the AWS CLI was made. Before implementation was
finalized, the proposal was made public for open comments and to get feedback
that the approach would solve the problems that exist. The change was a major
deviation from how the AWS CLI works currently, and it was felt that having a
formalized process for this change would result in better decisions.

In this case, we would use the same format as this document for a proposal that
would be opened for public comment and review. The document would be
incorporated into the codebase as an accepted proposal as a matter of record.

### Why should there be a minimum number of upvotes or reactions for a feature request?

Feature requests carry a risk of adding new technical debt and increased
maintenance cost and should have a higher bar to be included.

The request should have user impact beyond the individual who proposed it. This
is difficult to measure objectively, but one proxy for impact can be the number
of upvote reactions on the issue. This is intended to prevent narrowly scoped
changes that only affect a single user. It also helps to limit the number of in
flight reviews that the maintainers need to be engaged on, as there is not an
unlimited amount of bandwidth to devote to this task.

At present, there are more than 95 open issues with at least 10 upvotes. We will
use the current upvote counts to review the backlog and identify issues that we
feel would be suited for community contributions. This process can then inform
us how to handle new issues that might be candidates for community contribution.

As part of the contribution guide, we will provide more specific guidance on how
to upvote a feature so we can more accurately estimate user impact.

### Q. What is automated review, and what is human review?

Initially, most of the  will be human review besides code linting and testing.
Automation will be implemented for issue labeling, state transitions, and
template checks. We currently perform these types of processes for issues, and
the proposed process is agnostic to how it's implemented.

### Q. Why are pull requests for documentation changes and bug fixes prioritized over feature requests?

Documentation changes, once triaged and validated, do not need to have upvote
requirements to be available for contribution. Most documentation changes are
generally low risk and should be able to move quickly through the review
process. Documentation changes also have the potential for a high reward,
measured by the number of users who would be impacted by the improvement. In
addition, there are also more maintainers available for validation and review of
documentation changes. Issues for incorrect documentation are treated as bugs
and should receive high prioritization, while confusing or incomplete
documentation are considered feature requests and may recieve lower
prioritization.

Similarly, once a bug has been triaged and confirmed, it should be made
available for community contribution immediately without any upvote
requirements. Bug fixes have an immediate impact on affected users and are
addressed before taking on new potential technical debt from added features.

## Appendix
### Changes that will not be made available for contribution

There are parts of the codebase that are not suitable for community
contributions. They may pose a security risk, be part of the code that is
dynamically generated, may require interaction with internal teams to implement,
or may require knowledge of the codebase that is not well documented. These
include (but are not limited to):

1. Changes to build processes. Some of our build processes are available through
   GitHub, but some are not. We need to carefully test any potential changes to
   be sure that they are compatible with all of our systems.
1. GitHub Actions. Changes to our actions need to be made and reviewed with
   extra scrutiny for security purposes.
1. Changes to models, including waiters, paginators, and resources. These
   requests are cross-SDK and managed by service teams so that all SDKs can use
   them with uniform behavior.
1. Changes to configuration or credential files or processes. These changes can
   also affect the behavior in other SDKs and must thus be made in coordination
   with internal teams.
