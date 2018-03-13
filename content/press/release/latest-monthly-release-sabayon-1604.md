+++
title = "Latest Monthly Release: Sabayon 16.04"
description = "16.04 Press release"
date = "2016-04-01"
categories = [ "releases", "sabayon" ]
tags = [
"releases",
"sabayon"
]
+++

![Sabayon Press release](/img/press-header-roll_0.png)

Sabayon 16.04 is a modern and easy to use Linux distribution based on Gentoo,
following an extreme, yet reliable, rolling release model.

This is a monthly release generated,
tested and published to mirrors by our build-servers containing the latest and
greatest collection of software available in the Entropy repositories.
The Change-log files related to this release are available on
[our mirrors](http://dl.sabayon.org/iso/monthly/ChangeLogs/).

The list of packages included in each Sabayon flavor is available inside
"*.pkglist" files. Our team is always busy packaging the
latest and greatest stuff.
If you want to have a look at what's inside our repositories,
just go to our [packages website](https://packages.sabayon.org/).

All the release variants can be found on the [download section](/download).

Please read on to know where to find the images and
their torrentfiles on our mirrors

# Changes

This is a *major* release:
contains bugfixes and enhancements to the Sabayon distribution.
We are happy to announce the immediate availability of Sabayon 16.04.

## Calamares Installer

The Calamares Installer is up to date to the latest release (2.20)
thanks to Francesco.

## Ati Drivers

Latest Ati Drivers "Crimson" 15.12.

## Kernel 4.4.6

We ship by default the latest 4.4.6 Linux kernel now!

## Lots of packages upgrades!

- Latest Kodi 16.0
- Latest Atom Editor (1.6)
- Bugfixes to sddm
- New OpenSSL to address DROWN attacks and with disabled sslv3 as default.
- ...and many more!

## Sabayon Community Repositories (SCR) is here!

The Sabayon Community Repositories infrastructure will build repositories
for the community, and it is managed by the community itself.
There is a main Community repository while there is room to add
other repositories, "slots", that SCR Developers are free to use.
More on how it works will come later.
Currently we are in alpha state, but we are having great results,
some packages are already available to the public.

The goal here is to have a system like AUR for Arch and PPA for Ubuntu
where Sabayon Community Developers (which are community member first)
mantain multiple repositories or packages of the Community repository.

If you are curious, and want a sneak peek, go visit
[the SCR webpage](https://sabayon.github.io/community-website/)
and search for a package (e.g. megaglest) and follow the instruction on screen.

## ARM

We released the tech preview for RaspberryPi2, and you can download it
[here](http://blog.mudler.pm/2016/01/tech-preview-sabayon-on-raspberrypi2.html),
meanwhile the tree is getting in shape and
we are setting up the infra to build images also for other devices.
Udoo and Odroid are the next in the queue.

We actually rented an ARM server for that purpose
since we are going to fully support the ARM hfp architecture in that way
you can use Sabayon on your favorite boards!

If you want help us, please take in consideration also [donating](/donate).

## Future plans

### SCR Documentation

We are preparing the documentation for the "Sabayon Community Repository".
SCR docs and development tools will be available soon, stay tuned!

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
just get the Minimal image and you won’t be hit
by the “OMG candies” bloat that is in the other images.

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
a geeky Gentoo ~arch system or just camp on the lazy side and
enjoy the power of our binary, dumbed down Applications Manager (a.k.a. Rigo).
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
switching between kernels or just moving to a new version has become
a no-brainer operation through Rigo: just go to the preferences menu,
select the kernel menu (LTS and regular kernels are listed in separate menus),
pick a kernel and click “Install”.
Rigo will take care of updating external modules in a reliable
and safe way on your behalf.

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

* [Sabayon GNOME (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.04_amd64_GNOME.iso)
* [Sabayon KDE (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.04_amd64_KDE.iso)
* [Sabayon Xfce (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.04_amd64_Xfce.iso)
* [Sabayon MATE (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.04_amd64_MATE.iso)
* [Sabayon Minimal (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.04_amd64_Minimal.iso)
* [Sabayon Server (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.04_amd64_Server.iso)
* [Sabayon RPi2 Tech Preview  (armhfp)](http://dl.sabayon.org/http://mirror2.mirror.garr.it/mirrors/sabayonlinux/testing/Sabayon_Linux_16_armv7l_Raspberry_Pi2_Base_8GB.img.xz)

#### Have you considered donating yet? Help us! [Donate](/donate) today!
