FROM ubuntu:18.04
LABEL maintainer="Docker student"
RUN apt-get update && apt-get install -y nginx
COPY files/default /etc/nginx/sites-available/default
COPY files/index.html /usr/share/nginx/html/index.html
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]