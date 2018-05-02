class GitHub {
  constructor() {
    this.client_id = '19ee2b1049ae90f0e2eb';
    this.client_secret = 'b4c86111c3332687e15d1024350b9f2e1dbc3b3c';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
