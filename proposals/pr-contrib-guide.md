# AWS CLI Contributing Guide

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

The AWS CLI GitHub repository is available for any user to report bugs, make
feature requests, and ask guidance questions through a GitHub issue. GitHub
issues are triaged regularly to determine that they are correctly categorized
and express a real and relevant problem or request. An answer is provided as
soon as possible to acknowledge or resolve the issue. Feature requests are
reviewed for general suitability and uniqueness, but are not actively commented
on by maintainers to move the feature forward to an implementation unless they
are specifically singled out for further review or backlog grooming. Users can
vote for features via "reactions" on the issue. The popularity of an issue is
used to determine which features the maintainers will work on.

Users can also open pull requests to propose changes to the code base. Pull
requests are triaged via best effort to determine the code owner and the change
proposes something sensible. Occassionally, a cursory review is performed to
determine if enough detail has been provided to understand the proposed change.
The repository automatically runs functional and unit tests and the status (pass
or fail) is reported on the pull request. If the maintainers decide a feature
should be included, a review is scheduled internally. Comments and change
requests are made on the GitHub pull request for the contributor.

Pull requests are used as data in conjunction with issues to identify feature
requests that should be prioritized by the maintainers, but the proposed code
changes are infrequently used. When a feature is prioritized for work it is
added to an internal queue for tracking. The maintainers write the code for the
change and open a new pull request in the GitHub repository. It is then reviewed
by the maintainers before merging.

The GitHub repository hosts a CONTRIBUTING guide, standard to many open source
projects, to provide guidance on contributing code to the project. The current
guide describes at a high level how to report an issue or request and states the
minimum requirements and suggestions for a code contribution. It suggests how to
perform the basic tasks using Git, including retrieving and building the
development version. It does not describe what the review or acceptance criteria
are for a contribution, nor does it state what is expected of the contributor or
maintainer in the process.

As of 2021-11-02, there are 189 pull requests and 465 issues in the AWS CLI
GitHub repository. 52 pull requests and 81 issues have not been updated in more
than a year. This volume indicates that there are motivated users who want to
contribute to the AWS CLI and are not successful. There is no indication of the
status of a pull request, so a contributor has no way to know when, or if, their
contribution will be accepted. The large backlog of open and stale pull requests
indicates that the current 'best effort' process for reviewing contributed code
is not keeping pace with the demands of the community.

## Examples

This section provides detailed use cases that demonstrate limitations of the
current feature request and pull request review process.

### Limited information on where and what to contribute

The AWS CLI currently has code, documentation, and examples published publicly
on a number of GitHub repositories. We have hundreds of open issues and pull
requests across these areas. However, we do not have a guide for users to know
what they should work on or how to contribute. We get frequent requests to
contribute on specific issues, but it requires significant effort to respond to these
requests individually. We also do not state which kinds of feature requests for which we do not accept contributions, 
leading to users to spend effort that ultimately
will not be used. For example, users often request waiters and paginators, which
are now standardized across AWS SDKs and implemented by the service teams, who
know how to provide the best performance and experience.

We need a well-documented guide and process for the community to know what is
available for contribution and what is not so that their efforts are used
effectively. This would help users and maintainers focus on relevant issues and
work more effectively.

### No active triage or first response

[Pull request 3174](https://github.com/aws/aws-cli/pull/3174) adds MFA
functionality to support cache usage. It is the pull request with the most 👍🏻
reactions (55) since being opened in March 2018. It was proposed as an
[issue](https://github.com/aws/aws-cli/issues/3172), and no comments from AWS
have been made since then. It is still getting comments noting the need as of
April 2021. It currently would need rebasing since it has conflicts with the
base branch. It would also need cross-SDK review since it involves credential
behavior. This issue demonstrates the lack of response to high user request
issues that impact cross-SDK features and a lack of process to make changes.

We need to prioritize triage and review of community contributions in a timely
manner. The steps that community members should use to make their contribution
should be communicated clearly and be straightforward to follow.

### Unprioritized contributions

Some pull requests have had initial contact from maintainers as desirable
changes, but then fall off the radar and remain unprioritized. This leaves the
impression that user requests are not a priority. For example, [pull request
2105](https://github.com/aws/aws-cli/pull/2105) makes S3 sync command excludes
files more efficiently. It proposes to fix issue
[#1138](https://github.com/aws/aws-cli/issues/1138) that had tacit approval from
the maintainers. It was subsequently left uncompleted by the original author,
but picked up by another community member and improved in a related [pull
request](https://github.com/aws/aws-cli/pull/5425). No further interaction from
the maintainers has occurred.

The AWS CLI team has limited bandwidth and competing priorities; without
well-defined next steps for the maintainers, these types of requests are then
the first to be neglected for prioritization. A community contribution should
not be left in an incomplete state or waiting on a maintainer; it should be
resolved by merging it or closing it. When an issue is raised and reviewed, we
need to prioritize it and see it through.

### Competing priorities and limited bandwidth

There are 151 open issues that have upvotes or reactions from five or more
users, indicating broader interest. That volume is not tractable for the
maintainers to implement themselves. Community members need to be able to
contribute more easily while balancing the efforts of maintainers to conduct
thorough reviews of code before merging.

We need to collect and review user feedback to decide on what to work on to
determine what contributions are of interest. We need to tell users how they can
provide feedback in the best way for us to take action. We also need to
strategically and fairly manage the amount of in flight work so that open
requests do not pile up.

### Pull requests with limited background and context

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
the user and potentially the maintainer. We need a structured process for the
life cycle of an idea that can culminate in a community contribution. We also
need to prioritize issues against other requests from the community given the
effort to contribute for users and review for maintainers.

## Goals

The approach for customer contributions should satisfy the following goals:

1. Users should know how they can help. It should be straightforward for
   community members to make high quality contributions.
1. No requests should exist without a response. Communication from maintainers
   should happen in a timely manner, even (especially!) if that’s saying no. An
   initial response to open PRs should occur within [TBD] business days.
1. A contribution should be completed through the efforts of the contributor and
   maintainers and not be left abandoned. The maintainers are responsible see it
   through to a conclusion.
1. We should prioritize the things that people want based on feedback they
   provide on issues. Users should know how to provide that feedback.
1. Users should know exactly what to expect when interacting with the
   maintainers. The next steps should be clearly defined.

## Specification
 
 ![Figure A: Flowchart of contribution guide review
process.](contrib-guide-high-level.png "Figure A: Flowchart of contribution
guide review process.")

**Figure A: Flowchart of contribution guide review process.**

We propose to make changes to the maintainer engagement and review process for
feature requests and pull requests. The accompanying contributing guide must
define what is required to move a feature request to be available for community
contribution. It documents the review process and sets community expectations
around communications to move a contribution forward. 

Figure A demonstrates a high level view of the proposed process. It has three
phases: intake, implementation, and review.

### Intake

The intake process identifies feature requests, through GitHub issues, where
community contributions are welcome.

The maintainers will actively review GitHub issues for feature requests to make
this determination. The criteria used to make that decision include:

1. The change will be made on part of the code base that the maintainers have
   determined to be available. See the FAQ for more details.
1. There is evidence that the change will be impactful for a significant number
   of users beyond the individual that proposed it.
1. The background, description, and use cases for the feature are clearly
   defined.
1. There are test cases and edge cases defined.
1. There is consensus with the maintainers on an implementation plan.

Once these criteria have been met, an issue is available for the community to
contribute. If it's not something that the maintainers feel should be added, the
issue should be left for community discussion and upvotes. A comment should be
added by the maintainers to describe how users can advocate for the feature with
more use cases, or vote for the issue using reactions. The issue is subject to
existing stale and ancient issue closure mechanisms.

### Implementation

Any issue that has been marked as available is open for a community contribution
through a GitHub pull request. A user can start implementing an open issue using
the CONTRIBUTING guide to assist them get started. 

When an issue is being worked on by the community, maintainers will provide
guidance and support during the contribution process. They will engage with the
contributor for discussion of implementation details or issues that arise during
the contribution. 

The contribution can have a review when the maintainers confirm:

1. It is implemented in the manner described in the issue.
1. It passes all validation checks, including tests (both new and existing),
   code linting, and style checks.

Validation checks are automated. Determining if the implementation matches the
proposal requires a manual check that should be performed at a cursory level.

Once these requirements have been satisfied, the pull request can be added to a
queue for maintainer review.
### Review

We will maintain a queue of issues that are ready for review once they are
through the implementation phase. We will initially respond within [TBD]
business days on a PR review request to acknowledge the request and provide an
update on when a review can be expected. This does not guarantee how long it
will be until the PR is merged.

We will publish the queue of pull requests to review and indicate their status:
acknowledged, under review, and completed. The maintainers will review the pull
request and provide any comments, feedback, or requested changes. If changes are
requested, the contributor should make the changes within [TBD] business days.
If a pull request becomes stale because the contributor is no longer actively
engaged or working on it for more than [TBD] days, it should be reviewed to see
if it is suitable for the maintainers to finish the work or marked as stale and
documented for another user to continue working on it.

Once a pull request is complete with to the satisfaction of the maintainers, it
is approved and can be merged and acknowledged as contribution from the
community.

We do not want to discourage users from contributing or proposing changes, but
we need to acknowledge that the maintainers still have limited bandwidth to give
feedback on implementation or design and review pull requests. We will limit the
number of in flight pull request reviews to [TBD]. The maintainers will
prioritize completing PRs that have had a review over new review requests. If a
pull request becomes stale but there is sufficient work to complete it, the
maintainers will complete the pull request. If after review and the maintainers
agree that the implementation is not as discussed or there is not significant
demand or bandwidth to complete it, the issue may go back to the intake phase
and be available for another user to contribute a change.

If an issue has not been explicitly marked as being available for contribution,
it should not be expected that a pull request will get a review.

## Rationale/FAQ

### Q. Why do we limit the number of in flight reviews?

The maintainers have work that comes from outside of the GitHub repository that
needs to be prioritized along with user contributions. Controlling the volume of
pull request reviews and prioritizing completing the in flight reviews over new
reviews should result in a shorter time to merge and release a contributor's
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

### Why should there be a minimum number of upvotes or reactions to open something for the community to work on?

We propose that in order for the maintainers to engage in the code review
process, an issue should demonstrate user impact beyond the individual who
proposed it. This is difficult to measure objectively, but one proxy for impact
can be the number of upvote reactions on the issue. This is intended to prevent
narrowly scoped changes that only affect a single user. It also helps to limit
the number of in flight reviews that the maintainers need to be engaged on, as
there is not an unlimited amount of bandwidth to devote to this task.

At present, there are more than 140 open feature requests and 5 bugs in the AWS
CLI GitHub repository that have five or more upvotes. We can use the current
reactions to review the backlog and identify issues that we feel would be suited
for community contributions. This process can then inform us how to handle new
issues that might be candidates for community contribution.

As part of the contribution guide, we will provide more specific guidance on how
to upvote a feature so we can more accurately estimate user impact.

### Q. What is out of scope for changes that we would accept implementations from the community?

There are parts of the codebase that are not suitable for community
contributions. They may pose a security risk, be part of the code that is
dynamically generated, or may require interaction with internal teams to
implement. These include (but are not limited to):

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

### Q. What is automated review, and what is human review?

Initially, most of the  will be human review besides code linting and testing.
Automation will be implemented for issue labeling, state transitions, and
template checks. We currently perform these types of processes for issues, and
the proposed process is agnostic to how it's implemented.
