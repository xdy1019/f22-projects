# F22-Projects

This is the DS 219 Fall 2022 class repository.

Here are some good habits when working with git & GitHub:

## To contribute to this repository

Do This:

```shell
# f22-projects should be forked & cloned locally
# git remote for DS219/f22-projects (upstream)  should be set

cd /path/to/DS219/f22-projects
git branch # always know what branch you're working in!
git checkout main
git fetch --all
git rebase upstream/main
git push origin main
git checkout -b my-new-branch

# Make some changes...

git add .
git commit --signoff -m "this is my new contribution"
git push origin my-new-branch

# Then go to GH, open a PR against upstream/main
```
## To update your working branch

Do This:

```shell
cd /path/to/DS219/f22-projects
git fetch --all
git branch # you'll want to be in the branch you are updating
git checkout my-new-branch # might not be necessary
git rebase upstream/main

# add more changes

git add .
git commit --signoff -m "this is my new contribution"
git push --force-with-lease origin my-new-branch
```
