# SFDX  App

## Introduction

this is my introduction

## Dev, Build and Test

## Resources

## Description of Files and Directories

## Issues

## Git Command

delete local branch:
> git branch -d dev

delete remote branch:
> git branch -d -r dev

set up to track remote branch from origin:
> git branch -u origin/dev\
> git push origin --delete dev

create a new local branch and sync it to a new remote branch:
> git push --set-upstream origin dev

steps to create new branch and work on with it and commit to local master and push to remote master
> git checkout -b dev\
> sfdx force:org:open -u dev\
> sfdx force:sorce:pull\
> git add --all\
> git commit -m "change"\
> git checkout master\
> git merge\
> git push\
> git branch -d dev

steps to create new branch and work on with it and sync with remote branch and commit to remote master
> similar with above
> git push --set-upstream origin dev\
> git push master\
> (after remote branch merge remote master) git push origin --delete dev

create a package
> sfdx force`:package:`create --name ltncmp2 --description "all stuff from Trailhead ltncmp practice"\
> --packagetype Unlocked --path force-app --nonamespace --targetdevhubusername DevHub

create a package version
> sfdx force`:package:`version:create -p ltncmp2 -d force-app -k test1234 --wait 10 -v DevHub

install a package version
> sfdx force`:package:`install --wait 10 --publishwait 10 --package ltncmp2@1.0.0-1\
> -ktest1234 -r -u DevHub