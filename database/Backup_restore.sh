# This script backs up the Mongo-db databse and restores it so that the changes can reflect in the Atlas server online.
#!/bin/bash

# Configuration
LOCAL_DB_NAME="joseph_portfolio"
BACKUP_DIR="./backup"
ATLAS_URI="mongodb+srv://Developer:Naomywangui-9845@cluster0.l95ri.mongodb.net/$LOCAL_DB_NAME"

# Create backup
echo "Starting backup of database '$LOCAL_DB_NAME'..."
mongodump --db $LOCAL_DB_NAME --out $BACKUP_DIR

if [ $? -ne 0 ]; then
    echo "Backup failed! Exiting..."
    exit 1
fi

echo "Backup completed successfully."

# Restore to Atlas
echo "Starting restore to Atlas..."
mongorestore --uri="$ATLAS_URI" --dir=$BACKUP_DIR/$LOCAL_DB_NAME

if [ $? -ne 0 ]; then
    echo "Restore failed! Exiting..."
    exit 1
fi

echo "Restore completed successfully."

# Clean up
echo "Cleaning up backup directory..."
rm -rf $BACKUP_DIR

echo "Backup and restore process completed successfully."
