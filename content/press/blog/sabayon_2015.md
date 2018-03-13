+++
title = "Sabayon Linux development in 2015"
description = ""
date = "2015-08-17"
categories = [ "sabayon" ]
tags = [
"development",
"sabayon"
]
+++

In case you didn’t notice, last months some major changes have been made to
the Sabayon Linux project.
Most are pure technical changes in the project management
that the end users will never notice. Here is a short log.

**Docker based images**

These are forked directly from a Gentoo stage3 docker image.
The result is a very clean chroot that is even closer to Gentoo.
Our docker pulls in the stage3, adds Sabayon overlay,
installs Entropy to a point where it can run.
Then it checks the Portage database to list what packages are installed and
replaces them with the packages from Entropy. (Ain’t that cool?).
Now we can keep our minimal chroot current and easy make changes
whenever we want. The docker base image is then being “squashed”
so we can feed it as an image to our Molecule™ script that
will build our iso images for us.

With this move we also made the creation of spins more accessible to developers!
Go fork us!

**MATE spin**

The MATE spin will be brought back as an “official” spin.

**Artwork**

The Sabayon artwork is now completely modular.
Whoever wants to create his own spin (or distro based on Entropy)
can now simply fork these artwork ebuilds and
package them in their own Entropy™ repository.

**Installer**

We replaced Anaconda installer with Calamares.
Many users complained about buggy Anaconda and
the Calamares project was designed for distro’s like Sabayon Linux.
At the moment Calamares still lacks some features, like disk-encryption,
but we expect them to be implemented sooner or later.
Obviously Calamares is fully theme-able and
all the artwork is in a separate artwork package.
The installer configuration is shipped with the
app-misc/calamares-sabayon-base-modules package.

[https://calamares.io/](https://calamares.io/)

**Plasma desktop 5**

Not officially supported yet but you can now add a community repository and
install it.

**New developers**

[Ettore Di Giacinto](https://plus.google.com/u/0/+EttoreDiGiacinto/posts) and
[Francesco Ferro](https://plus.google.com/u/0/+FrancescoFerro26/posts)
joined the Sabayon Linux development team.

**ARM**

We are planning to bring back ARM support.

*So as you can see we’ve been busy little bees getting all this done.*

You can find us here:

* [Join us on Facebook](https://www.facebook.com/groups/36125411841)
* [Join us on Google+](https://plus.google.com/+sabayon)
* [Donate to Sabayon!](https://www.sabayon.org/donate)
