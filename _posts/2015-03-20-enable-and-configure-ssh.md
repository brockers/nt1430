---
layout: post
title: "Enable & Configure SSH"
date: 20150320 15:31:31
categories: unit01
---

By default Fedora 21 doesn't have ssh enabled.  So let's fix that. 

```bash
su -
# Enter root password.  Now as root run the following to commands to start our sshd service, and enable it so that it will start again after any reboot.
systemctl enable sshd
systemclt start sshd
# The service is running now, but we need to open the firewall ports to make it usable to other ssh clients.
firewall-cmd --add-port=22/tcp --permanent
firewall-cmd --add-port=22/udp --permanent
```

That will enable you to remotely manage the system via ssh.  Remember you can also look up your system IP with

```bash
ifconfig
```

and connect to that machine from another client with _ssh username@ip-address_, for example:

```bash
ssh bobby@10.0.0.10
```

will connect me to the computer with IP address 10.0.0.10 as user bobby regardless of which user I am logged in as currently.

Finally, another useful command for _checking_ the status of a service is:

```bash
systemctl status sshd
```

Which can be used to verify a service is started or stopped.
