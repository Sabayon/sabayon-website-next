+++
title = "Critical Incident - 2018-01-14"
description = ""
date = "2018-01-15"
categories = [ "sabayon" ]
tags = [
"incident",
"updates",
"sabayon"
]
+++

# Critical Incident - 2018-01-14

## What happened?

During the weekly update of package repositories yesterday, some scripts
and binaries that were only meant to be installed on our internal
infrastructure were incorrectly pushed to all users. The updates that
contained the offending content were only available for a short window 
(less than 24 hours) and have now been removed from all official mirrors.

The update contained an experimental cryptocurrency miner and it's
configuration files. The intention was to leverage the idle CPU time on Sabayon
infrastructure hosts to increase funding for the project via a Monero
wallet. This was setup on one of the internal development repositories for testing
and accidentally promoted to the main Sabayon package repositories in error by
another member of staff who was unaware of its existence.

We are very sorry that this has happened and we apologize for any inconvenience
it may have caused you.

## How can you tell if you've been affected?

If your systems updated the package repositories (e.g. using "equo update",
or from the rigo background auto updater),
between 2018-01-14 20:30 UTC and 2018-01-15 18:00 UTC, 
you may find a miner process named "sd" running on your system. This process
may have been using up to 100% of one CPU core since then.

## How can you clean up?

Either killing the miner "sd" process if present, or restarting your computer
will stop this activity. No further cleanup is required as the miner process was
not made to be persistent.

## What next?

As sign of good faith we will be donating all money generated by the miners to
charity. At time of writing, this is approximately valued at 4.00 Euro.
You can independently check the value of the wallet and any transactions
relating to it by entering the wallet address
(49oFnBbQbwXEJ8eTcWxVDb12Sbktn9XHQ6ysezutij4xGbXLYaygeDNTWEKoae9E4fMedQJy5g9QMQk1Hy7YuB7HHaJSGdg)
at [moneropools](https://moneropool.com).
The chosen charity will be announced on the blog once all mining activity
has stopped and the final amount generated is known.

This happened in part because the Sabayon package build process involves
manual activity by different staff members on the same server. We have already
been working for some time on further automating these processes to remove the
manual work on servers, and make the build processes more transparent to users.