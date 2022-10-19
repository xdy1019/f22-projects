# Version Control Commands:
From branch main (or whatever branch you want to update from):
1. ```sh git remote add upstream https://github.com/DS219/f22-projects.git```
> Required only on the first time
2. ```sh git fetch upstream```
3. Bring changes into your local repository
```sh git rebase upstream/main```
4. Push changes to your repo
```sh git push origin main```
5. From typescript-nodejs/
```sh npm install```