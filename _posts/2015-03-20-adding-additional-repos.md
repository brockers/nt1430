---
layout: post
title: "Adding Additional Repositories"
date: 2015-03-20 17:00:00
categories: unit01
---

By default Fedora include thousands and thousands of open source applications but it cannot (or sometimes will not)
include software for various reasons.  Because of this a number of places and created "Fedora Compatible" repositories
for software.  These are ones I most commonly install.

```bash
# RPMFusion
yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm

# Google Chrome (also adds repository data.)
yum install http://tinyurl.com/mcc77ag

# VirtualBox
cd /etc/yum.repos.d/ && wget http://download.virtualbox.org/virtualbox/rpm/fedora/virtualbox.repo
yum makecache
yum install VirtualBox-4.3
yum group install Development\ Tools
```

### Summary

* __RPMFusion__ is the largest and includes thousands of packages not included in Fedora by default.  
* __Google__ maintains a repository for things like Google Earth, Chrome, & Google Talk.  
* While RPMFusion contains a version of __VirtualBox__ it is sometimes behind the mainline Fedora for various reasons, so VirtualBox keeps their own repo for Fedora
as well.
