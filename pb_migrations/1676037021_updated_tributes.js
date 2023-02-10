migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9t8vbkdg",
    "name": "displayImage",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 7000000,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/heif-sequence",
        "image/heif",
        "image/heic",
        "image/heic-sequence"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9t8vbkdg",
    "name": "displayImage",
    "type": "file",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 10485760,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/gif",
        "image/webp",
        "image/svg+xml",
        "image/heif-sequence",
        "image/heif",
        "image/heic",
        "image/heic-sequence"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
