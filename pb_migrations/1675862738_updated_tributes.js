migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vuyghtde",
    "name": "message",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 3,
      "max": null,
      "pattern": ""
    }
  }))

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // remove
  collection.schema.removeField("vuyghtde")

  // remove
  collection.schema.removeField("ji1sduxl")

  return dao.saveCollection(collection)
})
