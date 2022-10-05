# F22-Projects


## Every time you want to contribute upstream

Do This:

```shell
cd /path/to/DS219/f22-projects
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
## Every time you want to update your working branch until it's merged

Do This:

```shell
cd /path/to/DS219/f22-projects
git fetch --all
git branch # you'll want to be in the branch you are updating
git checkout my-new-branch # might not be necessary
git rebase upstream/main
# add your changes
git add .
git commit --signoff -m "this is my new contribution"
git push --force-with-lease origin my-new-branch
```
