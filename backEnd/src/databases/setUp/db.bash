#!/bin/bash

# Colors print
cyan='\033[0;36m'
purple='\033[0;35m'
NOCOLOR='\033[0m'

# Functions
function displayInfo {
    if [ $3 = "Created" ]
    then 
        echo -e "✅ ${cyan} $1 ${purple} $2 ${cyan} $3 ${NOCOLOR}"
    else
        echo "----------------------------------------------------" 
        echo -e "⏳ ${cyan} $1 ${purple} $2 ${cyan} $3 ${NOCOLOR}"
    fi
}

function checkError {
  if [[ 0 -ne $? ]]; then
    echo $1
    exit
  fi
}


# Start setUp
dbName='db_react_app_1'

# Create database
displayInfo "Database" $dbName "setUp"
psql -U postgres -c "DROP DATABASE IF EXISTS ${dbName}"
checkError
psql postgres -c "CREATE DATABASE ${dbName} WITH ENCODING 'UTF8'
                  TEMPLATE template0"
checkError
displayInfo "Database" $dbName "Created"

# Category table creation
table='t_test'
displayInfo "Table" $table "setUp"
# psql ${dbName} -U postgres -c "DROP TABLE IF EXISTS ${table}"
psql ${dbName} -U postgres -c "CREATE TABLE ${table}(
  sys_uuid uuid DEFAULT uuid_generate_v4()
  ,u_name VARCHAR(50) NOT NULL
  ,PRIMARY KEY (sys_uuid)
);"
checkError
displayInfo "Table" $table "Created"




