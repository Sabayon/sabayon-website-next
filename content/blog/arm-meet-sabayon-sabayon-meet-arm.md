+++
title = "ARM meet Sabayon, Sabayon meet ARM."
description = ""
date = "2016-04-30"
categories = [ "sabayon" ]
tags = [
"development",
"sabayon",
"arm",
"raspberry"
]
+++

We are  glad to announce the immediate availability of Sabayon ARM (hfp) for Raspberry Pi 2 and 3. 

This is our first step towards ARM support, the package release scheduling will be different from our amd64 variant. Updates will be on a period of 6 months, except for security or special updates.


The image comes out of the box with the latest 4.4.y kernel and with the rpi-update tool that can be used to update kernel and firmware.


The Username/Password is sabayon:sabayon, and sudo is already set-up.  Just flash the image with dd, and attach it to a network (it will gets an ip automatically from your network).

The OS is set to automatically boot and start eth0 and sshd (so you can connect to it via ssh).



The images will be soon available on all the Sabayon mirrors. For now you can download it from the official TOP-IX italian mirror:

<ins datetime="2018-02-16">(Removed broken links)</ins>

you can however browse our mirror list the image could be found under the iso/monthly/ directory.


To write the image to the sdcard, you can just use xzcat:


	xzcat Sabayon_Linux_16_armv7l_RPi_Base_8GB.img.xz > /dev/mmcblk0


or you can uncompress and use dd:


	unxz Sabayon_Linux_16_armv7l_RPi_Base_8GB.img.xz
	dd if=Sabayon_Linux_16_armv7l_RPi_Base_8GB.img of=/dev/mmcblk0


We have already ~2000 packages in the ARMhfp repository, including Docker already cutted for ARM boards (yay!), GNOME, XFCE, LXDE and bunch of packages you might find interesting.


ROS framework - The robotics framework, Cacti, Kodi, LAMP stack, just to name a few that are already available on the main repository!


For package requests, head over our bugzilla.


If you appreciate our efforts towards the ARM architecture, please consider to donate us either hardware or money to buy it!


Enjoy!
