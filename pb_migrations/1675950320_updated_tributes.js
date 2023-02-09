migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jyzvkdpu",
    "name": "phoneNumber",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 11,
      "max": null,
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
    "id": "jyzvkdpu",
    "name": "phoneNumber",
    "type": "text",
    "required": false,
    "unique": true,
    "options": {
      "min": 11,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
