import ujson as js

print("Parsing JSON dataset (this may take a while)")

# Open and load json file
with open('tokyo-olympics-all-by-type-2021-08-11.json', 'r') as file:
    olympicsData = js.load(file)

players = olympicsData["Participant"]
organisations = olympicsData["Organisation"]
disciplines = olympicsData["Discipline"]
finalData = []

for itemId, item in players.items():
    try:
        organisationId = item["relationships"]["organisation"]["data"]["id"]
        organisation = organisations[organisationId]

        disciplineId = item["relationships"]["discipline"]["data"]["id"]
        discipline = disciplines[disciplineId]

        item = item["attributes"]
        if item["statistics"]["total"] > 0:
            finalData.append({
                "name": item["name"],
                "id": item["externalId"],
                "goldCount": item["statistics"]["gold"],
                "silverCount": item["statistics"]["silver"],
                "bronzeCount": item["statistics"]["bronze"],
                "totalCount": item["statistics"]["total"],
                "country": organisation["attributes"]["name"],
                "discipline": discipline["attributes"]["name"],
                "country description": organisation["attributes"]["description"],
                "discipline description": discipline["attributes"]["description"]
            })
    except TypeError:
        continue

print(js.dumps(finalData, indent=4))
with open("PlayerTableObject.json", "w") as outfile:
    outfile.write(js.dumps(finalData, indent=4))
