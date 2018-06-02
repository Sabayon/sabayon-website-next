+++
title = "Special Release: Sabayon 16.06 for ARM"
description = ""
date = "2016-05-29"
categories = [ "sabayon" ]
tags = [
"development",
"sabayon",
"arm",
"raspberry"
]
+++

<img width="300px" src="http://i.imgur.com/JzlQA4w.jpg">

Dear users,


I'm glad to announce the new Sabayon 16.06 RaspberryPi image. This month you can enjoy the new Media Center release which features Kodi optimized for the Raspberry Pi model 2 and 3.


To celebrate that, we also upgraded the Base image, which comes now with the latest packages from the repositories.
The image comes out of the box with the latest 4.4.y kernel and with the [rpi-update](https://github.com/Hexxeh/rpi-update#rpi-update)
The Media Center image is working as-is Out-of-the-Box and will also perform auto-upgrades automatically on your behalf. And if your TV is modern enough, you can control Kodi also from your TV remote (yay!).


The image on boot will automatically connect to the network, and you can ssh with the following credentials:


username: sabayon password: sabayon



The user is already sudo enabled, but the root user is also available:


username: root password: root



The credentials are valid for both the MediaCenter and Base editions. You can use nmtui, the command line utility for NetworkManager to manage the network connections, included wifi.


You can download the image from [our mirrors](http://dl.sabayon.org/iso/monthly/), you can find it under the iso/monthly/ directory:


	[Sabayon_Linux_16.06_armv7l_RPi_MediaCenter_8GB.img.xz](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.06_armv7l_RPi_MediaCenter_8GB.img.xz)
	[Sabayon_Linux_16.06_armv7l_RPi_Base_8GB.img.xz](http://dl.sabayon.org/iso/monthly/Sabayon_Linux_16.06_armv7l_RPi_Base_8GB.img.xz)


Or you can use the [italian mirror](http://mirror1.mirror.garr.it/mirrors/sabayonlinux/iso/monthly/Sabayon_Linux_16.06_armv7l_RPi_MediaCenter_8GB.img.xz) (which already have the image available).

To write the image to the sdcard, you can just use xzcat:


	xzcat Sabayon_Linux_16.06_armv7l_RPi_Base_8GB.img.xz > /dev/mmcblk0



or you can uncompress and use dd:


	unxz Sabayon_Linux_16.06_armv7l_RPi_Base_8GB.img.xz
	dd if=Sabayon_Linux_16.06_armv7l_RPi_Base_8GB.img of=/dev/mmcblk0



Of course replace /dev/mmcblk0 with your device, and the image name with the one you picked up.


Apart from what you may expect, we won't release amd64 images this month: we have been slowed down by recent upstream bumps that broke our Calamares Installer, making a sucessfully installation an operation mostly impossible. Also because of that, we are thinking to change the release schedule, and provide stable and fixed in time releases. Don't worry! This does not mean that we will stop building daily images, we will never do that!  We are just considering the idea of slowing down our release model (maybe every two months) to give you the best experience and give us the ability to test the new features and enhancements.


Many thanks to Joost (joost_op), Ben (optiz0r) and of course Fabio (lxnay) for testing and for their support thru the development of the RPi image, and Tom Ruis for the illustration on the top of the article (available in the full size  [here](http://i.imgur.com/Q5COMf1.jpg)  and  [here](http://i.imgur.com/JzlQA4w.jpg) )!  Nothing of that would have been possible without you and our community!


We have already ~2000 packages in the ARMhfp repository, including Docker already cutted for ARM boards (yay!), GNOME, XFCE, LXDE and bunch of packages you might find interesting.
ROS framework - The robotics framework, Cacti, Kodi, LAMP stack, just to name a few that are already available on the main repository!
For package requests, head over our [bugzilla](https://bugs.sabayon.org/).
If you appreciate our efforts towards the ARM architecture, please consider to [donate us](/press/donate/) either hardware or money to buy it!


Enjoy,
Ettore Di Giacinto (mudler)
