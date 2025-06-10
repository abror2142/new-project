#!/bin/sh
set -e

php artisan migrate:fresh --seed --force

php artisan route:cache --no-interaction

chown -R www-data:www-data /api /api/vendor
chmod -R 775 /api /api/vendor

exec "$@"