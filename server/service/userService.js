class UserService {
  constructor(knex) {
    this.knex = knex;
  }

  async getAllUsers() {
    return await this.knex("users").select("*");
  }
}

module.exports = UserService;
