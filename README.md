# Multi-service Node.js sample

Services:
- service-5010 -> http://localhost:5010
- service-5011 -> http://localhost:5011
- service-5012 -> http://localhost:5012
- service-5013 -> http://localhost:5013
- service-5014 -> http://localhost:5014

Start one:

```
cd service-5010 && npm start
```

Start all (Linux/macOS):

```
./start-all.sh
```

### Connect to a domain (Nginx examples)

Subdomain to a specific service:

```
server {
  listen 80;
  server_name api1.example.com;
  location / {
    proxy_pass http://127.0.0.1:5011;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

Five subdomains for five services:

```
# 5010
server { listen 80; server_name s1.example.com; location / { proxy_pass http://127.0.0.1:5010; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; } }
# 5011
server { listen 80; server_name s2.example.com; location / { proxy_pass http://127.0.0.1:5011; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; } }
# 5012
server { listen 80; server_name s3.example.com; location / { proxy_pass http://127.0.0.1:5012; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; } }
# 5013
server { listen 80; server_name s4.example.com; location / { proxy_pass http://127.0.0.1:5013; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; } }
# 5014
server { listen 80; server_name s5.example.com; location / { proxy_pass http://127.0.0.1:5014; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; } }
```

Path-based routing (single domain):

```
server {
  listen 80;
  server_name example.com;
  location /s1/ { proxy_pass http://127.0.0.1:5010/; }
  location /s2/ { proxy_pass http://127.0.0.1:5011/; }
  location /s3/ { proxy_pass http://127.0.0.1:5012/; }
  location /s4/ { proxy_pass http://127.0.0.1:5013/; }
  location /s5/ { proxy_pass http://127.0.0.1:5014/; }
}
```

Enable and reload Nginx after updating DNS records for your domain:

```
sudo ln -s /etc/nginx/sites-available/your-site.conf /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```
