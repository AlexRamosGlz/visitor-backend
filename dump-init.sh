#!/bin/bash

##################################################################
#
#   copy db snapshot from my local machine to the container
#
##################################################################

USER=root
PASSWORD=12345
LOCAL_DB_NAME=test

mysql -u $USER -p$PASSWORD $LOCAL_DB_NAME < /home/visitor-dump.sql