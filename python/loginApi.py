import requests
import json 

def getEmployeeToken():
    apiUrl="http://localhost:5001/api/employee/login"
    token=''

    username = input('Enter username')
    password = input('Enter password')

    response  = requests.post(apiUrl, json ={
        "username": username,
        "password": password
    })

    if response.status_code == 200:
        info = response.json()
        token = info['token']
        return token 
    else:
        return ''

 
def getUserDetails(token):
    apiUrl="http://localhost:5001/api/auth/user"
    header= {
        "Authorization": f"Bearer {token}"
    }
    
    response = requests.get(apiUrl,headers=header)
    if response.status_code == 200:
        user = response.json() 
        return user
    else:
        return ''
    
while True:
    print("1. Employee Login")
    print("2. Admin Login")
    
    op = input("Enter the option")
    
    if op == "1":
        token = getEmployeeToken()
        if token == '':
            print('Invalid Credentials')
            break
        
        user = getUserDetails(token)
        
        if(user == ''):
            print('Invalid Token!!')
        else:
            print(f"Welcome {user["name"]}  ROLE: {user["role"]}")
                
        break 
    
    if op == "2":
        print("not available yet")
        break         

