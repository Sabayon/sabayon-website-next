+++
title = "AMDGPU and Linux growing pains"
description = "AMDGPU"
date = "2017-06-24"
categories = [ "sabayon" ]
tags = [
"amdgpu",
"sabayon"
]
+++

Some of you may be aware that FGRLX is dead and AMDGPU-PRO is the new 
proprietary (hybrid) driver. Some of you may still be using the radeon driver 
on AMD HD7XXX or R9 2XX (SI/CIK) video cards. This will most likely change
in the future. [Methods of switching are being discussed for 4.13 kernel](https://www.phoronix.com/scan.php?page=news_item&px=AMDGPU-Radeon-Switching-CIK)

## AMDGPU-PRO

There have been a few questions I've noticed about having issues with HDMI
audio over AMDGPU and/or people asking when AMDGPU-PRO will be be supported.
I'm here to say AMDGPU-PRO isn't coming to Gentoo/Sabayon, but for good reason.

Differences in AMDGPU and AMDGPU-PRO, once complete, will be minimal. 
AMDGPU-PRO is a "hybrid" driver meaning paritially open and closed source.
Nearly everything in AMDGPU-PRO will be in AMDGPU open source. AMDGPU-PRO
will be geared for supporting FirePRO cards in workstations and tested
to support things such as solidworks and other business software. 

Currently, there are some gaps in support. Where PRO supports Freesync, HDMI 2.0,
HDMI Audio, OpenCL, etc., the AMDGPU driver will eventually attain all that
through what is known as Display Code (DC) or DAL/HAL (Display/Hardware abstraction
layer). The old DAL was just as it sounds, an abastraction layer. This 
could basically be summed up as a middle man layer that needed translation
to be native or direct communication with the hardware. This is not allowed in
the Linux Kernel and for good reason. We would want native and direct communication
with hardware which is better for performance and being maintained and clean.

So why did AMD use a HAL? Well, the simplest reason was for sharing code.
AMD's software driver team is small. To save time, money, and effort, using
a HAL was a simple method. They could write code that (mostly) worked for
both Windows and Linux at the same time. So primary focus on Windows translated
to some focus on Linux. Unfortunately, this doesn't mean it worked well.
We all remember how "lovely" fglrx was at times with broken crossfire support,
broken eyefinity setup, poor kernel support, etc.

OK so small software dev team, HAL isn't fully working in this instance,
what is the solution? They decided to go open source. Great, shouldn't this
be simple? Short answer, No. They have to go over code with a fine tooth comb
to make sure they aren't releasing code they "don't own" persay. Can't exactly
opensource DirectX related etc. After that, they also have to remove the HAL and recreate
code from scratch to make a native/direct communication line for the Linux kernel.
You could say this is essentially rewriting the driver from scratch. Its also
more than just a display driver. You have Vulkan, OpenCL, HSA, VCE, UVD and the many 
other interfaces in which one may use the graphics card. 

So when can we expect to see support for all items the display code brings us?
Thats an excellent, but daunting question. 
AMD is about to meet the crossroads in which they either: 

* Not support their latest graphics cards and APUs, VEGA and beyond, upon release
* Push their team to get the DAL/HAL converted and submitted to the Linux kernel
* ALL of the above

The pressure is on. They know they need support for their latest graphics chipsets, but
anything VEGA and beyond requires the new display code to even work on Linux. I suspect
we may not see working VEGA on AMDGPU (non-PRO), at least, until the end of the year.
Thats cutting it close if AMD expects to sell raven ridge APUs at the end of this year.
I could be proven wrong, but who knows? Kernel release cycles are consistantly about 
[70 days apart](https://kernelnewbies.org/LinuxVersions), so 2 kernel releases could be Dec of this year.
This massive change could be right on time to at least have some basics working.
4.13-dev already is seeing tons of [raven code](https://git.kernel.org/pub/scm/linux/kernel/git/next/linux-next.git/commit/?h=next-20170623&id=04d4fb5fa63876d8e7cf67f2788aecfafc6a28a7) being dropped.


## What about now and what about gamers?

You'll be happy to know you're not forgotten. Mesa+AMDGPU has been gearing
itself up for supporting gamers. In fact since the opensource community has
gotten its hands on AMDGPU, its outperforming AMDGPU-PRO in several instances.
Is the opensource driver perfect? No, far from it, but its growing by leaps
and bounds at an accelerated rate. Even Valve has dedicated some resources
to assisting in the growth of AMDGPU.

What about Vulkan support? Its there. AMDGPU has radv which is also growing
quickly. radv is the radeon opensource vulkan project. Have you tried DOTA2
with vulkan lately? It works. [See the benchmarks and gaming results here.](https://www.phoronix.com/scan.php?page=article&item=amdgpu-new-1710&num=1)

Valve has also offered its services to help forward AMDGPU. [Looking forward to VR.](https://www.phoronix.com/scan.php?page=news_item&px=AMDGPU-PRO-VR-Linux)
Virtual Reality is becoming big in gaming and soon Linux thanks to Valve.
Valve has also shown support for [MESA](https://www.gamingonlinux.com/articles/steamos-updated-valve-drops-amdgpu-pro-for-mesa.9712/page=2) only setup.


## So how does this affect Sabayon?

Well, you're going to notice the obvious, HDMI/DP Audio may not work yet, 
no freesync, no HDMI 2.0, no VEGA and beyond, Vulkan support may be hit
and miss. If you're using an HD7XXX or R9 2XX card, your drivers may change
after a kernel upgrade resulting in different behavior. People looking
for AMDGPU-PRO should and probably would abandon that thought considering
the performance gaming-wise is better off on the open source driver.
You may also have noticed the bump in MESA lately to 17.1? MESA may get
bumped more frequently due to the constant development for AMDGPU.

We understand you may feel some frustration in this time awaiting fixes,
but please be aware this issue is affecting all Linux distributions.
Its the typical growing pains of Linux when a large change takes place.
We are keeping on top of it and trying to stay up-to-date bringing fixes,
and performance boosts, but maintaining stability. 

We hope you're enjoying Sabayon just as much as we do!

-Frosty


#### Have you considered donating yet? Help us! [Donate](/donate) today!
