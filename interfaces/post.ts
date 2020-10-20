const { Interface } = require("readline");

export interface MyPost {
  id: string | number
  title: string
  body: string
}