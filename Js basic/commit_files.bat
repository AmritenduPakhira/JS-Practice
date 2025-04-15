@echo off
for %%f in (*.js) do (
    git add "%%f"
    git commit -m "Add solution: %%f"
) 