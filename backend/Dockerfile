FROM python:3.11-slim-buster

WORKDIR /usr/src/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc

# instalar dependencies
COPY . /usr/src/app/

RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# run entrypoint.sh
COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]