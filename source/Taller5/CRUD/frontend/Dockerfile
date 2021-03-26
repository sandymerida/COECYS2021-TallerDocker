FROM nginx:alpine

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist/frontend /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]