---
title: "Echoes of Isovios"
kind: game
description: "2D Action Platformer Roguelike"
summary: "A game where you fight robots, demons, mages, and dragons to rectify past mistakes."
period: "2024 - 2026"
role: "enemies & bosses subteam lead"
team: "30+ person team"
stack: ["Unity", "C#"]
highlights: ["17 enemies", "4 bosses", "shipped on Steam"]
reel: /media/isovios.mp4
poster: /media/isovios.jpg
links:
  - label: "Play on Steam"
    href: https://store.steampowered.com/app/4363270/Echoes_of_Isovios_A_Legacy_Undone/
  - label: "GitHub"
    href: https://github.com/PurdueSIGGD/SIGGD-Game-2024
---

## Overview

As the main enemy developer for Purdue SIGGD's 2024-25 game, I was responsible for over 70% of
the diverse enemy roster, including all 4 boss fights.
I also worked on miscelaneous features such as player abilities, VFX, and implementing level backdrops.

A major factor in this project's success was frequent communication across multidisciplinary teams
to guide the direction of the game and the player experience.

## Enemies

There are a variety of enemy designs in the game, the majority of which I implemented in the game. All the designs were
behavioral, which meant it was solely up to me to decide how to make it happen.

Some examples are shield-bashing riot police, fireball-launching mages, enemies that spawn other enemies, and support enemies that buff other enemies via damage boosting or shielding.

One enemy I'm particularly proud of is the Oni, a fast-flying demon skull that can target other enemies. Any kills it gets increases it's speed and damage, so if you leave it alone and let it rack up kills, it may become too
strong for you to handle.

I also made a general, reusable enemy spawn orb prefab to act
as a spawn indicator/delay. Combined with the modular flight movement script,
the orbs doubled as a special attack for a summoner-class boss fight. 

## Boss Encounters

Implemented the entire final boss encounter just hours before a major milestone live demo. 

Because of the complex design specifications, two brand-new systems had to be designed on the
fly: a custom combination builder supporting arbitrarily complex chains, and a multi-phase encounter system.  

Other boss fights I made are a giant laser-firing supercomputer, a teleporting necromancer, and a giant skeletal dragon.

## Support the Game on Steam!

You can play it completely for free [here](https://store.steampowered.com/app/4363270/Echoes_of_Isovios_A_Legacy_Undone/)!