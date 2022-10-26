import json
import requests

url = "http://localhost:3000/api/insert"

payload = {
    'fname': 'James',
    'lname': 'Ferrer',
    'phone': '09999999999',
    'address1': 'address1',
    'address2': 'address2',
    'email': 'jamessample.com'
    }

r = requests.post(url, json=payload)

print(r.status_code)
print(r.text)
