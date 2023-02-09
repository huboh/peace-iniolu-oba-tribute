migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jyzvkdpu",
    "name": "phoneNumber",
    "type": "text",
    "required": true,
    "unique": true,
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
    "required": true,
    "unique": true,
    "options": {
      "min": 11,
      "max": null,
      "pattern": "((^+)(234){1}[0–9]{10})|((^234)[0–9]{10})|((^0)(7|8|9){1}(0|1){1}[0–9]{8})"
    }
  }))

  return dao.saveCollection(collection)
})
