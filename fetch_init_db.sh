#!/bin/bash

GETOPS="u:p:d:h:-:"

help() {
  printf "Usage: $0 -u <postgres_user> -d <postgres_db_name> -h <postgres_host> -P <init_dump_file_path>\n"
  exit 1
}

while getopts "$GETOPS" opt; do
  case $opt in
    -)
      case $OPTARG in
        help) help ;;
        *) help ;;
      esac
      ;;
    u) POSTGRES_USER="$OPTARG" ;;
    d) POSTGRES_DB_NAME="$OPTARG" ;;
    h) POSTGRES_HOST="$OPTARG" ;;
    p) INIT_DUMP_FILE_PATH="$OPTARG" ;;
    *) help ;;
  esac
done

if [ -z "$POSTGRES_USER" ] || [ -z "$POSTGRES_DB_NAME" ] || [ -z "$POSTGRES_HOST" ] || [ -z "$INIT_DUMP_FILE_PATH" ]; then
  help
fi

if [ -f ${INIT_DUMP_FILE_PATH} ];
then
    printf "Dump encontrado, eliminando por el nuevo...\n"
    rm ${INIT_DUMP_FILE_PATH} &> /dev/null
elif [ -d ${INIT_DUMP_FILE_PATH} ];
then
    printf "Dump encontrado, eliminando por el nuevo...\n"
    rm -r ${INIT_DUMP_FILE_PATH} &> /dev/null
fi

printf "Descargando dump de la base de datos...\n"
printf "Ingrese la contraseña para el usuario ${POSTGRES_USER}:\n"
pg_dump -h ${POSTGRES_HOST} -U ${POSTGRES_USER} -d ${POSTGRES_DB_NAME} > ${INIT_DUMP_FILE_PATH}