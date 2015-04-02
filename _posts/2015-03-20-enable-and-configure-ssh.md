---
layout: post
title: "Enable & Configure SSH"
date: 20150320 15:31:31
categories: unit01
---

By default Fedora 21 doesn't have ssh enabled.  So let's fix that. 

{% highlight bash %}
su -
# Enter root password.  Now as root run the following to commands to start our sshd service, and enable it so that it will start again after any reboot.
systemctl enable sshd
systemclt start sshd
# The service is running now, but we need to open the firewall ports to make it usable to other ssh clients.
firewall-cmd --add-port=22/tcp --permanent
firewall-cmd --add-port=22/udp --permanent
{% endhighlight %}

That will enable you to remotely manage the system via ssh.
