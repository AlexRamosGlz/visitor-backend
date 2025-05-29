#!/bin/bash

##################################################################
#
#   copy db snapshot from rds remote database to my local machine
#
##################################################################

usage() {
    echo "$(basename $0) -h HOST -u USER -p PASSWORD REMOTE_DB_NAME LOCAL_DB_NAME"
}

copy_snapshot() {
    mysqldump -h source_MySQL_DB_instance_endpoint \
    -u $USER \
    -p $PASSWORD \
    --port=3306 \
    --single-transaction \
    --routines \
    --triggers \
    --databases $REMOTE_DB_NAME $LOCAL_DB_NAME > $PATH
}

PATH="/var/lib/mysql"

