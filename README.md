# Orphan

A super duper awesome Zelda-like clone of Binding of Isaac

# How to describe an item

To describe items we will use JSON.

### Sample Item:

```json5
{
  // The name of the character 
  "name": "Abyss",
  // This would be the full item description that is not viewed by player
  "description": "An item that has come forth from Trevor's ass",
  // a short in-game message that alludes to the use of the item (viewed by player)
  "quote": "Never again shall I sit an wallow in the stench that comes from Trevor's ass",
  // UUID specific to this item
  "id": "ae718cf2-dca5-4813-ab5f-7f7785f1b9a7",
  // Array of objects that describe sprites to be used for this item
  "sprite": [
    {
      "name": "Attack sprites",
      "path": "./sprites/abyss_attack.png"
    }
  ],
  // Array of objects that describe sounds used for this item
  "sounds": [
    {
      "name": "Abyss Attack",
      "path": "./sounds/abyss_attack.wav"
    },
    {
      "name": "Abyss Destroyed",
      "path": "./sounds/abyss_destroyed.wav"
    }
  ],
  // Array of objects that describe the criteria needed to unlock an item
  "unlock_criteria": [
    {
      "id": "1f0eab09-d9bc-45d2-8021-f19a2bcfacde",
      "name": "Game Complete",
      "description": "complete game 100%"
    }
  ],
  // A number which is used to determine dungeon difficulty
  "quality": 5,
  // The category that the item is part of
  "category": "foul",
  // What item pools this item belongs too 
  "itemPool": [
    "Tatianna"
  ],
}
```
