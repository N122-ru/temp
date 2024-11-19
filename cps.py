import subprocess

try:
    result = subprocess.run(['cps'], check=True, text=True, capture_output=True)
except FileNotFoundError:
    print("cps not found")
except subprocess.CalledProcessError as e:
    print("bye")
