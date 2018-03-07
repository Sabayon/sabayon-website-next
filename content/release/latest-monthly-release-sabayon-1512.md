+++
title = "Latest Monthly Release: Sabayon 15.12"
description = "15.12 Press release"
date = "2015-11-28"
categories = [ "releases", "sabayon" ]
tags = [
"releases",
"sabayon"
]
+++

<center><img src="/img/press-header-roll_0.png" class="img-responsive" alt="Sabayon Press release"></center>

Sabayon 15.12 is a modern and easy to use Linux distribution based on Gentoo, following an extreme, yet reliable, rolling release model.

This is a monthly release generated, tested and published to mirrors by our build-servers containing the latest and greatest collection of software available in the Entropy repositories.
The Change-log files related to this release are available on [our mirrors](http://dl.sabayon.org/iso/monthly/ChangeLogs/).

The list of packages included in each Sabayon flavor is available inside "*.pkglist" files. Our team is always busy packaging the latest and greatest stuff. If you want to have a look at what's inside our repositories, just go to our [packages website](https://packages.sabayon.org/).

All the release variants can be found on the [download section.](/download).

Please read on to know where to find the images and their torrentfiles on our mirrors

# Changes

This is a *minor* release: contains bugfixes and enhancements to the Sabayon distribution.

## Gnome 3.18

Gnome 3.18 is in our testing repositories, it will hit main repositories when it could be considered safe.
If you can't wait and you don't know how to enable testing repositories and willing to be a tester read [here](http://blog.mudler.pm/2015/10/sabayon-testers-testers-testers.html) and [here](https://wiki.sabayon.org/index.php?title=En:Entropy#Testing_Branch_Limbo)

## Plasma 5

<center><img src="https://joostruis.files.wordpress.com/2015/09/plasma_sab.png?w=582&h=217" class="img-responsive" alt="Plasma 5 sabayon logo"></center>

All major components of Plasma where updated:

* kde-frameworks 5.16
* Plasma desktop (and all it's components) 5.4.3

## ARM

ARM, we are coming! we successfully built RaspberryPi2 images, as you are reading we are growing the ARM (hfp) repository and setting up the infrastructure to make automated releases.

We actually rented an ARM server for that purpose since we are going to fully support the ARM hfp architecture in that way you can use Sabayon on your favorite boards!

If you want help us, please take in consideration also <a href="/donate" role="button">donating <i class="fa fa-heart"></i> </a>. 

## Future plans

Stay tuned! We are always busy to give you the Sabayon experience in your box. We have a lot of exciting updates in the pipeline for the next releases!


# Release informations

Here will follow generic informations about the available releases, along with the current state of Sabayon.

## Available releases

As for now we offer 64bit images only.
But you are free to choose between the wonderful minimalism of GNOME, the eyecandy of KDE or the old fart called Xfce. If you are the kind of person who just needs Fluxbox/Openbox/whatever else, just get the Minimal image and you won’t be hit by the “OMG candies” bloat that is in the other images.

## Docker

We offer official docker releases. You can find them in [our official docker profile](https://hub.docker.com/r/sabayon). They are updated daily with the latest and greatest stuff from Entropy repositories.
There also is a [Docker image](https://hub.docker.com/r/sabayon/builder-amd64/) available to build Sabayon packages as well, without the need to have all the tools required in your existing machine [here](http://blog.mudler.pm/2015/11/part-1-building-gentoo-and-sabayon.html) you can find a guide on how to use the Docker builder image.

## Vagrant images

We couldn't ship just docker images of course. You can find a barebone Sabayon image in the VagrantCloud (now called Atlas).
<ins datetime="2018-02-16">(Removed broken link)</ins>
Deploying a Sabayon image now can be even more easier:

    vagrant init Sabayon/spinbase-amd64; vagrant up --provider virtualbox


## Sabayon Server Edition

The Server Edition is just perfect for those who want to run this distro as a pure server. The installer is still Calamares (just GUI install as for now), but running on a adhoc
instance of X, that consequentially bloats the ISO size, but after install all the additional components requested by Calamares are removed from the system. We now also service you with Vagrant images.

## Binary vs Source Package Manager

It’s up to you whether turn a newly Sabayon installation into a geeky Gentoo ~arch system or just camp on the lazy side and enjoy the power of our binary, dumbed down Applications Manager (a.k.a. Rigo). With Sabayon you are really in control of your system the way you really want. [Read the wiki page if you plan mixing the two package managers](https://wiki.sabayon.org/index.php?title=HOWTO:_Safely_mix_Entropy_and_Portage).

## Native NVIDIA and AMD GPU drivers support

All our releases natively support the latest and greatest GPU hardware from NVIDIA and AMD through their proprietary drivers. Whether you want to enjoy your Linux rig for gaming or video playback, you can. For AMD hardware though, we default to the Open Source implementation for the supported cards. Make sure to pass “nomodeset” to the boot command line to force the proprietary drivers to be used instead: [head over the wiki for more details](https://wiki.sabayon.org/index.php?title=HOWTO:_Get_AMD/ATI_or_Nvidia_Video_Cards_working_in_Sabayon#AMD_-_Open_Source_to_FGLRX).

## LTSI Linux Kernels offered

We are tracking the 3.10, 3.12, 3.14, 3.18 and 4.1 [Long Term Stable Linux kernels](http://ltsi.linuxfoundation.org/what-is-ltsi), offering (almost) same-day updates to them. If you are using Sabayon in a server environment, you surely welcome this. However, if you’re using Sabayon on your laptop, desktop workstation, switching between kernels or just moving to a new version has become a no-brainer operation through Rigo: just go to the preferences menu, select the kernel menu (LTS and regular kernels are listed in separate menus), pick a kernel and click “Install”. Rigo will take care of updating external modules in a reliable and safe way on your behalf.

# Download Links

* [Sabayon Mirrors Page](/mirrors)
* [<i class="fa fa-cloud"></i> Sabayon Docker Hub](https://hub.docker.com/r/sabayon)
* <i class="fa fa-cloud"></i> Sabayon on Atlas (VagrantCloud) <ins datetime="2018-02-16">(Removed broken link)</ins>
* [Sabayon Monthly Images Download Page](http://dl.sabayon.org/iso/monthly/monthly.html)
* [Sabayon BitTorrent Tracker](http://torrents.sabayon.org/)
* [<i class="fa fa-facebook"></i> Join us on Facebook](https://www.facebook.com/groups/36125411841)
* [<i class="fa fa-google"></i> Join us on Google+](https://plus.google.com/+sabayon)
* [Donate to Sabayon!](https://www.sabayon.org/donate)

Please find the official file names and hashes below.

# Files - download directly

* [<i class="fa fa-download"></i> Sabayon GNOME (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_15.12_amd64_GNOME.iso)
* [<i class="fa fa-download"></i> Sabayon KDE (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_15.12_amd64_KDE.iso)
* [<i class="fa fa-download"></i> Sabayon Xfce (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_15.12_amd64_Xfce.iso)
* [<i class="fa fa-download"></i> Sabayon MATE (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_15.12_amd64_MATE.iso)
* [<i class="fa fa-download"></i> Sabayon Minimal (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_15.12_amd64_Minimal.iso)
* [<i class="fa fa-download"></i> Sabayon Server (64 bit)](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_15.12_amd64_Server.iso)

<h4>Have you considered donating yet? Help us! <a class="btn btn-danger btn-xs" href="/donate" role="button"><i class="fa fa-heart"></i> Donate </a> today!</h4>
