#!/bin/bash

##################################################################
#
#   copy db snapshot from my local machine to the container
#
##################################################################

USER=root
PASSWORD=15100293
LOCAL_DB_NAME=test

mysqldump -u $USER -p$PASSWORD --databases $LOCAL_DB_NAME > visitor-dump.sql

echo "$0 Initiated...."