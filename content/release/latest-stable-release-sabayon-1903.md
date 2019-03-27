title = "Sabayon 19.03 - New stable release"
description = "19.03 Press release"
date = "2019-03-31"
categories = ["releases", "sabayon"]
tags = ["releases", "sabayon"]
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
- We changed our default installer. We dropped Anaconda, Long live to Calamares!
- Added UEFI32 bit support! (Intel Sticks, and so on..)
- Latest kernel 4.20
- Python 3 as default
- New Entropy features && general bugfixes
- AMDGPU Enhancements such as extended Vega Support including Radeon VII
- AMD Freesync Ready - MESA19, xf86-video-amdgpu-19, Pending Solid 5.X Kernel
- Nvidia Freesync Ready - "Gsync Supported Monitors" can be enabled in nvidia-drivers-418.43 via the nvidia-settings tool
- Legacy Driver Deprecation - nvidia-304.XX drivers are now deprecated. Cards older than Geforce 8000 non-GTX series use nouveau.
- Work in progress for the new wiki
- We are on Patreon now! [Support the project](https://www.patreon.com/sabayon)


## New Build Infrastructure

Most of the changes that we did sadly aren't noticeable from a user perspective, so we want to share
our happiness about the codebase state.

We've invested time in making our internal tooling better, dramatically important for future enhancements to our rolling release model.

We are using [Mottainai]() in our build infrastructure to automatize build and release #TODO: add link
of Sabayon, allowing us to scale horizontally the load required to build ISOs, packages and more.

The impact is noticeable for us, e.g. now to build all ISOs flavors, takes approx less than 2 hours!

This enables us to care less about repetitive tasks and ease the development process, as we can release bugfixes and do proper QA in 
1/10 of the time before!


## Switch to Dracut as Initramfs

Yes! You heard it well! We moved away from genkernel-next for initramfs generation, now it's all happening on user side. 
Docs for regenerating your initramfs can be found here #TODO: add link


## New Wiki

We heard you, the current wiki is (sadly) in an embarassing state - but we are working on a completely new restyle of it.
As time passed, a lot changed in the Sabayon defaults, that aren't reflected anymore in the current wiki. We encourage for the moment
to snoop over the new wiki which is in the works, as we are adding new articles and documentation there. #TODO: add link


## What to expect next() ?!
We're looking into possible deprecation of the nvidia-drivers-340.XX series drivers. We're curious to hear your thoughts.
Do you own an nvidia graphics card older than the GTX400 Series? Removing these from our repo doesn't prevent installation
as using portage is still an option. What it does help with is, we have to patch each driver to make sure it supports the
latest kernel. Between ZFS, wireguard, nvidia-drivers, and other drivers this can delay the release of newer kernels.
Let us know your thoughts here[]() 

We're working on getting a 5.X kernel out into the repository to fully unlock Freesync for our users. Linux Gaming FTW!

LLVM and Clang 8 are in the works. Better support for OpenCL, OpenMP, AMDGPU Backends, and adds support for newer CUDA devices.

ARM support? Absolutely! Pi3 support is still baking in the oven.

Various package bumps. Get Ready for a refresh! FFMPEG? Check! Ruby? Check! libvdpau? Check! and Many More!


## Thanks to our Patreons

Thanks you all very much for our support! Without your help this release couldn't have been possible. 
We've finally had enough finance to rent machines to use in our new build infrastructure!


### Some picks

Sabayon has now a [Facebook profile](https://www.facebook.com/sabayon.linux)
with a speaking name next to our
[Facebook group](https://www.facebook.com/groups/36125411841).

Development is open, so if you want to have a look at what has been done in
detail, it's right there; you can find the link in the Download section below.

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
