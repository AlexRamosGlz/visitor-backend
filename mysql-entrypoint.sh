#!/bin/bash

##################################################################
#
#   copy db snapshot from rds remote database to my local machine
#
##################################################################

PATH="/var/lib/mysql"

copy_snapshot() {
    local HOST=rds
    local USER=admin
    local PASSWORD=12345
    local PORT=3306
    local REMOTE_DB_NAME=remote_test
    local LOCAL_DB_NAME=local_test

    mysqldump -h $HOST \
        -u $USER \
        -p $PASSWORD \
        --port=3306 \
        --single-transaction \
        --routines \
        --triggers \
        --databases $REMOTE_DB_NAME $LOCAL_DB_NAME > $PATH
}

#copy_snapshot

echo "$0 Initiated...."

exec $@