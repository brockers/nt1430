---
layout: post
title: "Adding Additional Repositories"
date: 2015-03-20 17:00:00
categories: unit01
---

Here are some additional package resources you might want.

{% highlight sh %}
# RPMFusion
yum localinstall --nogpgcheck http://download1.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm http://download1.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm
{% endhighlight %}


