#!/bin/sh

python manage.py flush --no-input
python manage.py migrate --no-input
python manage.py collectstatic --no-input --clear

gunicorn nsd.wsgi:application --bind 0.0.0.0:8000