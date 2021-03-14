admin = db.getSiblingDB("admin")
admin.createUser(
  {
    user: "passmate",
    pwd: "$0401ahdlfks!",
    roles: [ { role: "root", db: "admin" } ]
  }
)
