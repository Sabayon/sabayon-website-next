+++
title = "Sabayon Linux development in 2015"
description = ""
date = "2015-08-17"
categories = [ "sabayon" ]
tags = [
"development",
"sabayon"
]
+++

<p>In case you didn’t notice, last months some major changes have been made to the Sabayon Linux project. Most are pure technical changes in the project management that the end users will never notice. Here is a short log.</p>
<p><strong>Docker based images</strong></p>
<p>These are forked directly from a Gentoo stage3 docker image. The result is a very clean chroot that is even closer to Gentoo. Our docker pulls in the stage3, adds Sabayon overlay, installs Entropy to a point where it can run. Then it checks the Portage database to list what packages are installed and replaces them with the packages from Entropy. (Ain’t that cool?). Now we can keep our minimal chroot current and easy make changes whenever we want. The docker base image is then being “squashed” so we can feed it as an image to our Molecule™ script that will build our iso images for us.</p>
<p>With this move we also made the creation of spins more accessible to developers! Go fork us!</p>
<p><strong>MATE spin</strong></p>
<p>The MATE spin will be brought back as an “official” spin.</p>
<p><strong>Artwork</strong></p>
<p>The Sabayon artwork is now completely modular. Whoever wants to create his own spin (or distro based on Entropy) can now simply fork these artwork ebuilds and package them in their own Entropy™ repository.</p>
<p><strong>Installer</strong></p>
<p>We replaced Anaconda installer with Calamares. Many users complained about buggy Anaconda and the Calamares project was designed for distro’s like Sabayon Linux. At the moment Calamares still lacks some features, like disk-encryption, but we expect them to be implemented sooner or later. Obviously Calamares is fully theme-able and all the artwork is in a separate artwork package. The installer configuration is shipped with the app-misc/calamares-sabayon-base-modules package.</p>
<p><a href="https://calamares.io/">https://calamares.io/</a></p>
<p><strong>Plasma desktop 5</strong></p>
<p>Not officially supported yet but you can now add a community repository and install it.</p>
<p><strong>New developers</strong></p>
<p><a href="https://plus.google.com/u/0/+EttoreDiGiacinto/posts" target="_blank">Ettore Di Giacinto</a> and <a href="https://plus.google.com/u/0/+FrancescoFerro26/posts" target="_blank">Francesco Ferro</a> joined the Sabayon Linux development team.</p>
<p><strong>ARM</strong></p>
<p>We are planning to bring back ARM support.</p>
<p><em>So as you can see we’ve been busy little bees getting all this done.</em></p>
<p>You can find us here:</p>
<p><a href="https://www.sabayon.org/">https://www.sabayon.org/</a></p>
<p><a href="https://github.com/Sabayon">https://github.com/Sabayon</a></p>
<p><a href="https://hub.docker.com/r/sabayon/">https://hub.docker.com/r/sabayon/</a></p>
<p><a href="https://plus.google.com/communities/111215969224831918857">https://plus.google.com/communities/111215969224831918857</a></p>
<p><a href="https://www.facebook.com/groups/36125411841/">https://www.facebook.com/groups/36125411841/</a></p>
<p>You can fund us here:</p>
<p><a href="https://pledgie.com/campaigns/19051" target="_blank">https://pledgie.com/campaigns/19051</a></p>
<p>  <a rel="nofollow" href="http://feeds.wordpress.com/1.0/gocomments/joostruis.wordpress.com/337/"><img alt="" border="0" src="http://feeds.wordpress.com/1.0/comments/joostruis.wordpress.com/337/"></a> <img alt="" border="0" src="https://pixel.wp.com/b.gif?host=joostruis.wordpress.com&amp;blog=13154356&amp;post=337&amp;subd=joostruis&amp;ref=&amp;feed=1" width="1" height="1" style="display: none !important;"></p>