import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Manager } from './manager.model';
import { ManagerService } from './manager.service';

@Controller('manager')
export class ManagerController {
    constructor(private managerService: ManagerService) { }

    @Post()
    signup(@Body() newManager: Manager) {
    
        try {
           const result = this.managerService.addManager(newManager);
           return result  
        } catch (error) {
            console.log(error);
        }
       
    }
    @Get()
    getAll() {
        
        try {
             return this.managerService.getAll()
        } catch (error) {
                console.log(error);
        }
       
    }
    @Get('/:id')
    getByID(@Param('id') id: string) {

        try {
              return this.managerService.getByID(id)
        } catch (error) {
              console.log(error);
        }
      
    }
    @Delete('/:id')
    delete(@Param('id') _id: string) {

        try {
             return this.managerService.deleteManager(_id)
        } catch (error) {
            console.log(error);
        }
   
    }
    @Put('/:id')
    update(@Param('id') _id: string, @Body() updateManager: Manager) {
        console.log(_id)

        try {
              return this.managerService.updateManager(_id, updateManager)
        } catch (error) {
               console.log(error);
        }
      
    }
}
