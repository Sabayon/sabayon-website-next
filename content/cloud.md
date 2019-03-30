+++
title = "Cloud edition"
description = "Sabayon on Docker, Vagrant, LXD/LXC"
type = "custom"
layout = "cloud"
date = "2015-11-04"
+++

* #### [DockerHub](https://hub.docker.com/u/sabayon/dashboard/)

    docker pull... and there you go
    * [Base - perfect for all your needs](https://hub.docker.com/r/sabayon/base-amd64/)
    * [SpinBase](https://hub.docker.com/r/sabayon/spinbase-amd64/)
    * [For developers](https://hub.docker.com/r/sabayon/builer-amd64/)


* #### [VagrantImage](http://dl.sabayon.org/sbi/vagrant/Sabayon_Linux_DAILY_amd64_SpinBase.box)

    daily Vagrant spinbase image...

* #### [LXD/LXC](https://images.linuxcontainers.org/)

    lxd images to pull and lxc images to build/download...
    * `lxd launch sabayon sab01`
    * `lxc-create --name=sab-lxc  -t sabayon`
    * `lxc-create -t download --name=sab-lxc`

<hr>

#### Have you considered donating yet? Help us! [Donate](/donate) today!
