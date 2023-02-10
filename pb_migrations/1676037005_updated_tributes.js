migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lemxfqbt",
    "name": "tributeImage",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 7000000,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/webp",
        "image/heif",
        "image/heic-sequence",
        "image/heif-sequence",
        "image/svg+xml"
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
    "id": "lemxfqbt",
    "name": "tributeImage",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 10485760,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg",
        "image/webp",
        "image/heif",
        "image/heic-sequence",
        "image/heif-sequence",
        "image/svg+xml"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
