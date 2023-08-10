1-se creo un repo como fork del repositorio origilan
2-paso uno se clono el repositorio con lo que es git clone
$ git clone https://github.com/bcaal87/umg_asii.git
3-se creo una rama y cambiamos a esta con checkout -b hotfix6209
se implementaron los cambios en el index
con los siguentes comandos se hiceiron los pasos
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git checkout hotfix6209
Already on 'hotfix6209'
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git add index4090-20-6209.html
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git commit -m ":bug:  index4090-20-6209.html"          
 1 file changed, 170 insertions(+)
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git push origin hotfix6209
Enumerating objects: 4, done.
Delta compression using up to 2 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 2.23 KiB | 2.23 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'hotfix6209' on GitHub by visiting:
remote:      https://github.com/AndresSantosSotec/umg_asii_ICarnet4090-20-6209/pull/new/hotfix6209
To https://github.com/AndresSantosSotec/umg_asii_ICarnet4090-20-6209.git
 * [new branch]      hotfix6209 -> hotfix6209
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> 
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git checkout hotfix6209

se subieron los cambios con git add:
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git add .

se hizo el merce y se agregaron los cambios a la rama master 
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git add .
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git commit -m ":star2: Cambios importantes en index4090
On branch hotfix6209
Everything up-to-date
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git checkout main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git merge hotfix6209
Updating bf0a048..808027a
Fast-forward
 index4090-20-6209.html | 170 +++++++++++++++++++++++++++++++++++++++++++++++++
 readme6209.md          |   4 ++
 2 files changed, 174 insertions(+)
 create mode 100644 index4090-20-6209.html
 create mode 100644 readme6209.md
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git commit -m ":star2: Fusionar cambios desde hotfix6209 a main"
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

  se creo el archivo readme.md con el numero del carnet y se subieron los cambios al repositio remoto

  2 files changed, 174 insertions(+)
 create mode 100644 index4090-20-6209.html
 create mode 100644 readme6209.md
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git commit -m ":star2: Fusionar cambios desde hotfix6209 a main"
On branch main
Your branch is ahead of 'origin/main' by 2 commits.
  (use "git push" to publish your local commits)

nothing to commit, working tree clean
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209> git push origin main
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/AndresSantosSotec/umg_asii_ICarnet4090-20-6209.git
   bf0a048..808027a  main -> main
PS C:\xampp\htdocs\Proyectos\umg_asii_ICarnet4090-20-6209>

