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
- A *user* is a member of the community who uses the AWS CLI. They may also
  interact with the AWS CLI GitHub repository by opening or commenting on
  issues.
* A *contribution* is a proposed change to the AWS CLI code base. This can be
  adding new functionality, fixing a bug, or improving documentation.
- A *contributor* is a user who makes a contribution to the AWS CLI via a pull
  request. Contributors are not able to merge pull requests.
- A *maintainer* is a user who maintains the AWS CLI GitHub repository. They are
  also a contributor and write core functionality. They triage and moderate
  GitHub issues, review pull requests, and accept contributions by merging pull
  requests.

### Current contribution process

The AWS CLI GitHub repository is available for any individual to report bugs,
make feature requests, and ask guidance questions through GitHub issues, as well
as open pull requests to propose code changes. There are currently roughly three
stages to manage contributions that are common to open source projects: intake,
implementation, and review.

#### Intake

GitHub issues are triaged regularly to determine that they are correctly
categorized and express a real and relevant problem or request. An answer is
provided as soon as possible to acknowledge or resolve the issue. Feature
requests are reviewed for general suitability and uniqueness. Users can vote for
features via "reactions" on the issue. 

#### Implementation

Users can open pull requests to propose changes that address bugs or feature
requests. There is no requirement to work on an existing feature request or to
discuss a contribution prior to opening a pull request. Occassionally guidance
is provided to the contributor to improve the proposed change.
#### Review

Pull requests are selected for review opportunistically when the maintainers
have decided that a change or feature should be incorporated. When a feature is
selected for review it is added to an internal queue. This queue manages the
prioritization of these features but is not visible to the community. 

Pull requests are subjected to automated tests and checks which provide
preliminary feedback. Once a pull request passes all automated tests and checks,
it requires review from a maintainer to proceed toward being merged.

Maintainers may also push changes directly to a contributor's pull request in
order to expedite completion or if the contributor is no longer engaged. In some
cases, the maintainers will open their own pull request if the proposed change
is not acceptable as is or they fail to find an existing pull request.

When the pull request is completed to the maintainers satisfaction, it is merged
in for the next release.

#### Documentation and tracking

The GitHub repository has a [contribution
guide](https://github.com/aws/aws-cli/blob/2069bf6735560da48440b743eb323488df5fa6c8/CONTRIBUTING.md),
standard to many open source projects, to provide guidance on contributing code
to the project. The guide describes how to report an issue or feature request
and states the minimum requirements and suggestions for a code contribution. It
describes how to perform the basic tasks using Git, including retrieving and
building the development version.

### Problems with the current contribution process

The current contribution process is applied unevenly and inconsistently. The
community is frustrated because their voices, votes and efforts do not have an
impact. Here, we describe some examples of deficiencies in the current process.

After intake, community requests are prioritized for implementation
opportunistically without regard to their popularity. The community doesn't know
what the maintainers would agree to be implemented. Without a curated list of
issues available for implementation, users are free to open a pull request for
any change, most of which will not be accepted. When pull requests are made,
they are left unattended with no clear path forward. Pull requests are likewise
reviewed opportunistically. Upvotes and comments can influence the likelihood of
prioritizing a review, but it is not guaranteed. Maintainer effort is
inefficiently applied to retroactively identify pull requests that meet
acceptance criteria.

As a result, community requested improvements are not satisfied. We do not
communicate with the community consistently, and their efforts are not utilized
effectively. Without a robust mechanism for prioritizing, implementing, and
reviewing requests and contributions that includes the help of the community,
the number of unresolved community requests, and community dissatisfaction, will
continue to grow. 

<!--

#### No indication of what to contribute

We do not state which issues are available for community contributions. This
results in users spending effort and the maintainers spending effort
contributing and reviewing changes that ultimately will not be accepted. For
example, users frequently propose changes to waiters and paginators. These are
implemented by the service teams and changes cannot be made directly to the AWS
CLI.

We need a curated list of issues to know what is available for contribution and
what is not so that their efforts are used effectively. This would help users
and maintainers focus on relevant issues and work more effectively.

#### Competing priorities and limited bandwidth to work on popular requests

There are 95 open issues that have 10 or more upvotes, indicating broad
community interest. That volume is not tractable for the maintainers to
implement themselves. Community members need to be able to contribute more
easily while balancing the efforts of maintainers to conduct thorough reviews of
code before merging.

We need to tell users how they can provide constructive quantitative and
qualitative feedback. The maintainers need to review the feedback to
strategically and fairly manage the amount of in flight work so that open
requests do not pile up.

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

The maintainers need to triage, respond to, and review community contributions
in a timely manner. [Pull request
3174](https://github.com/aws/aws-cli/pull/3174) adds MFA functionality to
support cache usage. It is the pull request with the most upvotes (55 👍🏻
reactions) since being opened in March 2018. It was proposed as an
[issue](https://github.com/aws/aws-cli/issues/3172), and no comments from AWS
have been made since then. It is still getting comments noting the need as of
April 2021.

#### Unprioritized contributions

A community contribution should not be left incomplete. The maintainers should
engage to resolve by merging or closing it. [Pull request
2105](https://github.com/aws/aws-cli/pull/2105) makes S3 sync command excludes
files more efficiently. It proposes to fix issue
[#1138](https://github.com/aws/aws-cli/issues/1138) that had tacit approval from
the maintainers. It was abandoned by the original author, but picked up by
another contributor and [improved](https://github.com/aws/aws-cli/pull/5425). No
further interaction from the maintainers has occurred.

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

-->
## Goals

Based on the issues identified in the current process, the proposed improvements
for customer contributions should satisfy the following goals:

1. Users should know what is available for contribution. It should be clear
   where they can expend effort that will be accepted.
1. Maintainers should prioritize issues based on feedback provided by the
   community to focus the efforts of the maintainers and the community. Users
   should know how to provide that feedback.
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
to assure they are applied systematically and transparently. In addition, we
will augment the current process with new stages to clarify what issues are
available for contribution and what stage they are in. Figure A demonstrates how
a request and contribution will proceed through the improved process.

We will also publish an improved contributing guide to document the review
process, acceptance criteria, and expectations for communication. We will use
existing issue labeling in conjunction with a GitHub Project to provide
transparent status to the community to indicate what is available for
contribution and to track the progress of a contribution.

The following sections detail the proposed improvements to the existing process.

### Intake

We will modify the the intake process to set contribution expectations for the
community. A contribution is initiated by opening a GitHub issue. The GitHub issue captures information necessary to make the contribution, such as:

1. A description of the requested change.
1. The number of users in the community that request the change, measured through GitHub :+1: reactions.
1. Design discussions, including use cases, edge cases, and alternative solutions.

Contributions made without a GitHub issue will be subject to closure by the
maintainers.

Maintainers will regularly review open GitHub issues to determine if they are
ready for community contribution. The decision to label an issue as ready for
community contribution is ultimately up to the maintainers. Depending on the
issue type (bug or feature request) and area (code or documentation), the
maintainers will use a set of criteria to decide if the issue is ready for
contribution. This may include:

1. The change is feasible for a community member to contribute. See [the
   appendix](#changes-not-available-for-contribution) for examples of what
   would not be feasible for community contribution.
1. Feature requests must have at least 10 :+1: reactions.
1. The maintainers agree with the implementation plan.

If the criteria are not satisfied, the maintainers will comment on the GitHub
issue to request more information and to update the current status or next
steps. Issues that do not receive enough :+1: reactions and do not have any
activty for a year are considered stale. The maintainers will make a request for
comment from the community. Without further interaction, the issue will be
closed.

### Contribution-ready

We will add a new stage that clearly identifies which issues the maintainers
have determined are ready for contribution. Issues will be labeled and added to
a queue where users can discover them. Any issue that has been marked as
available is open for a community contribution through a GitHub pull request.

### Implementation

We will improve the implementation stage with specific instructions and criteria
for completing an implementation. A user can select an issue from the list of
contribution ready issues and implement their change. The contributor should use the CONTRIBUTING guide as a reference for the criteria to be met before a contribution will be reviewed by the maintainers. This criteria includes passing validation checks, passing new and existing tests, code linting, and style checks. The contributor can also communicate with the maintainers on the issue with questions that arise. 

When the contributor has completed their implementation, they should open
a pull request. The contribution is then given an initial inspection by the maintainers to confirm:

1. It is implemented in the manner described in the issue.
1. It meets the criteria specified in the contribution guide.

If the criteria are not satisfied, the maintainers will comment on the issue
indicating what is work is needed. If a pull request becomes stale because the
contributor is no longer actively engaged on it for more than [TBD] days, it
should be reviewed to see if it is suitable for the maintainers to finish the
work. If it is not, the pull request will be marked as stale and sent back to
the queue of issues ready for contribution.

Once the criteria have been satisfied, the pull request can be added to a
queue for maintainer review. We will initially respond within [TBD] business
days on a PR that is ready for review to acknowledge the request. This does not
guarantee how long it will be until the PR is merged.

### Review

Similar to the contribution-ready stage, we will maintain a queue of issues that
are ready for review once the criteria for a contribution have been met. We will limit the number of in flight pull request reviews to [TBD]. The maintainers will select issues for review based on their age, complexity, and time availability. Bugs and documentation changes will be prioritized over feature requests. In addition, completing the review and acceptance of existing pull requests will be prioritized over new review requests.

The maintainers will review the pull request and provide any comments, feedback,
or requested changes. If changes are requested, the contributor should make the
changes within [TBD] business days. If the contributor does not respond within [TBD] days, the pull request will be marked as stale. If the implementation matches the proposal and the maintainers have time to allocate, the maintainers will complete the pull request. If not, the issue will go back to the intake stage
and become available for another user to make a contribution.

Once a pull request is completed to the satisfaction of the maintainers, it will
be approved and merged. The contribution will be labeled to acknowledge it as a
community contribution.

## Implementation

The contribution process will be implemented by extending the use of GitHub
issue labels and the addition of a GitHub project to curate the list of
contribution-ready issues and track their progress towards completion. GitHub
labels and events will be used to drive the movement of the issue between the
lanes of the GitHub project, which map to the stages of the contribution
process.

The first lane in the GitHub project will be the list of contribution-ready
issues. This is the entry point for a user interested in contributing to
identify something that the maintainers would accept a change for.

Once a pull request is open for an issue in the contribution ready list, it will
be moved to the Implementation lane. The maintainers and other users or
contributors can see what is currently being worked on by the community. It also
indicates that the contibution is ready for an initial review by the maintainers
to assert that it meets the acceptance criteria. The maintainers will perform an
initial review within [TBD] days.

Once the initial review is confirmed to be complete, the issue can be labeled as
ready for review. This will move it to the 'Ready for Review' lane. These issues
will be prioritized, selected, and labeled for review on a [TBD] basis. Labeling
an issue as ready for review will move it to the 'Under Review' lane of the
GitHub project. This lane will provide visibility to the community for what the
maintainers are currently working on. 

After the review process is completed and a pull request is merged, the issue
will be closed and moved to the 'Done' lane. This will provide the community
with a list of successful contributions. 

## Managing the existing backlog

As of 2021-12-15, there are 188 pull requests and 436 issues in the AWS CLI
GitHub repository. 43 pull requests and 87 issues have not been updated in more
than a year. 95 issues have ten or more upvotes. [TBD] of the open pull requests
are directly related to an existing feature request. [TBD] of open pull requests
have extensive merge conflicts.

Based on these numbers, we propose to review and close existing pull requests in
two phases:

1. We will use existing automated infrastructure to comment on ancient pull
   requests, defined as no activity in more than a year and less than 10
   upvotes. This will post a comment indicating that the issue will be closed
   without further interaction from the community.
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

We do not want to discourage users from contributing or proposing changes, but
we need to acknowledge that the maintainers still have limited bandwidth to give
feedback on implementation or design and review pull requests. The maintainers
have work that comes from outside of the GitHub repository that needs to be
prioritized along with user contributions. Controlling the volume of pull
request reviews and prioritizing completing the in flight reviews over new
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

### Q. Do users need to request or acknowledge to work on an issue that is ready for contribution?

No. We do not want to require that users who want to contribute pre-register
their interest. Multiple contributions can result in a better implementation.
However, we should encourage users to comment on the issue that they are working
on it. This can be an opportunity for community collaboration instead of
duplicated effort.
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
### Changes not available for contribution

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
