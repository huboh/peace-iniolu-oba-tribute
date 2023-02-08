migrate((db) => {
  const collection = new Collection({
    "id": "l78ab5d2gh1pko6",
    "created": "2023-02-08 13:19:00.779Z",
    "updated": "2023-02-08 13:19:00.779Z",
    "name": "tributes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hns9lvtx",
        "name": "email",
        "type": "email",
        "required": true,
        "unique": true,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "ozaa5uzg",
        "name": "relationShip",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "9t8vbkdg",
        "name": "displayImage",
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
      },
      {
        "system": false,
        "id": "lemxfqbt",
        "name": "tributeImage",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
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
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l78ab5d2gh1pko6");

  return dao.deleteCollection(collection);
})
