migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "io46ubft",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // remove
  collection.schema.removeField("io46ubft")

  return dao.saveCollection(collection)
})
