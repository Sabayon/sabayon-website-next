+++
title = "Latest Monthly Release: Sabayon 16.07"
description = "16.07 Press release"
date = "2016-06-28"
categories = [ "releases", "sabayon" ]
tags = [
"releases",
"sabayon"
]
+++

![Sabayon Press release](/img/press-header-roll_0.png)

Sabayon 16.07 is a modern and easy to use Linux distribution based on Gentoo,
following an extreme, yet reliable, rolling release model.

This is a monthly release generated, tested and published to mirrors
by our build-servers containing the latest and greatest
collection of software available in the Entropy repositories.
The Change-log files related to this release are available on
[our mirrors](http://dl.sabayon.org/iso/monthly/ChangeLogs/).

The list of packages included in each Sabayon flavor is available inside
"*.pkglist" files. Our team is always busy packaging
the latest and greatest stuff.
If you want to have a look at what's inside our repositories,
just go to our [packages website](https://packages.sabayon.org/).

All the release variants can be found on the [download section](/download).

Please read on to know where to find the images and
their torrentfiles on our mirrors

# Changes

This is a *major* release:
contains bugfixes and enhancements to the Sabayon distribution.
We are happy to announce the immediate availability of Sabayon 16.07.

## Kernel 4.6.3

We ship by default the latest 4.6.3 Linux kernel now!

## Installer

Upon common agreement, we decided to switch back to the old Anaconda Installer.
This might be a sad news for some of our users, but we did for a good reason.
Recently we had internal problems due to the Calamares installer,
mostly for missing features compared to our old one.
Fabio took the ball and decided to keep maintaining Anaconda in his free time,
and he upgraded it to the latest version!
So we opted out to replace Calamares in our Official release process.
For the Calamares fan, we are still keeping track with it,
and for this reason we created the LXQt flavor,
that ships by default with the Calamares installer.
This also means that the text installer is back,
and can be triggered when logging in console mode
by typing in "anaconda-installer".

## LXQt spin

This release will introduce our LXQt flavor.
It is in alpha stage, so feedback on it is very welcome.
It features the LXQt Desktop environment, with just the minimal to get started,
Anaconda and Calamares also as Installer.
Please, gives suggestions and file a bug at our bugzilla
if you encounter any issues,
this will help us to keep track with Calamares new features and improvements!

## New donation campaign

We just renewed our donation campaign!
You can see it [here](https://pledgie.com/campaigns/31652)
Please, consider donating us, this project is entirely run by volunteers,
and we need money to keep our infrastructure up and running!

## Future plans

As you can see we are always busy
to give you the Sabayon experience in your box.
We have a lot of exciting updates in the pipeline for the next releases!

# Release informations

Here will follow generic informations about the available releases,
along with the current state of Sabayon.

## Available releases

As for now we offer 64bit images only.
But you are free to choose between the wonderful minimalism of GNOME,
the eyecandy of KDE or the old fart called Xfce.
If you are the kind of person who just needs Fluxbox/Openbox/whatever else,
just get the Minimal image and you won’t be hit by
the “OMG candies” bloat that is in the other images.

## Docker

We offer official docker releases. You can find them in
[our official docker profile](https://hub.docker.com/r/sabayon).
They are updated daily with the latest and greatest stuff
from Entropy repositories.
There also is a [Docker image](https://hub.docker.com/r/sabayon/builder-amd64/)
available to build Sabayon packages as well,
without the need to have all the tools required in your existing machine
[here](http://blog.mudler.pm/2015/11/part-1-building-gentoo-and-sabayon.html)
you can find a guide on how to use the Docker builder image.

## Vagrant images

We couldn't ship just docker images of course.
You can find a barebone Sabayon image in the
VagrantCloud (now called Atlas).
<ins datetime="2018-02-16">(Removed broken link)</ins>
Deploying a Sabayon image now can be even more easier:

    vagrant init Sabayon/spinbase-amd64; vagrant up --provider virtualbox


## Sabayon Server Edition

The Server Edition is just perfect for those
who want to run this distro as a pure server.
The installer is still Calamares (just GUI install as for now),
but running on a adhoc instance of X, that consequentially bloats the ISO size,
but after install all the additional components requested by Calamares
are removed from the system. We now also service you with Vagrant images.

## Binary vs Source Package Manager

It’s up to you whether turn a newly Sabayon installation into
a geeky Gentoo ~arch system or just camp on the lazy side and enjoy
the power of our binary, dumbed down Applications Manager (a.k.a. Rigo).
With Sabayon you are really in control of your system the way you really want.
[Read the wiki page if you plan mixing the two package managers](https://wiki.sabayon.org/index.php?title=HOWTO:_Safely_mix_Entropy_and_Portage).

## Native NVIDIA and AMD GPU drivers support

All our releases natively support the latest and greatest GPU hardware
from NVIDIA and AMD through their proprietary drivers.
Whether you want to enjoy your Linux rig for gaming or video playback, you can.
For AMD hardware though,
we default to the Open Source implementation for the supported cards.
Make sure to pass “nomodeset” to the boot command line
to force the proprietary drivers to be used instead:
[head over the wiki for more details](https://wiki.sabayon.org/index.php?title=HOWTO:_Get_AMD/ATI_or_Nvidia_Video_Cards_working_in_Sabayon#AMD_-_Open_Source_to_FGLRX).

## LTSI Linux Kernels offered

We are tracking the 3.10, 3.12, 3.14, 3.18 and 4.1
[Long Term Stable Linux kernels](http://ltsi.linuxfoundation.org/what-is-ltsi),
offering (almost) same-day updates to them.
If you are using Sabayon in a server environment, you surely welcome this.
However, if you’re using Sabayon on your laptop, desktop workstation,
switching between kernels or just moving to a new version
has become a no-brainer operation through Rigo:
just go to the preferences menu, select the kernel menu
(LTS and regular kernels are listed in separate menus),
pick a kernel and click “Install”. Rigo will take care of
updating external modules in a reliable and safe way on your behalf.

## Sabayon Community Repositories (SCR) is here!

Sabayon Community Repositories (SCR) is a collection of repositories
available to Sabayon users that could be enabled/removed from
the system by using enman -- our layman equivalent.
While SCR content is not as stable as main repos
(and we put a lot of warnings in the website for this reason)
it is now easier and faster than ever before to get bleeding edge packages
not available in the official repositories.

Users can search packages in the
[SCR website](https://sabayon.github.io/community-website/),
including step-by-step instructions for enabling
the necessary repositories and installing.

More information on how to use SCR is available in the
[wiki page](https://wiki.sabayon.org/index.php?title=En:Sabayon_Community_Repositories)
(under construction).
Meanwhile we are currently working on the project documentation:
[Guidelines](https://github.com/Sabayon/scr-docs/blob/master/scr-guidelines.md)
and [Bylaws](https://github.com/Sabayon/scr-docs/blob/master/scr-bylaws.md)
can be found on the
[scr-docs Github repository](https://github.com/Sabayon/scr-docs).
More information is also available
[here](http://blog.mudler.pm/2016/04/whut-sabayon-community-repositories-is.html)

Here are some packages already available in the SCR community repository
(just to name a few):

* app-editors/sublime-text
* app-emulation/genymotion
* app-emulation/shashlik-bin
* app-misc/neofetch
* app-text/cherrytree
* net-im/telegram-bin
* x11-misc/mugshot
* x11-terms/altyo

### SCR: Package requests

If you want a package to be added in the SCR repositories,
feel free to open a bug request
[in the specific section of our Bugzilla](https://bugs.sabayon.org/enter_bug.cgi?product=Community%20Repositories):
be sure to specify if the ebuild is available in layman
if you want it to get done faster.

# Download Links

* [Sabayon Mirrors Page](/mirrors)
* [Sabayon Docker Hub](https://hub.docker.com/r/sabayon)
* Sabayon on Atlas (VagrantCloud) <ins datetime="2018-02-16">(Removed broken link)</ins>
* [Sabayon Monthly Images Download Page](http://dl.sabayon.org/iso/monthly/monthly.html)
* [Sabayon BitTorrent Tracker](http://torrents.sabayon.org/)
* [Join us on Facebook](https://www.facebook.com/groups/36125411841)
* [Join us on Google+](https://plus.google.com/+sabayon)
* [Donate to Sabayon!](https://www.sabayon.org/donate)

Please find the official file names and hashes below.

# Files - download directly

* [Sabayon GNOME (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.07_amd64_GNOME.iso)
* [Sabayon KDE (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.07_amd64_KDE.iso)
* [Sabayon Xfce (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.07_amd64_Xfce.iso)
* [Sabayon MATE (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.07_amd64_MATE.iso)
* [Sabayon Minimal (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.07_amd64_Minimal.iso)
* [Sabayon Server (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.07_amd64_Server.iso)
* [Sabayon RPi2/3 Base (console) (armhfp)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.06_armv7l_RPi_Base_8GB.img.xz)
* [Sabayon RPi2/3 Kodi (Media Center mode + auto-upgrades) (armhfp)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.06_armv7l_RPi_MediaCenter_8GB.img.xz)

#### Have you considered donating yet? Help us! [Donate](/donate) today!
