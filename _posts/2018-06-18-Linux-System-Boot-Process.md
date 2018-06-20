---
layout: post
title: "Linux System Boot Process"
date: Wed Jun 20 10:18:45 CDT 2018
categories: unit01
---

All Operating Systems have a process by which the "start" that begins with turning on the power button and ends with a login screen.  The high-level overview of that process can roughly be described as:

1. Powerbutton gets press, and bios starts looking for hardware
2. Bios finds initial hardware, then loads up the first section on the first disk in its boot order.
3. That first section of the first disk contains a bootloader.
4. Bootloader loads its configuration, uses that information to find/load the OS (which might or might not be on the same disk.)
5. An Operating System kernel is loaded, and the initial RAM data is loaded to pump-prime the OS to start.
6. The Kenel starts up, finds all the hardware it can, then loads a single process (called the God process or init.)
7. The init process starts loading services, configurations, additional drivers, network, etc..
8. Finally, the system is running and waiting for you to do something.

### Resources

* [Detailed Linux Boot Process Step-by-Step](https://utcc.utoronto.ca/~cks/space/blog/linux/LinuxBootOverview)
