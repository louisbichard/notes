#Git

##Commands

###Creating a local repository and pushing it to remote

To create a local repository and push it to remote

* Create the local repository and run git init
* Add and commit the first files
* Run `git push --set-upstream https://github.com/louisbichard/notes master`


## Pre recieve hooks
For master push confirmation:

    #!/bin/bash

    protected_branch='master'
    current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')

    if [ $protected_branch = $current_branch ]
    then
        read -p "You're about to push master, is that what you intended? [y|n] " -n 1 -r < /dev/tty
        echo
        if echo $REPLY | grep -E '^[Yy]$' > /dev/null
        then
            exit 0 # push will execute
        fi
        exit 1 # push will not execute
    else
        exit 0 # push will execute
    fi

## Setting up origins

    git remote add origin https://github.com/user/repo.git
    # Set a new remote

    git remote -v
    # Verify new remote
    # origin  https://github.com/user/repo.git (fetch)
    # origin  https://github.com/user/repo.git (push)