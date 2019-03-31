+++
title = "Sabayon 19.03 - New stable release"
description = "19.03 Press release"
date = "2019-03-31"
categories = [ "releases", "sabayon" ]
tags = [
"releases",
"sabayon"
]
+++

The team behind Sabayon is excited to present you the latest stable release:
Sabayon 19.03.

Sabayon is a modern and easy to use distribution based on Gentoo,
which follows a reliable rolling release model.

Please read on or [download](/download/) your flavour :-)

19.03 is a long awaited release, coming with a lot of new features and enhancements:

- New build infrastructure
- Switch to Dracut for initramfs generation
- Full disk encryption support
- Installer switch from Anaconda to Calamares
- Support for 32 bit UEFI! (Intel Sticks, and so on...)
- Latest kernel is 4.20
- Python 3 is default
- Entropy improvements, including better tracking of "automatic" dependencies and a new command, equo mark
- AMDGPU Enhancements such as extended Vega support including Radeon VII
- AMD Freesync ready - MESA19, xf86-video-amdgpu-19, solid 5.X kernel available soon
- Nvidia Freesync ready - "Gsync Supported Monitors" can be enabled in nvidia-drivers-418.43 via the nvidia-settings tool
- Legacy driver deprecation - nvidia-304.XX drivers are now deprecated. Cards older than Geforce 8000 non-GTX series use nouveau.
- Work in progress for the new wiki
- We are on Patreon now! [Support the project](https://www.patreon.com/sabayon)


## New Build Infrastructure

Most of the changes that we did sadly aren't noticeable from a user perspective, so we want to share
our happiness about the codebase state.

We've invested time in making our internal tooling better, dramatically important for future enhancements to our rolling release model.

We are using [Mottainai](https://mottainaici.github.io/docs/) in our build infrastructure to automatize build and release
of Sabayon, allowing us to scale horizontally the load required to build ISOs, packages and more.

The impact is noticeable for us, e.g. to build all ISOs flavors it now takes less than 2 hours!

This enables us to care less about repetitive tasks and ease the development process, as we can release bugfixes and do proper QA in 
1/10 of the time before!


## Switch to Dracut as Initramfs

Yes! You heard it well! We moved away from genkernel-next for initramfs generation, and now initramfs is generated on user side.

Additional information is available [here](https://sabayon.github.io/wiki-next/articles/initramfs/).

## New Wiki

We heard you, the current wiki is (sadly) in an embarassing state - but we are working on a completely new restyle of it.
As time passed, a lot changed in the Sabayon defaults that aren't reflected anymore in the current wiki. We encourage for the moment
to snoop over the new wiki which is in the works, as we are adding new articles and documentation [here](https://sabayon.github.io/wiki-next/).


## What to expect next()?!
Our artwork needs attention, next release might feature a new look and will have more polishing.

We're looking into possible deprecation of the nvidia-drivers-340.XX series to reduce effort needed for keeping new kernels in shape. We're eager to hear your thoughts.

We're working on getting a 5.X kernel out into the repository to fully unlock Freesync for our users. Linux Gaming FTW!

LLVM and Clang 8 are in the works. Better support for OpenCL, OpenMP, AMDGPU Backends, and support for newer CUDA devices.

ARM support? Absolutely! New layered ARMv7 repositories are being developed. We expect them to be ready soon.

We are also working on unattended installer and updates to our server flavor which is more oriented for Cloud/VMs.

Various package bumps. Get Ready for a refresh! FFMPEG? Check! Ruby? Check! libvdpau? Check! and many more!


## Thanks to our Patreons

Thank you all very much for your support! Without your help this release couldn't be possible. 
We've finally had enough finance to rent machines to use in our new build infrastructure!


### Some picks

Sabayon has now a [Facebook profile](https://www.facebook.com/sabayon.linux)
and a [Facebook group](https://www.facebook.com/groups/36125411841).

Development is open, so if you want to have a look at what has been done in
detail, it's all there; you can find the link in the Download section below.

If you are interested or want to contribute, [talk to us](/chat/)!


## Download

### Stable ISOs

All ISOs are 64bit only.

* [Sabayon GNOME](http://dl.sabayon.org/stable/Sabayon_Linux_19.03_amd64_GNOME.iso)
* [Sabayon KDE](http://dl.sabayon.org/stable/Sabayon_Linux_19.03_amd64_KDE.iso)
* [Sabayon MATE](http://dl.sabayon.org/stable/Sabayon_Linux_19.03_amd64_MATE.iso)
* [Sabayon Xfce](http://dl.sabayon.org/stable/Sabayon_Linux_19.03_amd64_Xfce.iso)
* [Sabayon Minimal](http://dl.sabayon.org/stable/Sabayon_Linux_19.03_amd64_Minimal.iso)

### Further download options

* [Sabayon Mirrors Page](/mirrors/)
* [Sabayon Docker Hub](https://hub.docker.com/r/sabayon)
* [Sabayon Monthly Images Download Page](http://dl.sabayon.org/iso/monthly/monthly.html)
* [Sabayon BitTorrent Tracker](http://torrents.sabayon.org/)

## Get in touch with us

* [Join our Facebook group](https://www.facebook.com/groups/36125411841)
* [Like our Facebook profile](https://www.facebook.com/sabayon.linux)
* [Join us on Google+](https://plus.google.com/+sabayon)
* [Donate to Sabayon!](/donate/)
* [Code repositories](https://github.com/Sabayon/)

Thank you for your trust in us. If you would like to support our work,
[talk to us](/chat/) or consider making a [donation](/donate/).
