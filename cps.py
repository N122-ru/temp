import subprocess

try:
    result = subprocess.run(['/app/calibre-web/bin/cps', '-p', '/config/app.db', '-g', '/config/gd.db'], check=True, text=True, capture_output=True)
except FileNotFoundError:
    print("cps not found")
except subprocess.CalledProcessError as e:
    print("bye")
