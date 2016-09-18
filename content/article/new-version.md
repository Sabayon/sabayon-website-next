+++
title = "New version"
description = ""
date = "2015-06-01"
categories = [ "sabayon" ]
tags = [
"development",
"sabayon"
]
+++

**New version of Sabayon is out! Install it or do equo update, or something. Or not.**

Sabayon 15.06 is a modern and easy to use Linux distribution based on Gentoo, following an extreme, yet reliable, rolling release model.

This is a monthly release generated, tested and published to mirrors by our build servers containing the latest and greatest collection of software available in the Entropy repositories.

In this release we focused also our attention on a big restyle. Yes you heard it well.

## Psst! You can’t be serious

We are. We changed a lot of thing under the hood, and with this release we wanted to show them up also on the surface.

All the flavors received the deserved love.

We moved to 4.0 kernel, gcc 4.9.2, systemd 216, x265 support, primus for high performance graphics on optimus card, prepared Entropy for Plasma 5, libav 11.3, Kodi (the new name of XBMC) : the complete ChangeLog files related to this release are available on our mirrors. We have some very exciting improvements in the pipeline.

The list of packages included in each Sabayon flavor is available inside “.pkglist” files. If you want to have a look at what’s inside our repositories, just go to our packages website.

Please read on to know where to find the images and their torrent files on our mirrors.

##Fresh software, at all times

Sabayon developers have the funny habit of packaging all the latest stuff that is in the Gentoo repositories and make it available as soon as possible to our users. If you are looking for the latest KDE, GNOME or LibreOffice, the chance that “it’s all in the repos already” are very high. We keep rolling 24/7, 365 days a year, because old software get us instantly bored.

## Available releases

We offer only 64bit releases.

Anyway you are free to choose between the wonderful minimalism of GNOME, the eyecandy of KDE or the old fart called Xfce. If you are the kind of person who just needs Fluxbox/Openbox/i3 or whatever else, just get the Minimal image and you won’t be hit by the “OMG candies” bloat that is in the other images.

## Steam Big Picture mode

Following our well appreciated Media Center mode that lets you convert your computer into an XBMC-based media center, we’re now offering a way to get away from the boring Christmas movies and start doing something more serious: gaming, on Linux. Our KDE and GNOME images come with Steam preinstalled and ready to be launched. In addition to this, a new boot and install mode called “Steam Big Picture” (formerly and improperly known as SteamBox mode) is now available letting you turn your computer into a real Linux gaming console, no matter if it is NVIDIA, AMD or Intel GPU-based.

## Binary vs Source Package Manager

It’s up to you whether turn a newly Sabayon installation into a geeky Gentoo ~arch system or just camp on the lazy side and enjoy the power of our binary, simple to use Applications Manager (a.k.a. Rigo) – or command line tool called equo. With Sabayon you are really in control of your system the way you really want.

## Native NVIDIA and AMD GPU drivers support

All our releases natively support the latest and greatest GPU hardware from NVIDIA through the proprietary driver. Whether you want to enjoy your Linux rig for gaming or video playback, you can. For AMD hardware though, we default to the Open Source implementation for the supported cards. Make sure to pass “nomodeset” to the boot command line to force the proprietary drivers to be used instead, head over the wiki for more details.

## LTS Linux Kernels, 3.10, 3.12 offered

We are now tracking the 3.10, 3.12, 3.14 Long Term Stable Linux kernels, offering (almost) same-day updates to them. If you are using Sabayon in a server environment, you will surely welcome this. However, if you’re using Sabayon on your laptop, desktop workstation, switching between kernels or just moving to a new version has become a no-brainer operation through Rigo: just go to the preferences menu, select the kernel menu (LTS and regular kernels are listed in separate menus), pick a kernel and click “Install”. Rigo will take care of updating external modules in a reliable and safe way on your behalf.
