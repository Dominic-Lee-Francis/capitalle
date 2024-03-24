class UserRouter {
  constructor(express, userService) {
    this.router = express.Router();
    this.userService = userService;
  }

  router() {
    let router = this.express.Router();

    router.get("/", async (req, res) => {
      const users = await this.userService.getAllUsers();
      res.json(users);
    });
    return router;
  }
}

module.exports = UserRouter;
