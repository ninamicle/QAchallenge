# Quick Algorithm Front-End Developer Challenge

In this challenge we are asking to follow the steps described in the list below:

1. With the data returned from the server `/list` endpoint implement an image gallery (server information below) in the client folder
2. Create a filter functionality that let the user filter the images by name and tag
3. Implement the possibility to filter by multiple tags at the same time
4. Function to add new tags to the images (just front-end side)

Optional step:

5. Implement the step 4 on the server

> If you decide to go also for the step 5, it's important that you are able to show how the step 4 was implemented.

This challenge can be accomplished with the use of any library or framework and your work should be uploaded into a personal repository on GitHub or GitLab.

For any further queries feel free to get in touch with us.

## Server information

Install all the server dependencies with the command `npm ci`

The server can be started with the command `npm start`

The local address of the server is `http://localhost:4000` (If you want you can change the port)

The `/list` endpoint will return data in this format:

```json
{"images": [
  ["id0", "name0", "url0", ["tag1", "tag2"]],
  ["id1", "name1", "url1", ["tag1", "tag2"]]
  ...
  ["idN", "nameN", "urlN", ["tag1", "tag2"]]
]}
```
