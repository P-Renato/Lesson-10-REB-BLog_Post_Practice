import { Request, Response, NextFunction } from "express";
import fs from 'fs';

const posts = [
  {
    user: "user2",
    date: "02.07.2025:15:30:53",
    image: "https://picsum.photos/id/75/500/400",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, officiis.",
    likes: 5,
  },
  {
    user: "user2",
    date: "01.07.2025:15:30:53",
    image: "https://picsum.photos/id/71/500/400",
    description:
      "Lorem ipsum dolor sit amet consectetur.",
    likes: 3,
  },
  {
    user: "user2",
    date: "01.07.2025:15:30:53",
    image: "https://picsum.photos/id/78/500/400",
    description:
      "Lorem ipsum dolor sit amet consectetur.",
    likes: 3,
  },
];

export const getListOfPosts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const filesData = fs.readFileSync('data.json', {encoding:"utf-8"}).toString();
  const data = JSON.parse(filesData)
  res.json(data);
};


export const addNewPost = (req:Request, res:Response, next:NextFunction)=>{
  const newPost = req.body;
  console.log(newPost);
  posts.push(newPost);
  writeData(posts);
  res.json(posts);
}

function writeData(data){
  fs.writeFileSync("data.json", JSON.stringify(data), {encoding:'utf8'});
}