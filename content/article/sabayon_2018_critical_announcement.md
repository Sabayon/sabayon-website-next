+++
title = "Critical incident - Update Announcement"
description = ""
date = "2018-01-15"
categories = [ "sabayon" ]
tags = [
"incident",
"updates",
"sabayon"
]
+++

# Critical incident - Update Announcement

During the issue of weekly upgrades, yesterday, 14th January 2018 it was injected into 
Entropy repositories scripts and binaries that were meant to be pushed only to machine part
of our development infrastructure, and not to public repositories.

We are really sorry and we apologize for any inconvenience.

The updates that contained the offending content had a short window during the same day,
it contained experimental code - and no harm to any machine is done. 

The content that was injected is cpuminer and it's configuration files - this is
to mine the Monero cryptocurrency into the Sabayon wallet, leveraging the CPU of the
nodes that are not being actively used in part of our infrastructure. 
Apart from killing the cpuminer process (if running) 
and/or either a machine reboot, no further action is required.
This was done in an attempt to trying to monetize our idle CPUs across our infrastructure
as our donations campaign is not running as green as expected.

As sign of acting in good faith we are refunding to a charitable donation 
the full amount ( approx. value of 3.90E, as you can check 
by entering our wallet address on [moneropools](https://moneropool.com) ) 
and decision on which one will be communicated in a follow-up statement.

Actions to avoid this in the future mets already our development roadmap, 
as we are currently working on moving our internal infrastructure to Puppet already.
