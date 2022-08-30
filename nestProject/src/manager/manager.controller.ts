import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Manager } from './manager.model';
import { ManagerService } from './manager.service';

@Controller('manager')
export class ManagerController {
    constructor(private managerService: ManagerService) { }

    @Post()
    signup(@Body() newManager: Manager) {
        const result = this.managerService.addManager(newManager);
        return result
    }
    @Get()
    getAll() {
        return this.managerService.getAll()
    }
    @Get('/:id')
    getByID(@Param('id') id: string) {
        return this.managerService.getByID(id)
    }
    @Delete('/:id')
    delete(@Param('id') _id: string) {
        return this.managerService.deleteManager(_id)
    }
    @Put('/:id')
    update(@Param('id') _id: string, @Body() updateManager: Manager) {
        console.log(_id)
        return this.managerService.updateManager(_id, updateManager)
    }
}
