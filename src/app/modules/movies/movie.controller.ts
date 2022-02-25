import { Controller, Get } from '@nestjs/common';

@Controller('/movie')
export class MovieController {
    @Get('/main')
    home() {
        return {
            msg: 'wassup'
        }
    }
}
