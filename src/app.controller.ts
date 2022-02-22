import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return {
      title: 'Home',
    };
  }


  @Get('/details')
  @Render('details')
  details() {
    return {
      title: 'Details',
    };
  }


  @Get('/catalog')
  @Render('catalog')
  catalog() {
    return {
      title: 'Catalog',
    };
  }

  @Get('/notfound')
  @Render('404')
  notFound() {
    return {
      title: 'Not Found',
      dontShowHeader:true,
      dontShowFooter:true,
    };
  }


  @Get('/signin')
  @Render('signin')
  signIn() {
    return {
      title: 'Sign in',
      dontShowHeader:true,
      dontShowFooter:true,
    };
  }

  @Get('/signup')
  @Render('signup')
  signUp() {
    return {
      title: 'Sign up',
      dontShowHeader:true,
      dontShowFooter:true,
    };
  }

  @Get('/testing')
  getHello(): string {
    return this.appService.getHello();
  }
}
