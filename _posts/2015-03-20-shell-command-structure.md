---
layout: post
title: "Shell Command Structure & Defaults"
date: 20150320 20:31:31
categories: unit01
---

The majority of Bash commands follow a common structure for their usage.  For example the su command,
used to switch between users, can look like this when you want to login as root from another user:

```bash
su --login root
```

The command is composed of three parts __separated by spaces__:

1. __su__ the actual command line program.
2. __--login__ options that change the behavior of the program.
3. __root__ the target of the command.

Options can have short and long forms.  Usually the most commonly used options have a short form you can
use.  For example, because --login is such a common option to pass to su, the same options can be passed
in the following way:

```bash
su -l root
```

Notice the double dash -- before the full word login for long form compared to the lowercase L single dash -
for the short form.  Short form options can be combined for example the two following forms are identical:

```bash
su -l -f root
su -lf root
```

Because long form _words_ are only used with a double dash -- the command line knows that anything after a single
dash must be separate short form options.

Finally, the vast majority of Bash commands have useful defaults.  For example, the most common user that is switched
to is root.  So the su command assumes you want to switch to root if you do not specify a user.  So the followin command
is identical to the one at the very top of this post:

```bash
su -l
```

...and because the --login/-l option is _almost always_ wanted.  su is smart enough to know that is what you want when
you type a dash, even if you do not include any other options. So this last for of our command is the save as well:

```bash
su -
```

The useful defaults will depend on the command and its function.  For example the cd command, which is used to change
between directories, defaults to returning you to your _own_ home directory when no directory is specified.  Like so:

```bash
cd
```

will return you to ~ regardless of where you are in the filesystem.
