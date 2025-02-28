from bs4 import BeautifulSoup
import requests
import schedule
import time 

## u can scrap/traverse/go thru any sites HTML source code and fetch info. 
## this is sometimes called as simple crawler

def fetchHeadlines():
    apiUrl="https://www.bbc.com/news"

    response = requests.get(apiUrl); 

    print("Latest Headlines from across the world with BBC... ")
    if response.status_code == 200:
        #parse this response
        soup = BeautifulSoup(response.text,'html.parser')
        data = soup.find_all("h2")
        for d in data:
            print(f"Headline: {d.contents[0]}")


schedule.every(10).seconds.do(fetchHeadlines)

while True:
    schedule.run_pending()
    time.sleep(1)