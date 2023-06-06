import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getUser(params) {
    return this.httpService
      .get(`https://api.github.com/users/${params.username}`)
      .pipe(
        map((res) => res.data),
        map((data) => ({
          githubFollowers: data.followers,
          publicRepos: data.public_repos,
          name: data.name,
          location: data.location,
          bio: data.bio,
        })),
      );
  }
}
