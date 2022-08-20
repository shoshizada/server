import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.model'
import { AnyFilesInterceptor } from '@nestjs/platform-express';

describe('UserController', () => {
  let controller: UserController;

  const mockUserService = {
    signup: jest.fn((
      user) => {
      return {
        id: Date.now(),
        ...user,
      }
    }),
    getAll: jest.fn(() => {
      return {
        users: [{
          id: expect.any(Number),
          role: "admin",
          firstName: "shalom",
          lastName: "cohen",
          phone: "025849632",
          email: "shalom@gmail.com"
        },
        {
          id: expect.any(Number),
          role: "customer",
          firstName: "uri",
          lastName: "cohen",
          phone: "025849632",
          email: "uri@gmail.com"
        }  
    ]
}
    }),
    getByID: jest.fn((id)=>{
      return {
        id:id,
        role: "customer",
          firstName: "uri",
          lastName: "cohen",
          phone: "025849632",
          email: "uri@gmail.com"
      }
    })
  }
beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    controllers: [UserController],
    providers: [UserService],
  }).overrideProvider(UserService).useValue(mockUserService).compile();

  controller = module.get<UserController>(UserController);
});

it('should be defined', () => {
  expect(controller).toBeDefined();
});
it('should create a user', () => {
  const user = {
    role: "admin",
    firstName: "shalom",
    lastName: "cohen",
    phone: "025849632",
    email: "shalom@gmail.com"
  }
  expect(mockUserService.signup).toHaveBeenCalledWith({user})
})
it('should return arry of users', () => {
  expect(mockUserService.getAll).toHaveBeenCalled();
})
it('should return user by id', () => {
  expect(mockUserService.getAll).toHaveBeenCalledWith({id:10});
})


});
