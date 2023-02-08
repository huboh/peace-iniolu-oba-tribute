migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ji1sduxl",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": 250,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ji1sduxl",
    "name": "title",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
