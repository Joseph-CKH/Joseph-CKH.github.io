import { Request, Response } from "express";
import { Service } from "./service";

export class Controller {
  constructor(private service: Service) { }

  getSomething = async (req: Request, res: Response) => {
    try {
      res.status(200).json({
        result: true,
        msg: "You can GET something now!!",
      });
    } catch (e) {
      res.status(500).json({
        result: false,
        msg: e.toString(),
      });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      if (!req.body.username || !req.body.password) {
        res.status(401).json({
          result: false,
          msg: "Wrong Username or Password",
        });
        return;
      }
      const { username, password } = req.body;
      res.status(200).json({
        username: username,
        password: password,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        result: false,
        msg: toString(),
      });
    }
  };

  // [done]
  getTodoList = async (req: Request, res: Response) => {
    try {
      const type = req.query.type as string;
      const checkDelete = req.query.checkDelete as string;
      const search = req.query.search as string;
      if (
        checkDelete &&
        checkDelete !== "false" &&
        checkDelete !== "true"
      ) {
        res.status(400).json({ message: 'incorrect input of checkDelete.[ should be "true" or "false" or "" ]' });
        return;
      }
      const returnedTodoList = await this.service.readTodoList(
        type,
        checkDelete,
        search
      );
      res.status(200).json(returnedTodoList);
    } catch (e) {
      res.status(500).json({
        result: false,
        msg: e.toString(),
      });
    }
  };

  // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
  postTodoList = async (req: Request, res: Response) => {
    try {
      const tasks = await this.service.readTodoList();
      const maxTaskID = tasks.reduce((acc, cur) => {
        console.log("acc: " + acc);
        console.log("cur: " + cur);
        return acc > 1 * parseInt(cur["id"]) ? acc : 1 * parseInt(cur["id"]);
      }, 0);

      if (!req.body.task) {
        res.status(401).json({
          result: false,
          msg: "Missing Data",
        });
        return;
      }
      if (req.body.status !== 'true' && req.body.status !== 'false') {
        res.status(401).json({
          result: false,
          msg: "status input should be 'true' or 'false'",
        });
        return;
      }
      req.body["id"] = maxTaskID + 1;
      res.status(200).json(await this.service.addTodoList(req.body));
    } catch (e) {
      console.log(e);
      res.status(500).json({
        result: false,
        msg: toString(),
        log: e.toString(),
      });
    }
  };

  // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
  putTodoList = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) {
        res.status(401).json({
          result: false,
          msg: "Missing id",
        });
        return;
      }
      // const { username, password } = req.body;
      res
        .status(200)
        .json(
          await this.service.updateTodoList(
            req.params.id,
            req.body.task,
            req.body.assignedto,
            req.body.duedate,
            req.body.type,
            req.body.isDelete,
            req.body.status
          )
        );
    } catch (e) {
      console.log(e);
      res.status(500).json({
        result: false,
        msg: toString(),
      });
    }
  };

  // [done] Note: 1-id, 2-content, 3-dueDate 4-inputDate 5-picture
  deleteTodoList = async (req: Request, res: Response) => {
    try {
      if (!req.params.id) {
        res.status(401).json({
          result: false,
          msg: "Missing id",
        });
        return;
      }
      // await this.service.deleteTodoList(req.params.id)
      res.status(200).json(await this.service.deleteTodoList(req.params.id));
    } catch (e) {
      console.log(e);
      res.status(500).json({
        result: false,
        msg: toString(),
      });
    }
  };

  // [todo] Note: 1-username, 2-password
  getprofile = async (req: Request, res: Response) => {
    try {
      res.status(200).json({
        result: true,
        msg: "You can GET something now!!",
      });
    } catch (e) {
      res.status(500).json({
        result: false,
        msg: e.toString(),
      });
    }
  };

  // [todo] Note: 1-username, 2-password
  postprofile = async (req: Request, res: Response) => {
    try {
      if (!req.body.username || !req.body.password) {
        res.status(401).json({
          result: false,
          msg: "Wrong Username or Password",
        });
        return;
      }
      const { username, password } = req.body;
      res.status(200).json({
        username: username,
        password: password,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        result: false,
        msg: toString(),
      });
    }
  };

  // [todo] Note: 1-username, 2-password
  putprofile = async (req: Request, res: Response) => {
    try {
      if (!req.body.username || !req.body.password) {
        res.status(401).json({
          result: false,
          msg: "Wrong Username or Password",
        });
        return;
      }
      const { username, password } = req.body;
      res.status(200).json({
        username: username,
        password: password,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        result: false,
        msg: toString(),
      });
    }
  };
}
