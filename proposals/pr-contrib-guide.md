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
lack of commitment to the process has led to an accumulation of community
feature requests and bug fixes. In turn, the AWS CLI community is dissatisfied
and frustrated because their voices, votes and efforts do not have an impact.
Here, we describe some examples of deficiencies in the current process.

#### Community contributions are not frequently reviewed.

[86 community pull
requests](https://github.com/search?q=is%3Apr+-author%3AConnorKirk+-author%3Asankalpbhandari+-author%3Amicahhausler+-author%3Ajustindho+-author%3Aelysahall+-author%3AjoguSD+-author%3Anateprewitt+-author%3Azdutta+-author%3Astobrien89+-author%3Atim-finnigan+-author%3Ajamesls+-author%3Astealthycoin+-author%3Avz10+-author%3Akyleknap+-author%3Akdaily+repo%3Aaws%2Faws-cli+created%3A%3E2021-01-01&type=Issues)
were opened in 2021. Of these, 43 (50%) have been closed: [24 by
merging](https://github.com/search?q=is%3Apr+-author%3AConnorKirk+-author%3Asankalpbhandari+-author%3Amicahhausler+-author%3Ajustindho+-author%3Aelysahall+-author%3AjoguSD+-author%3Anateprewitt+-author%3Azdutta+-author%3Astobrien89+-author%3Atim-finnigan+-author%3Ajamesls+-author%3Astealthycoin+-author%3Avz10+-author%3Akyleknap+-author%3Akdaily+repo%3Aaws%2Faws-cli+created%3A%3E2021-01-01&type=Issues)
and 19 by closing without merging. The pull requests that were reviewed and
merged were chosen opportunistically - they corresponded to work the team needed
to complete, like bumping versions, or were low risk, like documentation
changes. There is a willingness from the community to make improvements to the
AWS CLI through contributions, but their contributions are not reviewed. This
inconsistent approach frustrates contributors and results in missed
opportunities to support community efforts to improve AWS CLI.

#### Contributors do not have enough information on how their contributions can be accepted.

[34 pull requests](https://github.com/search?q=is%3Apr+-commenter%3AJordonPhillips+-commenter%3Ajustindho+-commenter%3Aelysahall+-commenter%3AjoguSD+-commenter%3Anateprewitt+-commenter%3Azdutta+-commenter%3Astobrien89+-commenter%3Atim-finnigan+-commenter%3Ajamesls+-commenter%3Astealthycoin+-commenter%3Avz10+-commenter%3Akyleknap+-commenter%3Akdaily+-author%3AConnorKirk+-author%3Asankalpbhandari+-author%3Amicahhausler+-author%3Ajustindho+-author%3Aelysahall+-author%3AjoguSD+-author%3Anateprewitt+-author%3Azdutta+-author%3Astobrien89+-author%3Atim-finnigan+-author%3Ajamesls+-author%3Astealthycoin+-author%3Avz10+-author%3Akyleknap+-author%3Akdaily+repo%3Aaws%2Faws-cli+created%3A2021-01-01..2021-12-31&type=Issues) opened in 2021 do not have any response from a maintainer. Of these, [27 pull requests](https://github.com/search?q=is%3Apr+is%3Aopen+-commenter%3AJordonPhillips+-commenter%3Ajustindho+-commenter%3Aelysahall+-commenter%3AjoguSD+-commenter%3Anateprewitt+-commenter%3Azdutta+-commenter%3Astobrien89+-commenter%3Atim-finnigan+-commenter%3Ajamesls+-commenter%3Astealthycoin+-commenter%3Avz10+-commenter%3Akyleknap+-commenter%3Akdaily+-author%3AConnorKirk+-author%3Asankalpbhandari+-author%3Amicahhausler+-author%3Ajustindho+-author%3Aelysahall+-author%3AjoguSD+-author%3Anateprewitt+-author%3Azdutta+-author%3Astobrien89+-author%3Atim-finnigan+-author%3Ajamesls+-author%3Astealthycoin+-author%3Avz10+-author%3Akyleknap+-author%3Akdaily+repo%3Aaws%2Faws-cli+created%3A2021-01-01..2021-12-31&type=Issues) (79%) are still open. The project lacks documentation on the guidelines and requirements for making a contribution as well as what types of contributions would be accepted. Furthermore, the maintainers do not consistently provide acknowledgement, feedback, next steps, or indications of when a review would occur. The result is contributors are unaware if they are making a contribution correctly, what the next steps are, and when it will be reviewed.  Contributors are frustrated that their efforts are not being acknowledged and do not know what to do to move forward.

#### Community contributions stall and are left incomplete.

There are [14 pull
requests](https://github.com/search?q=is%3Apr+is%3Aopen+commenter%3Ajustindho+commenter%3Aelysahall+commenter%3AjoguSD+commenter%3Anateprewitt+commenter%3Azdutta+commenter%3Astobrien89+commenter%3Atim-finnigan+commenter%3Ajamesls+commenter%3Astealthycoin+commenter%3Avz10+commenter%3Akyleknap+commenter%3Akdaily+-author%3Ajustindho+-author%3Aelysahall+-author%3AjoguSD+-author%3Anateprewitt+-author%3Azdutta+-author%3Astobrien89+-author%3Atim-finnigan+-author%3Ajamesls+-author%3Astealthycoin+-author%3Avz10+-author%3Akyleknap+-author%3Akdaily+repo%3Aaws%2Faws-cli+created%3A2021-01-01..2021-12-31&type=Issues)
opened in 2021 that had a comment from a maintainer but remain open. These
comments include feedback that the contributor responded to and was not followed
up on by a maintainer. In some cases, approval was given for a contribution but
never merged. The maintainers do not consistently check on the status of
existing pull requests and the contribution process stalls. The loss of momentum
of the contribution process erodes trust with individual contributors, who feel
ignored, and the community at large, who see stale contributions.

### Goals

Based on the problems identified in the current process, the proposed improvements for customer contributions should satisfy the following goals:

1. Maintainers should review community contributions regularly.
1. Contributors and maintainers should always know what is the current state of a contribution and what steps remain to drive the contribution to a resolution.
1. Maintainers should resolve in-flight contribution reviews before committing to any new reviews.

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

A contribution is initiated by opening a GitHub issue. The GitHub issue captures
information necessary to make the contribution, such as:

1. A description of the requested change.
1. The number of users in the community that request the change, measured
   through GitHub :+1: reactions.
1. Design discussions, including use cases, edge cases, and alternative
   solutions.

Contributions made without a GitHub issue will be subject to closure by the
maintainers.

Maintainers will regularly review open GitHub issues and label the ones that
are ready for community contribution. The decision to label an issue as ready
for community contribution is ultimately up to the discretion of the
maintainers. Depending on the issue type (bug or feature request) and area (code
or documentation), the maintainers will use a set of criteria to decide if the
issue is ready for contribution. This may include:

1. The change is feasible for a community member to contribute. See [the
   appendix](#changes-not-available-for-contribution) for details.
1. Feature requests must have at least 10 :+1: reactions.
1. The maintainers agree with the implementation plan, including any design
   discussions (e.g., public interface design, edge cases, backwards
   compatibility concerns).

If the criteria are not satisfied, the maintainers should explicitly comment
what criteria are not satsified and how the community can satisfy them. All
discussions must be resolved prior to making a contribution so that feedback
during the review process focuses on the implementation of the agreed upon
design.

Issues that do not receive enough :+1: reactions and do not have any activty for
a year are considered stale. Without further interaction, they will be closed.

### Contribution-ready

A GitHub issue enters the contribution ready stage when a maintainer publicly
labels the issue ready for contribution. This stage indicates any user is
welcome to initiate a contribution via a GitHub pull request. All contribution
ready issues are listed publicly for the community to discover.

### Implementation

A user can select an issue from the list of contribution ready issues and
implement their change. When the contributor has completed their implementation,
they should open a pull request. The maintainers will respond to acknowledge the
pull request and let the contributor know to expect a preliminary review by the
within 5 business days to confirm:

1. It is implemented in the manner described in the issue.
1. It meets the criteria specified in the contribution guide.

If the criteria are not satisfied, the maintainers will comment on the issue
specifically indicating what work is still required. If the contributor has
questions, they should refer to the contributing guide documentation or ask the
maintainers to clarify. Once the contributor makes the required changes, the
maintainers will follow up within 5 business days.

If the contributor is no longer actively engaged by responding to comments from
maintainers or making code changes for more than 30 business days, the
contribution is stale. If not, the pull request will be closed and the
corresponding issue will be marked as ready for contribution.

### Ready for review

Once the preliminary review criteria from the implementation stage have been met, the
pull request is added to a queue for maintainer review. This means that the
maintainers will include the pull request in a prioritization process for
review. The maintainers will select issues for review based on the following
criteria:

1. Existing pull request reviews will be completed before starting new reviews.
1. Older contributions will be selected before more recent ones.
1. Bugs and documentation changes will be prioritized over feature requests. 
1. The time available to the maintainers will be considered against the
   complexity of the contribution.
1. The maintainers will limit the number of active reviews to [TBD].

The maintainers will also publicly label a pull request that has been selected
for review. All pull requests selected for review will be listed publicly.
Having a pull request selected for review does not guarantee how long it will be
until it is merged.
### Review

Once a pull request has been prioritized for review, the maintainers will
perform a review. This criteria for accepting a pull request includes:

1. The change is made in the right place and fits in the existing architecture.
1. The change does not increase the maintainability in an unreasonable fashion.
1. There is sufficient documentation, both in the code and for end users.
1. The code is readable and follows best practices and conventions.

The maintainers can request feedback and changes from the contributor by asking
specific questions or specifying criteria that should be met to accept the pull
request. If changes are requested, the contributor should make the changes
within [TBD] business days. If the contributor does not respond within [TBD]
days, the pull request will be marked as stale. If the implementation matches
the proposal and the maintainers have time to allocate, the maintainers will
complete the pull request. If not, the issue will go back to the intake stage
and become available for another user to make a contribution.

Once a pull request is completed to the satisfaction of the maintainers, it will
be approved and merged. The contribution will be labeled to acknowledge it as a
community contribution.

## Implementation

The contribution process will be implemented with a publicly visible [GitHub
project
board](https://docs.github.com/en/issues/organizing-your-work-with-project-boards).
This project board will track contributions from the contribution-ready stage
through a merged pull request. New and existing GitHub labels and GitHub issue
events will be used to drive the movement of the issue between the lanes of the
GitHub project, which map to the stages of the contribution process.

The first lane in the GitHub project contains the list of contribution-ready
issues. This is the entry point for a user interested in making a contribution.

When a contributor opens a pull request for an issue in the contribution ready
list, it will be moved to the Implementation lane. This indicates that the
contibution is ready for an initial review by the maintainers. The community can
see what is currently being worked on. The maintainers will perform an initial
review within [TBD] days.

Once the initial review is confirmed to be complete, the issue can be labeled as
ready for review, and it moves to the 'Ready for Review' lane. These issues
will be prioritized, selected, and labeled for review on a [TBD] basis.

Once the maintainers have selected a pull request for review, a label marking it
as ready for review will be added, and the pull request will move to the 'Under
Review' lane of the GitHub project. This lane will provide visibility to the
community for what the maintainers are currently working on. 

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
