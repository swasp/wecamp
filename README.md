SWA(S)P.

SWASP is a airline seat swapping system.

Requirements:
* PHP
* Git
* Vagrant
* VirtualBox

Setup instructions:

* Clone the project `git clone git@gitlab.weca.mp:wecamp/team-jeroen.git`
* Create the development environment `vagrant up`
* (once) add ```192.168.56.101 api.swasp.local web.swasp.local swasp.local``` to your local ```/etc/hosts```
* Go into ```api``` and call ```composer install``` to setup the API
* Go into ```web``` and call ```npm install``` to setup the Web-Frontent
