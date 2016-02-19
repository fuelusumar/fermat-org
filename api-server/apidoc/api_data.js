define({ "api": [
  {
    "type": "get",
    "url": "/v1/auth/login",
    "title": "sign in and/or log in",
    "name": "Login",
    "version": "0.0.1",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "code",
            "description": "<p>Represents the authorization code to access the registered application on github.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "api_key",
            "description": "<p>Represents the key to the application registered on the server.</p>"
          }
        ]
      }
    },
    "description": "<p>Register the user and returns the authorization to use the api.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"56b8c4c4288ff76e0f8225d3\",\n  \"_usr_id\": \"object usr\",\n  \"_app_id\": \"object app\",\n  \"axs_key\": \"56b8c4c4288ff76e0f8225d1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/v1/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/v1/auth/logout",
    "title": "logout",
    "name": "Logout",
    "version": "0.0.1",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "api_key",
            "description": "<p>Represents the key to the application registered on the server.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "axs_key",
            "description": "<p>Represents the access key to use the api.</p>"
          }
        ]
      }
    },
    "description": "<p>Removes the token.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLogout",
            "description": "<p>It indicates that the token has been removed.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/auth/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/v1/net/nodes/:hash/childrn",
    "title": "get children",
    "name": "GetChildren",
    "version": "0.0.1",
    "group": "Net",
    "description": "<p>Lists all devices connected to a P2P network node given its hash.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Hash",
            "optional": false,
            "field": "hash",
            "description": "<p>It represents the hash node.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/net/index.js",
    "groupTitle": "Net"
  },
  {
    "type": "get",
    "url": "/v1/net/servrs",
    "title": "get server network",
    "name": "GetServerNetwork",
    "version": "0.0.1",
    "group": "Net",
    "description": "<p>List servers connected to the P2P network fermat.</p>",
    "filename": "routes/v1/net/index.js",
    "groupTitle": "Net"
  },
  {
    "type": "get",
    "url": "/v1/repo/manifest/check",
    "title": "check manifest",
    "name": "CheckManifest",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>checks if the manifest has a correct format.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/book",
    "title": "get book",
    "name": "GetBook",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>Get the contents of the book of fermat.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/comps",
    "title": "get components",
    "name": "GetComps",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>List of layers, super layer, platforms, components and processes from architecture of fermat.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/devs",
    "title": "get developers",
    "name": "GetDevs",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>Get information from the developers involved in the repository fermat.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/docs/:type",
    "title": "get docs",
    "name": "GetDocs",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>Get the contents of the documentation of fermat.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Represents the type of documentation (book, readme, paper).</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/procs",
    "title": "get process",
    "name": "GetProcs",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>Get list processes from architecture of fermat.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/readme",
    "title": "get readme",
    "name": "GetReadme",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>Get the contents of the readme of fermat.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "get",
    "url": "/v1/repo/comps/reload",
    "title": "reload",
    "name": "Reload",
    "version": "0.0.1",
    "group": "REPO",
    "description": "<p>Updates the database repository components fermat.</p>",
    "filename": "routes/v1/repo/index.js",
    "groupTitle": "REPO"
  },
  {
    "type": "post",
    "url": "/v1/repo/comp/",
    "title": "add components",
    "version": "0.0.1",
    "name": "AddComp",
    "group": "Repo_Comp",
    "description": "<p>Add a component to the architecture fermat.</p>",
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "post",
    "url": "/v1/repo/comp/:comp_id/comp-devs",
    "title": "add component developer",
    "version": "0.0.1",
    "name": "AddCompDev",
    "group": "Repo_Comp",
    "description": "<p>Add component to developer.</p>",
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "delete",
    "url": "/v1/repo/comp/:comp_id",
    "title": "delete component",
    "version": "0.0.1",
    "name": "DelComp",
    "group": "Repo_Comp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "comp_id",
            "description": "<p>Represents the component identifier.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "delete",
    "url": "/v1/repo/comp/:comp_id/comp-devs/:comp_dev_id",
    "title": "delete component developer",
    "version": "0.0.1",
    "name": "DelCompDev",
    "group": "Repo_Comp",
    "description": "<p>Delete component to developer.</p>",
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "get",
    "url": "/v1/repo/comp/:comp_id",
    "title": "get component",
    "version": "0.0.1",
    "name": "GetComp",
    "group": "Repo_Comp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "comp_id",
            "description": "<p>Represents the component identifier.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "get",
    "url": "/v1/repo/comp/",
    "title": "list comps",
    "version": "0.0.1",
    "name": "ListComps",
    "group": "Repo_Comp",
    "description": "<p>Get a list of components of the architecture fermat.</p>",
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "put",
    "url": "/v1/repo/comp/:comp_id",
    "title": "update component",
    "version": "0.0.1",
    "name": "UptComp",
    "group": "Repo_Comp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "comp_id",
            "description": "<p>Represents the component identifier.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "put",
    "url": "/v1/repo/comp/:comp_id/comp-devs/:comp_dev_id",
    "title": "update component developer",
    "version": "0.0.1",
    "name": "UptCompDev",
    "group": "Repo_Comp",
    "description": "<p>Update component to developer.</p>",
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "put",
    "url": "/v1/repo/comp/:comp_id/life-cicles/:life_cicle_id",
    "title": "update lifecicles to component",
    "version": "0.0.1",
    "name": "UptLifeCiclesToComp",
    "group": "Repo_Comp",
    "description": "<p>updates the lifecycle of a component of the architecture fermat.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "comp_id",
            "description": "<p>Represents the component identifier.</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "life_cicle_id",
            "description": "<p>Represents the component identifier.</p>"
          }
        ]
      }
    },
    "filename": "routes/v1/repo/comp/index.js",
    "groupTitle": "Repo_Comp"
  },
  {
    "type": "post",
    "url": "/v1/repo/layer/",
    "title": "add layer",
    "version": "0.0.1",
    "name": "AddLayer",
    "group": "Repo_Layer",
    "description": "<p>Add a layer to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/layer/index.js",
    "groupTitle": "Repo_Layer"
  },
  {
    "type": "delete",
    "url": "/v1/repo/layer/:layer_id",
    "title": "delete layer",
    "version": "0.0.1",
    "name": "DelLay",
    "group": "Repo_Layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "layer_id",
            "description": "<p>Represents the identifier of the layer</p>"
          }
        ]
      }
    },
    "description": "<p>Delete layer to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/layer/index.js",
    "groupTitle": "Repo_Layer"
  },
  {
    "type": "get",
    "url": "/v1/repo/layer/:layer_id",
    "title": "get layer",
    "version": "0.0.1",
    "name": "GetLay",
    "group": "Repo_Layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "layer_id",
            "description": "<p>Represents the identifier of the layer</p>"
          }
        ]
      }
    },
    "description": "<p>Get a layer to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/layer/index.js",
    "groupTitle": "Repo_Layer"
  },
  {
    "type": "get",
    "url": "/v1/repo/layer/",
    "title": "get list layers",
    "version": "0.0.1",
    "name": "ListLayers",
    "group": "Repo_Layer",
    "description": "<p>get a list of layer to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/layer/index.js",
    "groupTitle": "Repo_Layer"
  },
  {
    "type": "put",
    "url": "/v1/repo/layer/:layer_id",
    "title": "update layer",
    "version": "0.0.1",
    "name": "UptLay",
    "group": "Repo_Layer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "layer_id",
            "description": "<p>Represents the identifier of the layer</p>"
          }
        ]
      }
    },
    "description": "<p>Update layer to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/layer/index.js",
    "groupTitle": "Repo_Layer"
  },
  {
    "type": "post",
    "url": "/v1/repo/platfrm/",
    "title": "add platform",
    "version": "0.0.1",
    "name": "AddPlatform",
    "group": "Repo_Platform",
    "description": "<p>Add a platform to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/platfrm/index.js",
    "groupTitle": "Repo_Platform"
  },
  {
    "type": "delete",
    "url": "/v1/repo/platfrm/:platfrm_id",
    "title": "delete platform",
    "version": "0.0.1",
    "name": "DelPltf",
    "group": "Repo_Platform",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "platfrm_id",
            "description": "<p>Represents the identifier of the platform.</p>"
          }
        ]
      }
    },
    "description": "<p>Delete platform from the architecture of fermat.</p>",
    "filename": "routes/v1/repo/platfrm/index.js",
    "groupTitle": "Repo_Platform"
  },
  {
    "type": "get",
    "url": "/v1/repo/platfrm/:platfrm_id",
    "title": "get platform",
    "version": "0.0.1",
    "name": "GetPlatform",
    "group": "Repo_Platform",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "platfrm_id",
            "description": "<p>Represents the identifier of the platform.</p>"
          }
        ]
      }
    },
    "description": "<p>Get platform from the architecture of fermat.</p>",
    "filename": "routes/v1/repo/platfrm/index.js",
    "groupTitle": "Repo_Platform"
  },
  {
    "type": "get",
    "url": "/v1/repo/platfrm/",
    "title": "list platforms",
    "version": "0.0.1",
    "name": "ListPlatforms",
    "group": "Repo_Platform",
    "description": "<p>Get list platforms from the architecture of fermat.</p>",
    "filename": "routes/v1/repo/platfrm/index.js",
    "groupTitle": "Repo_Platform"
  },
  {
    "type": "put",
    "url": "/v1/repo/platfrm/:platfrm_id",
    "title": "update platform",
    "version": "0.0.1",
    "name": "UptPltf",
    "group": "Repo_Platform",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "platfrm_id",
            "description": "<p>Represents the identifier of the platform.</p>"
          }
        ]
      }
    },
    "description": "<p>Update platform from the architecture of fermat.</p>",
    "filename": "routes/v1/repo/platfrm/index.js",
    "groupTitle": "Repo_Platform"
  },
  {
    "type": "post",
    "url": "/v1/repo/proc/",
    "title": "add process",
    "version": "0.0.1",
    "name": "AddProc",
    "group": "Repo_Proc",
    "description": "<p>Add a process to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "post",
    "url": "/v1/repo/proc/:proc_id/steps",
    "title": "add step",
    "version": "0.0.1",
    "name": "AddStep",
    "group": "Repo_Proc",
    "description": "<p>Adds a step to the process.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "put",
    "url": "/v1/repo/proc/:proc_id",
    "title": "delete process",
    "version": "0.0.1",
    "name": "DelProc",
    "group": "Repo_Proc",
    "description": "<p>Update process architecture fermat.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "delete",
    "url": "/v1/repo/proc/:proc_id/steps/:step_id",
    "title": "delete step",
    "version": "0.0.1",
    "name": "DelStep",
    "group": "Repo_Proc",
    "description": "<p>Delete a step of a process.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "delete",
    "url": "/v1/repo/proc/:proc_id",
    "title": "get process",
    "version": "0.0.1",
    "name": "GetProc",
    "group": "Repo_Proc",
    "description": "<p>Get process architecture fermat.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "get",
    "url": "/v1/repo/proc/",
    "title": "lists process",
    "version": "0.0.1",
    "name": "ListProcs",
    "group": "Repo_Proc",
    "description": "<p>Get lists of process to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "put",
    "url": "/v1/repo/proc/:proc_id",
    "title": "update process",
    "version": "0.0.1",
    "name": "UptProc",
    "group": "Repo_Proc",
    "description": "<p>Update process architecture fermat.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "put",
    "url": "/v1/repo/proc/:proc_id/steps/:step_id",
    "title": "update step",
    "version": "0.0.1",
    "name": "UptStep",
    "group": "Repo_Proc",
    "description": "<p>Updates a step of a process.</p>",
    "filename": "routes/v1/repo/proc/index.js",
    "groupTitle": "Repo_Proc"
  },
  {
    "type": "post",
    "url": "/v1/repo/suprlay/",
    "title": "add super layer",
    "version": "0.0.1",
    "name": "AddSuprLay",
    "group": "Repo_SuprLay",
    "description": "<p>Add a super layer to the architecture of fermat.</p>",
    "filename": "routes/v1/repo/suprlay/index.js",
    "groupTitle": "Repo_SuprLay"
  },
  {
    "type": "delete",
    "url": "/v1/repo/suprlay/:suprlay_id",
    "title": "delete super layer",
    "version": "0.0.1",
    "name": "DelSprlay",
    "group": "Repo_SuprLay",
    "description": "<p>Delete super layer from architecture of fermat.</p>",
    "filename": "routes/v1/repo/suprlay/index.js",
    "groupTitle": "Repo_SuprLay"
  },
  {
    "type": "get",
    "url": "/v1/repo/suprlay/:suprlay_id",
    "title": "get super layer",
    "version": "0.0.1",
    "name": "GetSprlay",
    "group": "Repo_SuprLay",
    "description": "<p>Get super layer from architecture of fermat.</p>",
    "filename": "routes/v1/repo/suprlay/index.js",
    "groupTitle": "Repo_SuprLay"
  },
  {
    "type": "get",
    "url": "/v1/repo/suprlay/",
    "title": "list super layers",
    "version": "0.0.1",
    "name": "ListSuprLays",
    "group": "Repo_SuprLay",
    "description": "<p>Get list super layer from architecture of fermat.</p>",
    "filename": "routes/v1/repo/suprlay/index.js",
    "groupTitle": "Repo_SuprLay"
  },
  {
    "type": "put",
    "url": "/v1/repo/suprlay/:suprlay_id",
    "title": "update super layer",
    "version": "0.0.1",
    "name": "UptSprlay",
    "group": "Repo_SuprLay",
    "description": "<p>Update super layer from architecture of fermat.</p>",
    "filename": "routes/v1/repo/suprlay/index.js",
    "groupTitle": "Repo_SuprLay"
  }
] });
